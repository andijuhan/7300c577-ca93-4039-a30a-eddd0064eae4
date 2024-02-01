import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { nanoid } from 'nanoid';
import { CreateShortUrlDto } from './dto/short-url.dto';
import { startOfMonth, endOfMonth, formatISO } from 'date-fns';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class ShortUrlService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async shortenUrl(createShortUrlDto: CreateShortUrlDto) {
    const shortUrl = await this.prisma.url.create({
      select: {
        shortSlug: true,
      },
      data: {
        ...createShortUrlDto,
        shortSlug: nanoid(5),
      },
    });

    return shortUrl;
  }

  async getShortUrlsByUserId(userId: number) {
    const data = await this.prisma.url.findMany({
      where: { userId },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        clicks: true,
      },
    });

    return data;
  }

  async getInsightByUserId(userId: number) {
    const data = await this.prisma.url.findMany({
      where: { userId },
      include: {
        clicks: {
          select: {
            id: true,
          },
        },
      },
    });

    const totalLink = data.length;
    const totalClick = data.reduce(
      (total, item) => total + item.clicks.length,
      0,
    );

    return { totalLink, totalClick };
  }

  async getDailyStatsByUserId(userId: number) {
    const currentDate = new Date();

    const startOfCurrentMonth = formatISO(startOfMonth(currentDate), {
      representation: 'complete',
    });
    const endOfCurrentMonth = formatISO(endOfMonth(currentDate), {
      representation: 'complete',
    });

    const data = await this.prisma.click.findMany({
      where: {
        date: {
          gte: startOfCurrentMonth,
          lte: endOfCurrentMonth,
        },
        url: {
          userId,
        },
      },
      orderBy: {
        date: 'desc',
      },
      select: {
        date: true,
        click: true,
      },
    });

    return data;
  }

  async getOriginalUrl(shortSlug: string) {
    const cacheValue = await this.cacheManager.get(shortSlug);

    if (cacheValue) {
      console.log('From redish cache');
      return cacheValue;
    }

    const originalUrl = await this.prisma.url.findUnique({
      where: { shortSlug },
      select: {
        originalUrl: true,
      },
    });

    await this.cacheManager.set(shortSlug, originalUrl, 1000 * 60 * 60 * 24); //cache for 1 day

    if (!originalUrl) {
      throw new NotFoundException('Url not found');
    }

    await this.prisma.click.create({
      data: {
        shortSlug,
      },
    });

    return originalUrl;
  }

  async removeShortUrl(id: number) {
    return await this.prisma.url.delete({
      where: { id },
    });
  }
}

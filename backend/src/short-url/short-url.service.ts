import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { nanoid } from 'nanoid';
import { CreateShortUrlDto } from './dto/short-url.dto';

@Injectable()
export class ShortUrlService {
  constructor(private prisma: PrismaService) {}
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
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const data = await this.prisma.click.findMany({
      where: {
        url: {
          userId,
        },
        date: {
          gte: new Date(`${currentYear}-${currentMonth}`),
          lte: currentDate,
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
    const originalUrl = await this.prisma.url.findUnique({
      where: { shortSlug },
      select: {
        originalUrl: true,
      },
    });

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

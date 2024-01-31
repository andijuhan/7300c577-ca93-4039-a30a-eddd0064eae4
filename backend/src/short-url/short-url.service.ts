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
    });

    return data;
  }

  async getInsightByUserId(userId: number) {
    const data = await this.prisma.url.findMany({
      where: { userId },
    });

    const totalLink = data.length;
    const totalClick = data.reduce((total, item) => total + item.clicks, 0);

    return { totalLink, totalClick };
  }

  async getDailyStatsByUserId(userId: number) {
    const data = await this.prisma.url.findMany({
      where: { userId },
      take: 30,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        createdAt: true,
        clicks: true,
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

    //increment clicks
    await this.prisma.url.update({
      where: { shortSlug },
      data: {
        clicks: {
          increment: 1,
        },
      },
    });

    return originalUrl;
  }

  removeShortUrl(id: number) {
    return `This action removes a #${id} shorten`;
  }
}

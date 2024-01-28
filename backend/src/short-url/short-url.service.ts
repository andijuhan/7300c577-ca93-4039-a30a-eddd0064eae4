import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { nanoid } from 'nanoid';
import { CreateShortUrlDto } from './dto/create-short-url.dto';

@Injectable()
export class ShortUrlService {
  constructor(private prisma: PrismaService) {}
  async create(createShortUrlDto: CreateShortUrlDto) {
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

  findAll() {
    return `This action returns all shorten`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shorten`;
  }

  remove(id: number) {
    return `This action removes a #${id} shorten`;
  }
}

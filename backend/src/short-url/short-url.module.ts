import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ShortUrlController } from './short-url.controller';
import { ShortUrlService } from './short-url.service';

@Module({
  controllers: [ShortUrlController],
  providers: [ShortUrlService, PrismaService],
})
export class ShortUrlModule {}

import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ShortUrlController } from './short-url.controller';
import { ShortUrlService } from './short-url.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ShortUrlController],
  providers: [ShortUrlService, PrismaService, JwtService],
})
export class ShortUrlModule {}

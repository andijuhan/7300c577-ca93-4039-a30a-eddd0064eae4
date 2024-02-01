import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ShortUrlController } from './short-url.controller';
import { ShortUrlService } from './short-url.service';
import { JwtService } from '@nestjs/jwt';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      // if you use redis
      useFactory: async () => ({
        store: redisStore as any,
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        // ttl: 1000,
      }),
    }),
  ],
  controllers: [ShortUrlController],
  providers: [ShortUrlService, PrismaService, JwtService],
})
export class ShortUrlModule {}

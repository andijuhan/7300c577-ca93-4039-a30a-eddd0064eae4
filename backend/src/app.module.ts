import { Module } from '@nestjs/common';
import { ShortUrlModule } from './short-url/short-url.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { UsersModule } from './user/users.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ShortUrlModule,
    AuthModule,
    UsersModule,
    ThrottlerModule.forRoot([
      {
        ttl: 1000 * 60, //1 minute
        limit: 100,
      },
    ]),
  ],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}

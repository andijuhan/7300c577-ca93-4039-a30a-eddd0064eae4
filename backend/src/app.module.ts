import { Module } from '@nestjs/common';
import { ShortUrlModule } from './short-url/short-url.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { UsersModule } from './user/users.module';

@Module({
  imports: [ShortUrlModule, AuthModule, UsersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

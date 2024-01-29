import { Module } from '@nestjs/common';
import { ShortUrlModule } from './short-url/short-url.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ShortUrlModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

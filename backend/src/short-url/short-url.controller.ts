import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { CreateShortUrlDto } from './dto/short-url.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Throttle } from '@nestjs/throttler';

@Controller('short-url')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Throttle({ default: { limit: 100, ttl: 10 * 1000 } }) // 100 req per 10 seconds
  @Post()
  createShortUrl(@Body() dto: CreateShortUrlDto) {
    return this.shortUrlService.shortenUrl(dto);
  }

  @UseGuards(JwtGuard)
  @Get('/data/:userId')
  getShortUrlByUserId(@Param('userId') userId: string) {
    return this.shortUrlService.getShortUrlsByUserId(+userId);
  }

  @UseGuards(JwtGuard)
  @Get('/stats/:userId')
  getDailyStatsByUserId(@Param('userId') userId: string) {
    return this.shortUrlService.getDailyStatsByUserId(+userId);
  }

  @UseGuards(JwtGuard)
  @Get('/insight/:userId')
  getInsightByUserId(@Param('userId') userId: string) {
    return this.shortUrlService.getInsightByUserId(+userId);
  }

  @Throttle({ default: { limit: 100, ttl: 10 * 1000 } }) // 100 req per 10 seconds
  @Get(':shortSlug')
  getOriginalUrl(@Param('shortSlug') shortSlug: string) {
    return this.shortUrlService.getOriginalUrl(shortSlug);
  }

  @Delete(':id')
  removeShortUrl(@Param('id') id: string) {
    return this.shortUrlService.removeShortUrl(+id);
  }
}

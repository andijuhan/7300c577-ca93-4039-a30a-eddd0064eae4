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

@Controller('short-url')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

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

  @Get(':shortSlug')
  getOriginalUrl(@Param('shortSlug') shortSlug: string) {
    return this.shortUrlService.getOriginalUrl(shortSlug);
  }

  @Delete(':id')
  removeShortUrl(@Param('id') id: string) {
    return this.shortUrlService.removeShortUrl(+id);
  }
}

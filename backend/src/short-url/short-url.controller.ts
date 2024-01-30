import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { CreateShortUrlDto } from './dto/short-url.dto';

@Controller('short-url')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Post()
  createShortUrl(@Body() dto: CreateShortUrlDto) {
    return this.shortUrlService.shortenUrl(dto);
  }

  @Get()
  findAllShortUrls() {
    return this.shortUrlService.ShortUrl();
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

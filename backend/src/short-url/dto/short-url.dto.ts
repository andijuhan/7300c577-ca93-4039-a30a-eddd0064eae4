import {
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateShortUrlDto {
  @IsUrl()
  @MaxLength(1000)
  originalUrl: string;

  @IsOptional()
  @IsString()
  shortSlug: string;

  @IsOptional()
  @IsNumber()
  userId: number;
}

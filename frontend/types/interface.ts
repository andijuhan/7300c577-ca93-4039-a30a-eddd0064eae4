export interface IShortUrl {
  id: number;
  shortSlug: string;
  originalUrl: string;
  createdAt: Date;
  clicks: number;
}

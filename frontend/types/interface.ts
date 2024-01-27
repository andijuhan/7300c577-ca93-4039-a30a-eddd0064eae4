export interface IUrlShortener {
  id: number;
  shortSlug: string;
  originalUrl: string;
  createdAt: Date;
  clicks: number;
}

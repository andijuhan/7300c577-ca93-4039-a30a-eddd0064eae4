export interface IManageShortener {
  id: string;
  shortUrl: string;
  destinationUrl: string;
  created: Date;
  clicks: number;
}

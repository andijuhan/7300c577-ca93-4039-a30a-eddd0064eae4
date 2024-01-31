import { IShortUrl } from "@/types/interface";

// Contoh data TypeScript
type ClickData = {
  date: string;
  clicks: number;
};

const sampleData: ClickData[] = [
  { date: "2024-01-01", clicks: 100 },
  { date: "2024-01-02", clicks: 150 },
  { date: "2024-01-03", clicks: 120 },
  { date: "2024-01-04", clicks: 200 },
  { date: "2024-01-05", clicks: 180 },
];

// export const labels: string[] = sampleData.map((data) => data.date);
// export const clicks: number[] = sampleData.map((data) => data.clicks);

export const urlShorteners: IShortUrl[] = [
  {
    id: 1,
    shortSlug: "abcde",
    originalUrl: "https://google.com",
    createdAt: new Date(getRandomDate()),
    clicks: 15,
  },
  {
    id: 2,
    shortSlug: "fghij",
    originalUrl:
      "https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables",
    createdAt: new Date(getRandomDate()),
    clicks: 12,
  },
  {
    id: 3,
    shortSlug: "klmno",
    originalUrl: "https://stackoverflow.com",
    createdAt: new Date(getRandomDate()),
    clicks: 18,
  },
  {
    id: 4,
    shortSlug: "pqrst",
    originalUrl: "https://github.com",
    createdAt: new Date(getRandomDate()),
    clicks: 20,
  },
  {
    id: 5,
    shortSlug: "uvwxy",
    originalUrl: "https://reddit.com",
    createdAt: new Date(getRandomDate()),
    clicks: 14,
  },
  {
    id: 6,
    shortSlug: "zabcd",
    originalUrl: "https://news.ycombinator.com",
    createdAt: new Date(getRandomDate()),
    clicks: 25,
  },
  {
    id: 7,
    shortSlug: "efghi",
    originalUrl: "https://amazon.com",
    createdAt: new Date(getRandomDate()),
    clicks: 22,
  },
  {
    id: 8,
    shortSlug: "jklmn",
    originalUrl: "https://bing.com",
    createdAt: new Date(getRandomDate()),
    clicks: 30,
  },
  {
    id: 9,
    shortSlug: "opqrs",
    originalUrl: "https://wikipedia.org",
    createdAt: new Date(getRandomDate()),
    clicks: 17,
  },
  {
    id: 10,
    shortSlug: "tuvwx",
    originalUrl: "https://twitter.com",
    createdAt: new Date(getRandomDate()),
    clicks: 28,
  },
  {
    id: 11,
    shortSlug: "yzabc",
    originalUrl: "https://facebook.com",
    createdAt: new Date(getRandomDate()),
    clicks: 19,
  },
  {
    id: 12,
    shortSlug: "defgh",
    originalUrl: "https://instagram.com",
    createdAt: new Date(getRandomDate()),
    clicks: 16,
  },
  {
    id: 13,
    shortSlug: "ijklm",
    originalUrl: "https://linkedin.com",
    createdAt: new Date(getRandomDate()),
    clicks: 14,
  },
  {
    id: 14,
    shortSlug: "nopqr",
    originalUrl: "https://youtube.com",
    createdAt: new Date(getRandomDate()),
    clicks: 32,
  },
  {
    id: 15,
    shortSlug: "stuvw",
    originalUrl: "https://microsoft.com",
    createdAt: new Date(getRandomDate()),
    clicks: 21,
  },
  {
    id: 16,
    shortSlug: "xyzab",
    originalUrl: "https://apple.com",
    createdAt: new Date(getRandomDate()),
    clicks: 27,
  },
  {
    id: 17,
    shortSlug: "cdefg",
    originalUrl: "https://netflix.com",
    createdAt: new Date(getRandomDate()),
    clicks: 26,
  },
  {
    id: 18,
    shortSlug: "hijkl",
    originalUrl: "https://spotify.com",
    createdAt: new Date(getRandomDate()),
    clicks: 29,
  },
  {
    id: 19,
    shortSlug: "mnopq",
    originalUrl: "https://discord.com",
    createdAt: new Date(getRandomDate()),
    clicks: 23,
  },
  {
    id: 20,
    shortSlug: "rstuv",
    originalUrl: "https://slack.com",
    createdAt: new Date(getRandomDate()),
    clicks: 18,
  },
];

function getRandomDate() {
  const startDate = new Date(2022, 0, 1); // Assuming the start date
  const endDate = new Date(); // Current date
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime()),
  );
  return randomDate;
}

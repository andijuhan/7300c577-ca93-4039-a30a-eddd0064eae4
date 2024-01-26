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
  // Tambahkan data lainnya sesuai kebutuhan Anda
];

export const labels: string[] = sampleData.map((data) => data.date);
export const clicks: number[] = sampleData.map((data) => data.clicks);

// Gunakan labels dan dataset dalam komponen atau grafik Chart.js
// ...

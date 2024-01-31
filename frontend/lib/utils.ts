import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDaysInThisMonth() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Bulan dimulai dari 0 (Januari)

  const startDate = new Date(year, month - 1, 1); // Awal bulan
  const endDate = new Date(year, month, 0); // Akhir bulan

  const daysInMonth = endDate.getDate(); // Mendapatkan jumlah hari dalam bulan

  return daysInMonth;
}

export function generateDefaultGraphData(daysInThisMonth: number) {
  const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const year = new Date().getFullYear();

  const dateArr = [];
  for (let i = 1; i <= daysInThisMonth; i++) {
    dateArr.push({
      date: `${year}-${month}-${i.toString().padStart(2, "0")}`,
      clicks: 0,
    });
  }

  return dateArr;
}

"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface ChartProps {
  labels: string[];
  clicks: number[];
}

export default function Chart({ labels, clicks }: ChartProps) {
  const chartData: ChartData<"bar"> = {
    labels: labels,
    datasets: [
      {
        label: "Clicks",
        data: clicks,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgb(53, 162, 235, 0.4)",
      },
    ],
  };

  const chartOptions: ChartOptions<"bar"> = {
    scales: {
      y: {
        type: "linear", // Menggunakan skala linear pada sumbu Y
        ticks: {
          stepSize: 20, // Menetapkan langkah ukuran agar hanya menampilkan angka bulat pada sumbu Y
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily clicks",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="flex w-full flex-col gap-3 rounded-xl border bg-gray-50 p-5 text-gray-800">
      <Bar
        data={chartData}
        options={chartOptions}
        className="min-h-[300px] md:min-h-[400px]"
      />
    </div>
  );
}

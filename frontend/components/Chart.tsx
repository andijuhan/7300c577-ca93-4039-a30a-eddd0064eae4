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
import { useEffect, useState } from "react";
import { labels, clicks } from "@/data/shorturl-stats";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function Chart() {
  const chartData: ChartData<"bar"> = {
    labels,
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
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily clicks",
      },
    },
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className="flex w-full flex-col gap-3 rounded-xl border bg-gray-50 p-5 text-gray-800">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

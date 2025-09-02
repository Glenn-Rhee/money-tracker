"use client";
import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#0E3E3E",
        font: {
          size: 12,
        },
      },
    },
    y: {
      ticks: {
        color: "#6DB6FE",
      },
    },
  },
};

const data: ChartData<"bar"> = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Income",
      data: [3000, 1000, 6000, 500, 10000, 2500, 2000],
      backgroundColor: "#00D09E", // hijau tosca
      borderRadius: 4,
    },
    {
      label: "Expense",
      data: [6000, 2500, 4500, 0, 8500, 500, 5500],
      backgroundColor: "#0068FF", // biru
      borderRadius: 4,
    },
  ],
};
export default function BarChart() {
  return <Bar data={data} className="mt-2" options={options} />;
}

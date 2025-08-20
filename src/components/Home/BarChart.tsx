"use client";
import {
  BarElement,
  CategoryScale,
  Chart,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import CardShell from "../CardShell";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  data: ChartData<"bar">;
  title: string;
}
export default function BarChart(props: BarChartProps) {
  const { data, title } = props;
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        display: false,
      },
      title: {
        display: true,
        // text: title,
        color: "black",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
          font: {
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          color: "black",
        },
      },
    },
  };

  return (
    <CardShell className="flex flex-col order-first md:order-last">
      <h1 className="font-semibold text-lg text-slate-900">{title}</h1>
      <div className="w-full flex items-center justify-center">
        <Bar className="w-full" data={data} options={options} />
      </div>
    </CardShell>
  );
}

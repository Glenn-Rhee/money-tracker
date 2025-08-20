import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import CardShell from "../CardShell";
import type { ChartOptions } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
export default function ExpensesChart() {
  const data = {
    labels: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"],
    datasets: [
      {
        label: "Income",
        data: [3000000, 2500000, 4000000, 3200000], // data dummy
        backgroundColor: "#16a34a", // green-600
      },
      {
        label: "Expense",
        data: [1500000, 2000000, 1800000, 2200000], // data dummy
        backgroundColor: "#dc2626", // red-600
      },
    ],
  };
  const options: ChartOptions = {
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <CardShell className="order-first lg:order-last">
      <h4 className="text-slate-900 text-lg font-semibold">
        Financial Overview
      </h4>
      <div className="w-full mt-2 flex items-center justify-center">
        <Bar data={data} options={options} />
      </div>
    </CardShell>
  );
}

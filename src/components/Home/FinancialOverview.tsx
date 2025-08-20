"use client";
import { Doughnut } from "react-chartjs-2";
import CardShell from "../CardShell";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function FinancialOverview() {
  const data = {
    labels: ["Income", "Expense", "Total Balance"],
    datasets: [
      {
        label: "Balance",
        data: [6000000, 3000000, 3000000],
        backgroundColor: [
          "oklch(62.7% 0.194 149.214)",
          "oklch(57.7% 0.245 27.325)",
          "oklch(51.1% 0.262 276.966)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    cutout: "80%",
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };
  return (
    <CardShell className="order-first lg:order-last">
      <h4 className="text-slate-900 text-lg font-semibold">
        Financial Overview
      </h4>
      <div className="w-full mt-2 flex items-center justify-center">
        <Doughnut
          className="max-w-xl aspect-square"
          data={data}
          options={options}
        />
      </div>
    </CardShell>
  );
}

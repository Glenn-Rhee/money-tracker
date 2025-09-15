"use client";
import DonutChart from "@/components/charts/DonutChart";
import { ChartData, ChartOptions } from "chart.js";
import { useSearchParams } from "next/navigation";

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  cutout: "0%",
  maintainAspectRatio: true,
  plugins: {
    legend: { display: true, position: "bottom", align: "start" },
  },
};

export const data: ChartData<"doughnut"> = {
  labels: ["Income", "Expenses"],
  datasets: [
    {
      data: [7500, 2500],
      backgroundColor: ["#0068FF", "#00D8FF"],
      borderWidth: 0,
    },
  ],
};

export default function CategoryTabs() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  if (!tab || tab !== "categories") return null;

  return (
    <div className="w-full flex justify-center max-h-52 bg-bggreen-whiteletter pb-10">
      <DonutChart data={data} options={options} />
    </div>
  );
}

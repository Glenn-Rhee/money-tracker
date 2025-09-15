"use client";
import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Plugin,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useRef } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  data: ChartData<"doughnut">;
  options: ChartOptions<"doughnut">;
  centerIcon?: Plugin;
}

export default function DonutChart(props: DonutChartProps) {
  const { data, options, centerIcon } = props;
  const chartRef = useRef(null);

  return (
    <Doughnut
      ref={chartRef}
      data={data}
      options={options}
      plugins={centerIcon ? [centerIcon] : undefined}
    />
  );
}

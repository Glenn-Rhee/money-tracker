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

export default function DonutChart() {
  const chartRef = useRef(null);

  const data: ChartData<"doughnut"> = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [7500, 2500],
        backgroundColor: ["#0068FF", "#F1FFF3"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "90%",
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  const centerIcon: Plugin = {
    id: "centerIcon",
    afterDraw(chart) {
      const {
        ctx,
        chartArea: { left, right, top, bottom },
      } = chart;
      const x = (left + right) / 2;
      const y = (top + bottom) / 2;

      const image = new Image();
      image.src = "/Car.png";

      image.onload = () => {
        const size = 30;
        ctx.drawImage(image, x - size / 2, y - size / 2, size, size);
      };
    },
  };

  return (
    <Doughnut
      ref={chartRef}
      data={data}
      options={options}
      plugins={[centerIcon]}
    />
  );
}

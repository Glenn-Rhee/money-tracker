import { ChartData } from "chart.js";

export const data: ChartData<"doughnut"> = {
  labels: ["Income", "Expenses"],
  datasets: [
    {
      data: [7500, 2500],
      backgroundColor: ["#0068FF", "#F1FFF3"],
      borderWidth: 0,
    },
  ],
};

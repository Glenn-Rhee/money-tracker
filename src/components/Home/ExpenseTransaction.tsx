import { ChartData } from "chart.js";
import BarChart from "./BarChart";
import Expense from "./Expense";

export default function ExpenseTransaction() {
  const data: ChartData<"bar"> = {
    labels: ["W1", "W2", "W3", "W4"],
    datasets: [
      {
        label: "Expense",
        data: [1000, 2000, 1500, 3000],
        backgroundColor: "oklch(58.6% 0.253 17.585)",
        borderColor: "oklch(58.6% 0.253 17.585)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
      <Expense />
      <BarChart  data={data} title="Last this month"/>
    </div>
  );
}

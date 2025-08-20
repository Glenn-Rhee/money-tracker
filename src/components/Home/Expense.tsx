import Link from "next/link";
import CardShell from "../CardShell";
import Transactions from "./Transactions";

export default function Expense() {
  return (
    <CardShell>
      <div className="w-full px-2 pt-1 flex items-center justify-between">
        <span className="text-slate-900 text-lg font-semibold">Expenses</span>
        <Link href={"/"} className="flex items-center gap-x-1">
          <span className="font-semibold text-sm text-gray-600">See All</span>
          <i className="ri-arrow-right-line text-gray-600"></i>
        </Link>
      </div>
      <Transactions />
    </CardShell>
  );
}

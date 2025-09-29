"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function TabTransaction() {
  const searchParams = useSearchParams();
  const by = searchParams.get("by");

  return (
    <div className="flex flex-col w-full gap-y-2 p-4">
      <Link
        href={"/transactions"}
        className="w-full flex flex-col text-lettersIcon items-center rounded-md gap-y-1 px-4 py-2 bg-bggreen-whiteletter"
      >
        <span className="text-sm font-semibold">Total Balance</span>
        <span className="text-lg font-bold">Rp 7.000.000</span>
      </Link>

      <div className="flex items-center gap-x-2">
        <Link
          href={"/transactions?by=income"}
          className={clsx(
            "w-full flex flex-col items-center rounded-md px-3 py-2",
            by === "income"
              ? "bg-oceanblue-btn text-white"
              : "bg-bggreen-whiteletter text-lettersIcon"
          )}
        >
          <div
            className={clsx(
              "border-[2px] rounded-md px-1",
              by === "income" ? "border-white" : "border-maingreen"
            )}
          >
            <i
              className={clsx(
                "ri-arrow-right-up-line text-2xl",
                by === "income" ? "text-white" : "text-maingreen"
              )}
            ></i>
          </div>
          <span className="text-sm font-semibold">Income</span>
          <span className="text-lg font-bold">Rp 4.000.000</span>
        </Link>
        <Link
          href={"/transactions?by=expense"}
          className={clsx(
            "w-full flex flex-col items-center rounded-md px-3 py-2",
            by === "expense"
              ? "bg-oceanblue-btn text-white"
              : "bg-bggreen-whiteletter text-lettersIcon"
          )}
        >
          <div
            className={clsx(
              "border-[2px] rounded-md px-1",
              by === "expense" ? "border-white" : "border-maingreen"
            )}
          >
            <i
              className={clsx(
                "ri-arrow-right-down-line text-2xl",
                by === "expense" ? "text-white" : "text-maingreen"
              )}
            ></i>
          </div>
          <span className="text-sm font-semibold">Expense</span>
          <span
            className={clsx(
              "text-lg font-bold",
              by === "expense" ? "text-white" : "text-oceanblue-btn"
            )}
          >
            Rp 3.000.000
          </span>
        </Link>
      </div>
    </div>
  );
}

"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function TabCalender() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  return (
    <div className="mt-2 flex items-center gap-x-3 justify-around w-full">
      <Link
        href={"/analysis/calender?tab=spends"}
        className={clsx(
          "w-1/2 font-semibold text-lg text-center rounded-lg py-0.5 text-lettersIcon",
          tab
            ? tab === "spends" || tab !== "categories"
              ? "bg-maingreen"
              : "bg-lightgreen"
            : "bg-maingreen"
        )}
      >
        Spends
      </Link>
      <Link
        href={"/analysis/calender?tab=categories"}
        className={clsx(
          "w-1/2 font-semibold text-lg text-center rounded-lg py-0.5 text-lettersIcon",
          tab === "categories" ? "bg-maingreen" : "bg-lightgreen"
        )}
      >
        Categories
      </Link>
    </div>
  );
}

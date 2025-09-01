"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ToggleGroup() {
  const searchParams = useSearchParams();
  const filterBy = searchParams.get("filterBy");
  return (
    <div className="mx-auto mt-1 w-full bg-lightgreen rounded-[31px] flex items-center py-1 px-4 justify-around gap-x-4">
      <Link
        href={"/?filterBy=daily"}
        className={clsx(
          "px-3 py-1 rounded-lg",
          filterBy
            ? filterBy === "daily" ||
              (filterBy !== "weekly" && filterBy !== "monthly")
              ? "bg-maingreen"
              : ""
            : "bg-maingreen"
        )}
      >
        <span className="text-bgdarkmode-letter">Daily</span>
      </Link>
      <Link
        href={"/?filterBy=weekly"}
        className={clsx(
          "px-3 py-1 rounded-lg",
          filterBy === "weekly" ? "bg-maingreen" : ""
        )}
      >
        <span className="text-bgdarkmode-letter">Weekly</span>
      </Link>
      <Link
        href={"/?filterBy=monthly"}
        className={clsx(
          "px-3 py-1 rounded-lg",
          filterBy === "monthly" ? "bg-maingreen" : ""
        )}
      >
        <span className="text-bgdarkmode-letter">Monthly</span>
      </Link>
    </div>
  );
}

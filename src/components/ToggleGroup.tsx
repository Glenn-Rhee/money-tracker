"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ToggleGroup({
  className,
  withYear,
  baseUrl,
}: {
  className?: string;
  withYear?: boolean;
  baseUrl?: string;
}) {
  const searchParams = useSearchParams();
  const filterBy = searchParams.get("filterBy");
  const url = baseUrl || "/";
  return (
    <div
      className={clsx(
        "mx-auto mt-1 w-full bg-lightgreen rounded-[31px] flex items-center py-1 px-4 justify-around gap-x-4",
        className
      )}
    >
      <Link
        href={`${url}?filterBy=daily`}
        className={clsx(
          "px-3 py-1 rounded-lg",
          filterBy
            ? filterBy === "daily" ||
              (filterBy !== "weekly" &&
                filterBy !== "monthly" &&
                filterBy !== "year")
              ? "bg-maingreen"
              : ""
            : "bg-maingreen"
        )}
      >
        <span className="text-bgdarkmode-letter">Daily</span>
      </Link>
      <Link
        href={`${url}?filterBy=weekly`}
        className={clsx(
          "px-3 py-1 rounded-lg",
          filterBy === "weekly" ? "bg-maingreen" : ""
        )}
      >
        <span className="text-bgdarkmode-letter">Weekly</span>
      </Link>
      <Link
        href={`${url}?filterBy=monthly`}
        className={clsx(
          "px-3 py-1 rounded-lg",
          filterBy === "monthly" ? "bg-maingreen" : ""
        )}
      >
        <span className="text-bgdarkmode-letter">Monthly</span>
      </Link>
      {withYear && (
        <Link
          href={`${url}?filterBy=year`}
          className={clsx(
            "px-3 py-1 rounded-lg",
            filterBy === "year" ? "bg-maingreen" : ""
          )}
        >
          <span className="text-bgdarkmode-letter">Year</span>
        </Link>
      )}
    </div>
  );
}

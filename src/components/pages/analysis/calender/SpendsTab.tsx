"use client";
import { useSearchParams } from "next/navigation";
import CardItem from "../CardItem";

export default function SpendsTab() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  if (tab && tab === "categories") return null;
  
  return (
    <div className="space-y-2 w-full">
      <div className="flex flex-col gap-y-3">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}

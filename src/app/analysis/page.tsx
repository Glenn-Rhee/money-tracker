import CardAnalysis from "@/components/CardAnalysis";
import BarChart from "@/components/charts/BarChart";
import DonutChart from "@/components/charts/DonutChart";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import LogoutBtn from "@/components/LogoutBtn";
import ToggleGroup from "@/components/ToggleGroup";
import Image from "next/image";
import { Suspense } from "react";

export default function AnalysisPage() {
  return (
    <Suspense>
      <Header>
        <button className="text-2xl text-bggreen-whiteletter">
          <i className="ri-arrow-left-line"></i>
        </button>
        <span className="text-xl font-bold text-darkmode-green-bar">
          Analysis
        </span>
        <LogoutBtn />
      </Header>
      <CardAnalysis />
      <Drawer className="justify-start overflow-y-auto items-start px-5 max-h-[33rem]">
        <ToggleGroup className="mt-4" withYear baseUrl="/analysis" />
        <div className="w-full mx-auto px-4 py-1 bg-lightgreen rounded-md">
          <div className="flex items-center justify-between">
            <span className="text- font-semibold text-lettersIcon">
              Income & Expenses
            </span>
            <div className="flex items-center gap-x-1">
              <div className="bg-maingreen rounded-lg aspect-square px-2 flex items-center justify-center">
                <i className="ri-search-line"></i>
              </div>
              <div className="bg-maingreen rounded-lg aspect-square px-2 flex items-center justify-center">
                <i className="ri-calendar-line"></i>
              </div>
            </div>
          </div>
          <BarChart />
        </div>
        <div className="flex items-center mt-1 w-full justify-around">
          <div className="flex flex-col w-1/2 items-center">
            <Image
              src={"/svg/income-green.svg"}
              width={25}
              height={25}
              alt="Income Icon"
            />
            <span className="text-lettersIcon font-medium text-sm">
              Expense
            </span>
            <span className="text-lettersIcon font-bold text-lg">Rp 4.000</span>
          </div>
          <div className="flex flex-col w-1/2 items-center">
            <Image
              src={"/svg/expense-blue.svg"}
              width={25}
              height={25}
              alt="Income Icon"
            />
            <span className="text-lettersIcon font-medium text-sm">Income</span>
            <span className="text-oceanblue-btn font-bold text-lg">
              Rp 1.000
            </span>
          </div>
        </div>
        <div className="mt-1 w-full">
          <h6 className="font-semibold text-lg text-lettersIcon">My Target</h6>
          <div className="w-full mt-1 mb-20 px-3 py-1 flex items-center justify-center gap-x-2">
            <div className="bg-lightblue-btn aspect-square p-2 rounded-lg flex flex-col items-center justify-center w-1/2">
              <DonutChart text="30%" />
              <span className="font-semibold text-lg text-bggreen-whiteletter">
                Travel
              </span>
            </div>
            <div className="bg-lightblue-btn aspect-square p-2 rounded-lg flex flex-col items-center justify-center w-1/2">
              <DonutChart text="50%" />
              <span className="font-semibold text-lg text-bggreen-whiteletter">
                Travel
              </span>
            </div>
          </div>
        </div>
      </Drawer>
    </Suspense>
  );
}

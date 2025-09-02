import CardAnalysis from "@/components/CardAnalysis";
import DonutChart from "@/components/charts/DonutChart";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import LogoutBtn from "@/components/LogoutBtn";
import ToggleGroup from "@/components/ToggleGroup";
import { getGreeting } from "@/helper/getGreeting";
import Image from "next/image";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense>
      <Header>
        <div className="flex flex-col text-darkmode-green-bar">
          <span className="text-2xl font-bold">Hi, Welcome Back User</span>
          <span className="text-lg font-medium">Good {getGreeting()}</span>
        </div>
        <LogoutBtn />
      </Header>
      <CardAnalysis />
      <Drawer className="justify-start items-start px-5 max-h-[33rem]">
        <div className="mx-auto mt-4 bg-maingreen rounded-[31px] px-4 py-2 grid grid-cols-[9rem_1fr] w-full items-center">
          <div className="flex flex-col items-center border-r-4 w-full pr-6 border-white justify-center gap-y-2">
            <DonutChart />
            <span className="text-center font-medium text-lettersIcon">
              Savings On Goals
            </span>
          </div>
          <div className="flex flex-col gap-y-5 ms-1 h-full items-center justify-center">
            <div className="flex items-center gap-x-2">
              <Image
                src={"/svg/Salary.svg"}
                alt="Salary icon"
                width={33}
                className="w-[33px] h-[33px]"
                height={33}
              />
              <div className="flex flex-col ms-1">
                <span className="font-medium text-sm text-bgdarkmode-letter">
                  Revenue Last Week
                </span>
                <span className="font-semibold text-bgdarkmode-letter">
                  Rp 4.000.000
                </span>
              </div>
            </div>
            <div className="w-full h-1 bg-white" />
            <div className="flex items-center gap-x-2">
              <i
                className="ri-arrow-down-circle-line text-[33px] text-bgdarkmode-letter"
                color="red"
              ></i>
              <div className="flex flex-col">
                <span className="font-medium text-sm text-bgdarkmode-letter">
                  Expense Last Week
                </span>
                <span className="font-semibold text-oceanblue-btn">
                  -Rp 200.000
                </span>
              </div>
            </div>
          </div>
        </div>
        <ToggleGroup />
        <div className="h-40 w-full space-y-3 mt-1 overflow-y-scroll">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center justify-center p-2 bg-lightblue-btn rounded-lg">
                <Image
                  src={"/svg/Salary.svg"}
                  alt="Salary icon"
                  width={33}
                  height={33}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-bgdarkmode-letter">
                  Salary
                </span>
                <span className="text-sm font-semibold text-[#0068FF]">
                  30 April 2025, 18.27
                </span>
              </div>
            </div>
            <span className="font-semibold text-bgdarkmode-letter">
              Rp 4.000.000
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center justify-center p-2 aspect-square bg-lightblue-btn rounded-lg">
                <Image
                  src={"/svg/groceries.svg"}
                  alt="Groceries icon"
                  width={33}
                  height={33}
                  className="w-[33px] h-[33px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-bgdarkmode-letter">
                  Groceries
                </span>
                <span className="text-sm font-semibold text-[#0068FF]">
                  24 April 2025, 17.00
                </span>
              </div>
            </div>
            <span className="font-semibold text-bgdarkmode-letter">
              Rp 4.000.000
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center justify-center p-2 bg-lightblue-btn rounded-lg">
                <Image
                  src={"/svg/rent.svg"}
                  alt="Rent icon"
                  width={33}
                  height={33}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-bgdarkmode-letter">
                  Rent
                </span>
                <span className="text-sm font-semibold text-[#0068FF]">
                  30 April 2025, 18.27
                </span>
              </div>
            </div>
            <span className="font-semibold text-bgdarkmode-letter">
              Rp 4.000.000
            </span>
          </div>
        </div>
      </Drawer>
    </Suspense>
  );
}

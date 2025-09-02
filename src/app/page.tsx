import DonutChart from "@/components/DonutChart";
import Drawer from "@/components/Drawer";
import ProgressBar from "@/components/ProgressBar";
import ToggleGroup from "@/components/ToggleGroup";
import { getGreeting } from "@/helper/getGreeting";
import Image from "next/image";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense>
      <header className="flex items-center justify-between p-4">
        <div className="flex flex-col text-darkmode-green-bar">
          <span className="text-2xl font-bold">Hi, Welcome Back User</span>
          <span className="text-lg font-medium">Good {getGreeting()}</span>
        </div>
        <button className="text-lg bg-lightgreen rounded-full aspect-square w-[30px] h-[30px] flex items-center justify-center">
          <i className="ri-logout-box-r-line"></i>
        </button>
      </header>
      <div className="w-[85vw] mt-2 max-w-[30rem] mx-auto space-y-1">
        <div className="w-full justify-center gap-x-6 flex items-center">
          <div className="space-y-1">
            <div className="flex gap-x-2 items-center">
              <Image
                src={"/svg/income.svg"}
                alt="Income icon"
                width={20}
                height={20}
              />
              <span className="text-sm text-lettersIcon">Total balance</span>
            </div>
            <span className="font-bold text-bggreen-whiteletter text-xl">
              Rp 7.783.000
            </span>
          </div>
          <div className="h-15 bg-bggreen-whiteletter w-[2px]" />
          <div className="space-y-1">
            <div className="flex gap-x-2 items-center">
              <Image
                src={"/svg/Expense.svg"}
                alt="Expense icon"
                width={20}
                height={20}
              />
              <span className="text-sm text-lettersIcon">Total Expense</span>
            </div>
            <span className="font-bold text-oceanblue-btn text-xl">
              -Rp 1.783.000
            </span>
          </div>
        </div>
        <ProgressBar />
        <span className="text-sm text-bgdarkmode-letter">
          30% Of your expenses, looks good.
        </span>
      </div>
      <Drawer className="justify-start items-start px-5 max-h-[33rem]">
        <div className="mx-auto mt-4 bg-maingreen rounded-[31px] px-4 py-4 grid grid-cols-[9rem_1fr] w-full items-center">
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
      </Drawer>
    </Suspense>
  );
}

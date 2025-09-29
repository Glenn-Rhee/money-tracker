"use client";
import Card from "@/components/Card";
import CardAnalysis from "@/components/CardAnalysis";
import CardShell from "@/components/CardShell";
import DonutChart from "@/components/charts/DonutChart";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import LogoutBtn from "@/components/LogoutBtn";
import ToggleGroup from "@/components/ToggleGroup";
import { getGreeting } from "@/helper/getGreeting";
import { data } from "@/utils/data-tracker";
import { ChartOptions, Plugin } from "chart.js";
import NextImage from "next/image";
import { Suspense } from "react";

const options: ChartOptions<"doughnut"> = {
  cutout: "90%",
  responsive: true,
  plugins: {
    legend: { display: false },
  },
};

const centerIcon: Plugin = {
  id: "centerIcon",
  afterDraw(chart) {
    const {
      ctx,
      chartArea: { left, right, top, bottom },
    } = chart;
    const x = (left + right) / 2;
    const y = (top + bottom) / 2;

    const image = new Image();
    image.src = "/Car.png";
    image.onload = () => {
      const size = 30;
      ctx.drawImage(image, x - size / 2, y - size / 2, size, size);
    };
  },
};
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
            <DonutChart data={data} options={options} centerIcon={centerIcon} />
            <span className="text-center font-medium text-lettersIcon">
              Savings On Goals
            </span>
          </div>
          <div className="flex flex-col gap-y-5 ms-1 h-full items-center justify-center">
            <div className="flex items-center gap-x-2">
              <NextImage
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
        <CardShell isScrolling>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardShell>
      </Drawer>
    </Suspense>
  );
}

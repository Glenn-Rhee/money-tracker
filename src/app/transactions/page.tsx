import BackBtn from "@/components/BackBtn";
import Card from "@/components/Card";
import CardShell from "@/components/CardShell";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import LogoutBtn from "@/components/LogoutBtn";
import Link from "next/link";
import { Suspense } from "react";

export default function TransactionsPage() {
  return (
    <Suspense>
      <Header>
        <BackBtn />
        <span className="text-xl font-bold text-darkmode-green-bar">
          Transaction
        </span>
        <LogoutBtn />
      </Header>
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
            className="w-full flex flex-col text-lettersIcon items-center rounded-md px-3 py-1 bg-bggreen-whiteletter"
          >
            <div className="border-[2px] rounded-md px-1 border-maingreen">
              <i className="ri-arrow-right-up-line text-2xl text-maingreen"></i>
            </div>
            <span className="text-sm font-semibold">Income</span>
            <span className="text-lg font-bold">Rp 4.000.000</span>
          </Link>
          <Link
            href={"/transactions?by=expense"}
            className="w-full flex flex-col text-lettersIcon items-center rounded-md px-3 py-1 bg-bggreen-whiteletter"
          >
            <div className="border-[2px] rounded-md px-1 border-oceanblue-btn">
              <i className="ri-arrow-right-down-line text-2xl text-oceanblue-btn"></i>
            </div>
            <span className="text-sm font-semibold">Expense</span>
            <span className="text-lg font-bold text-oceanblue-btn">
              Rp 3.000.000
            </span>
          </Link>
        </div>
      </div>
      <Drawer className="justify-start overflow-y-auto items-start px-5 max-h-[32rem]">
        <div className="w-full py-3">
          <div className="w-full flex items-center justify-between">
            <span className="font-semibold text-sm text-lettersIcon">
              April
            </span>
            <div className="px-2 py-1 bg-maingreen rounded-md">
              <i className="ri-calendar-line"></i>
            </div>
          </div>
          <CardShell>
            <Card />
            <Card />
            <Card />
          </CardShell>
        </div>
        <div className="w-full space-y-2">
          <div className="w-full flex items-center justify-between">
            <span className="font-semibold text-sm text-lettersIcon">Mei</span>
          </div>
          <CardShell>
            <Card />
            <Card />
            <Card />
          </CardShell>
        </div>
        <div className="w-full space-y-2 mb-30">
          <div className="w-full flex items-center justify-between">
            <span className="font-semibold text-sm text-lettersIcon">Jun</span>
          </div>
          <CardShell>
            <Card />
            <Card />
            <Card />
          </CardShell>
        </div>
      </Drawer>
    </Suspense>
  );
}

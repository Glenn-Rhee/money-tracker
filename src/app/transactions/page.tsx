import BackBtn from "@/components/BackBtn";
import Card from "@/components/Card";
import CardShell from "@/components/CardShell";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import LogoutBtn from "@/components/LogoutBtn";
import TabTransaction from "@/components/pages/transaction/TabTransaction";
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
      <TabTransaction />
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

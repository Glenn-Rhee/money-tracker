import BackBtn from "@/components/BackBtn";
import Calender from "@/components/Calender";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import LogoutBtn from "@/components/LogoutBtn";
import CategoryTabs from "@/components/pages/analysis/calender/CategoryTabs";
import SpendsTab from "@/components/pages/analysis/calender/SpendsTab";
import TabCalender from "@/components/pages/analysis/calender/TabCalender";
import { Suspense } from "react";

export default function AnalysisCalenderPage() {
  return (
    <Suspense>
      <Header>
        <BackBtn />
        <span className="text-xl font-bold text-darkmode-green-bar">
          Calender
        </span>
        <LogoutBtn />
      </Header>
      <Drawer className="h-[85vh] overflow-y-auto max-h-[40rem] items-start justify-start px-4 py-4">
        <div className="w-full flex items-center justify-center">
          <Calender />
        </div>
        <TabCalender />
        <SpendsTab />
        <CategoryTabs />
      </Drawer>
    </Suspense>
  );
}

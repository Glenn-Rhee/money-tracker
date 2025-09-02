import BackBtn from "@/components/BackBtn";
import Calender from "@/components/Calender";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import LogoutBtn from "@/components/LogoutBtn";
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
      <Drawer className="h-[85vh] max-h-[40rem] items-start justify-start px-4 py-4">
        <div className="w-full flex items-center justify-center"> 
          <Calender />
        </div>
        <TabCalender />
      </Drawer>
    </Suspense>
  );
}

import BackBtn from "@/components/BackBtn";
import CardAnalysis from "@/components/CardAnalysis";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import LogoutBtn from "@/components/LogoutBtn";
import { icons } from "@/utils/icons";
import Link from "next/link";
import { Suspense } from "react";

export default function CategoriesPage() {
  return (
    <Suspense>
      <Header>
        <BackBtn />
        <span className="text-xl font-bold text-darkmode-green-bar">
          Categories
        </span>
        <LogoutBtn />
      </Header>
      <CardAnalysis />
      <Drawer className="justify-start overflow-y-auto items-start px-8 pt-4 max-h-[33rem]">
        <div className="grid grid-cols-3 mb-4 gap-x-4 gap-y-8 w-full">
          {icons.map((icon, i) => (
            <Link href={"/categories/" + icon.label.toLowerCase()} key={i}>
              <div className="aspect-square bg-lightblue-btn transition-colors duration-200 hover:bg-oceanblue-btn flex items-center justify-center px-8 py-4 rounded-md">
                <i className={`ri-${icon.icon} text-4xl text-white`}></i>
              </div>
              <span className="text-center block text-lettersIcon font-semibold">
                {icon.label}
              </span>
            </Link>
          ))}
        </div>
      </Drawer>
    </Suspense>
  );
}

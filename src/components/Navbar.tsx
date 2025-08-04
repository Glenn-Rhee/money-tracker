"use client";
import { usePathname } from "next/navigation";
import Items from "./navbar/Items";
import clsx from "clsx";
import { useNavbar } from "@/store/useNavbar";
import { Ref } from "react";

interface NavbarProps {
  isForMobile?: boolean;
  ref?: Ref<HTMLElement>;
}

export default function Navbar(props: NavbarProps) {
  const { isForMobile, ref } = props;
  const { setIsOpen } = useNavbar();
  const pathname = usePathname();
  if (pathname.includes("/auth")) return null;
  return (
    <nav
      ref={ref}
      className={clsx(
        "fixed h-screen top-0 py-2 px-2 z-30 left-0 bottom-0 border-r bg-white-primary border-slate-400 w-[15%] max-w-[250px]",
        {
          "hidden lg:block": !isForMobile,
          "block w-[200px]": isForMobile,
        }
      )}
    >
      {isForMobile ? (
        <button
          onClick={() => setIsOpen(false)}
          className="block mx-auto cursor-pointer justify-center text-center text-slate-800 text-2xl"
        >
          <i className="ri-close-large-line"></i>
        </button>
      ) : (
        <h1 className="font-bold text-2xl text-slate-900">
          Expense <span className="text-green-500">Tracker</span>
        </h1>
      )}
      <div className="mt-10">
        <div className="flex flex-col items-center">
          <div className="aspect-square w-18 h-18 flex items-center justify-center rounded-full bg-blue-300 text-slate-700 font-semibold text-2xl">
            A
          </div>
          <span className="font-semibold text-slate-800 mt-1">Ariel Rizki</span>
        </div>
        <Items />
      </div>
    </nav>
  );
}

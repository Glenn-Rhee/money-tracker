"use client";
import { usePathname } from "next/navigation";
import Items from "./navbar/Items";
import clsx from "clsx";
import { Ref } from "react";
import { motion } from "framer-motion";
import { useNavbar } from "@/store/useNavbar";
interface NavbarProps {
  isForMobile?: boolean;
  ref?: Ref<HTMLElement>;
  className?: string;
}

export default function Navbar(props: NavbarProps) {
  const { isForMobile, ref, className } = props;
  const pathname = usePathname();
  const { isOpen } = useNavbar();
  if (pathname.includes("/auth")) return null;

  const content = (
    <>
      {isForMobile ? null : (
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
    </>
  );

  if (isForMobile) {
    return isOpen ? (
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        ref={ref}
        className={clsx(
          "fixed h-screen py-2 px-2 z-30 border-r bg-white-primary border-slate-400 w-[15%] max-w-[250px]",
          {
            "hidden lg:block": !isForMobile,
            "block w-[200px]": isForMobile,
          },
          className
        )}
      >
        {content}
      </motion.nav>
    ) : null;
  }

  return (
    <nav
      className={clsx(
        "fixed h-screen py-2 px-2 z-30 border-r bg-white-primary border-slate-400 w-[15%] max-w-[250px]",
        {
          "hidden lg:block": !isForMobile,
          "block w-[200px]": isForMobile,
        },
        className
      )}
    >
      {content}
    </nav>
  );
}

"use client";
import Navbar from "./Navbar";
import { useNavbar } from "@/store/useNavbar";
import { useCallback, useEffect, useRef } from "react";
export default function NavbarPhone() {
  const { setIsOpen } = useNavbar();
  const navbarRef = useRef<HTMLElement>(null);
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  function handleOpenNavbar() {
    setIsOpen(true);
  }

  return (
    <>
      <nav className="lg:hidden fixed top-0 text-2xl bg-mypink-100 right-0 left-0 flex justify-between items-center px-3 py-2">
        <button className="cursor-pointer" onClick={handleOpenNavbar}>
          <i className="ri-menu-2-line"></i>
        </button>
        <h1 className="font-bold text-xl text-slate-900">
          Expense <span className="text-green-500">Tracker</span>
        </h1>
      </nav>
      <Navbar isForMobile ref={navbarRef} />
    </>
  );
}

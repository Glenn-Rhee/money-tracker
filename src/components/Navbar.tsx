"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  if (pathName.includes("/auth") || pathName === "/boarding") return null;

  return (
    <nav className="bg-lightgreen overflow-hidden grid grid-cols-5 gap-x-3 px-4 fixed bottom-0 left-0 right-0 rounded-tr-3xl pb-4 pt-2 rounded-tl-3xl">
      <Link
        href={"/"}
        className={clsx(
          "text-3xl p-2 justify-self-center px-4 rounded-lg",
          pathName === "/" ? "bg-maingreen" : ""
        )}
      >
        <i className="ri-home-2-line"></i>
      </Link>
      <Link
        href={"/analysis"}
        className={clsx(
          "text-3xl p-2 justify-self-center px-4 rounded-lg",
          pathName === "/analysis" ? "bg-maingreen" : ""
        )}
      >
        <i className="ri-line-chart-line"></i>
      </Link>
      <Link
        href={"/transactions"}
        className={clsx(
          "text-3xl p-2 justify-self-center px-4 rounded-lg",
          pathName === "/transactions" ? "bg-maingreen" : ""
        )}
      >
        <i className="ri-arrow-left-right-fill"></i>
      </Link>
      <Link
        href={"/categories"}
        className={clsx(
          "text-3xl p-2 justify-self-center px-4 rounded-lg",
          pathName === "/categories" ? "bg-maingreen" : ""
        )}
      >
        <i className="ri-stack-line"></i>
      </Link>
      <Link
        href={"/profile"}
        className={clsx(
          "text-3xl p-2 justify-self-center px-4 rounded-lg",
          pathName === "/profile" ? "bg-maingreen" : ""
        )}
      >
        <i className="ri-user-line"></i>
      </Link>
    </nav>
  );
}

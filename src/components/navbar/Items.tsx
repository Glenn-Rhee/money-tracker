import { useNavbar } from "@/store/useNavbar";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Items() {
  const pathname = usePathname();
  const { setIsOpen } = useNavbar();
  const itemsNavbar = [
    {
      href: "/",
      title: "Dashboard",
      icon: "ri-dashboard-line",
    },
    {
      href: "/income",
      title: "Income",
      icon: "ri-wallet-line",
    },
    {
      href: "/expense",
      title: "Expense",
      icon: "ri-hand-coin-line",
    },
  ];

  return (
    <ul className="mt-6 flex flex-col gap-y-3">
      {itemsNavbar.map((item) => (
        <Link onClick={() => setIsOpen(false)} key={item.href} href={item.href}>
          <li
            className={clsx(
              "w-full py-1.5 text-slate-800 gap-x-3 text-lg ps-4 rounded-lg flex items-center",
              {
                "bg-green-600 text-white-primary": item.href === pathname,
              }
            )}
          >
            <i className={item.icon}></i>
            <span className="text-base font-semibold">{item.title}</span>
          </li>
        </Link>
      ))}
      <button className="w-full cursor-pointer py-1.5 text-slate-800 gap-x-3 text-lg ps-4 rounded-lg flex items-center">
        <i className="ri-logout-box-r-line"></i>
        <span className="text-base font-semibold">Logout</span>
      </button>
    </ul>
  );
}

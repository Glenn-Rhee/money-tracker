import BackBtn from "@/components/BackBtn";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import LogoutBtn from "@/components/LogoutBtn";
import { profiles } from "@/utils/profiles";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <>
      <Header>
        <BackBtn />
        <span className="text-xl font-bold text-darkmode-green-bar">
          Profile
        </span>
        <LogoutBtn />
      </Header>
      <div className="relative w-fit mx-auto rounded-full">
        <Image
          src={"/prof-exmple.jpg"}
          width={120}
          height={120}
          className="rounded-full mx-auto aspect-square"
          alt="Profile User"
        />
        <button className="absolute right-3 bottom-2 bg-lettersIcon text-white w-6 flex items-center justify-center h-6 aspect-square rounded-full">
          <i className="ri-camera-line"></i>
        </button>
      </div>
      <div className="space-y-1 w-full text-center">
        <h4 className="text-darkmode-green-bar text-lg font-semibold">
          John Smith
        </h4>
      </div>
      <Drawer className="justify-start h-[70vh] overflow-y-auto items-start px-5 max-h-[34rem]">
        <div className="space-y-2 mt-4 w-full">
          {profiles.map((p, i) => (
            <Link
              key={i}
              href={p.href}
              className="flex w-full rounded-md hover:bg-slate-300 transition-colors duration-300 py-2 px-1 items-center gap-x-3"
            >
              <div className="w-12 h-12 aspect-square text-2xl text-white rounded-xl bg-[#3299FF] flex items-center justify-center">
                <i className={`ri-${p.icon}`}></i>
              </div>
              <span className="text-sm font-medium text-lettersIcon">
                {p.title}
              </span>
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
}

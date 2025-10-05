import BackBtn from "@/components/BackBtn";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import LogoutBtn from "@/components/LogoutBtn";
import PhotoProfile from "@/components/pages/profile/PhotoProfile";
import { profiles } from "@/utils/profiles";
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
      <PhotoProfile />
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

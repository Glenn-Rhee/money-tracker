import BackBtn from "@/components/BackBtn";
import Button from "@/components/Button";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import LogoutBtn from "@/components/LogoutBtn";
import InputGroup from "@/components/pages/auth/InputGroup";
import Popover from "@/components/Popover";
import { categories } from "@/utils/categories";
import Image from "next/image";

export default function AnalysisSearchPage() {
  return (
    <div>
      <Header>
        <BackBtn />
        <span className="text-xl font-bold text-darkmode-green-bar">
          Search
        </span>
        <LogoutBtn />
      </Header>
      <div className="w-full px-5">
        <input
          type="search"
          autoFocus
          placeholder="Search..."
          className="w-full bg-bggreen-whiteletter text-[#232323] focus:shadow-lg rounded-xl px-3 py-1 focus:outline-0 focus:border-0"
        />
      </div>
      <Drawer className="h-[85vh] items-start justify-start px-4 py-4">
        <Popover
          triggerElement={
            <>
              <div className="w-full mt-1 shadow bg-lightgreen rounded-lg flex px-3 py-1 items-center justify-between">
                <span className="text-darkmode-green-bar/50 font-semibold">
                  Select category
                </span>
                <i className="ri-arrow-down-s-line text-maingreen"></i>
              </div>
            </>
          }
        >
          <ul className="w-full space-y-2">
            {categories.map((v, i) => (
              <li
                key={i}
                className="w-full transition duration-200 active:scale-95 hover:bg-lightgreen px-2 py-1 rounded-md flex items-center justify-between"
              >
                <span className="font-semibold text-darkmode-green-bar">
                  {v.name}
                </span>
                <span className="text-sm font-medium text-darkmode-green-bar">
                  {v.total}
                </span>
              </li>
            ))}
          </ul>
        </Popover>
        <div className="w-full mt-4">
          <InputGroup
            id="date"
            label="Date"
            type="date"
            placeholder="YYYY / MM / DD"
          />
        </div>
        <div className="flex flex-col gap-y-1 w-full">
          <h6 className="text-sm font-semibold text-lettersIcon">Report</h6>
          <div className="flex items-center w-full mt-2 justify-around">
            <label
              htmlFor="income"
              className="flex items-center gap-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="report"
                value="income"
                id="income"
                className="hidden peer"
              />
              <span className="w-4 h-4 rounded-full border border-emerald-500 flex items-center justify-center peer-checked:bg-emerald-500">
                <span className="w-1 h-1 rounded-full bg-white"></span>
              </span>
              Income
            </label>
            <label
              htmlFor="expense"
              className="flex items-center gap-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="report"
                value="Expense"
                id="expense"
                className="hidden peer"
              />
              <span className="w-4 h-4 rounded-full border border-emerald-500 flex items-center justify-center peer-checked:bg-emerald-500">
                <span className="w-1 h-1 rounded-full bg-white"></span>
              </span>
              Expense
            </label>
          </div>
        </div>
        <Button className="text-lg w-full font-semibold mt-4">Search</Button>
        <div className="mt-8 flex flex-col gap-y-2 w-full">
          <div className="flex items-center justify-between bg-lightgreen px-2 py-1 rounded-lg">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center justify-center p-2 bg-lightblue-btn rounded-lg">
                <Image
                  src={"/svg/Salary.svg"}
                  alt="Salary icon"
                  width={33}
                  height={33}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-bgdarkmode-letter">
                  Salary
                </span>
                <span className="text-sm font-semibold text-[#0068FF]">
                  30 April 2025, 18.27
                </span>
              </div>
            </div>
            <span className="font-semibold text-bgdarkmode-letter">
              Rp 4.000.000
            </span>
          </div>
          <div className="flex items-center justify-between bg-lightgreen px-2 py-1 rounded-lg">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center justify-center p-2 bg-lightblue-btn rounded-lg">
                <Image
                  src={"/svg/Salary.svg"}
                  alt="Salary icon"
                  width={33}
                  height={33}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-bgdarkmode-letter">
                  Salary
                </span>
                <span className="text-sm font-semibold text-[#0068FF]">
                  30 April 2025, 18.27
                </span>
              </div>
            </div>
            <span className="font-semibold text-bgdarkmode-letter">
              Rp 4.000.000
            </span>
          </div>
          <div className="flex items-center justify-between bg-lightgreen px-2 py-1 rounded-lg">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center justify-center p-2 bg-lightblue-btn rounded-lg">
                <Image
                  src={"/svg/Salary.svg"}
                  alt="Salary icon"
                  width={33}
                  height={33}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-bgdarkmode-letter">
                  Salary
                </span>
                <span className="text-sm font-semibold text-[#0068FF]">
                  30 April 2025, 18.27
                </span>
              </div>
            </div>
            <span className="font-semibold text-oceanblue-btn">
              -Rp 4.000.000
            </span>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

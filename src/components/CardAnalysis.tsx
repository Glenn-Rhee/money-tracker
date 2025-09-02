import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function CardAnalysis() {
  return (
    <div className="w-[85vw] mt-2 max-w-[30rem] mx-auto space-y-1">
      <div className="w-full justify-center gap-x-6 flex items-center">
        <div className="space-y-1">
          <div className="flex gap-x-2 items-center">
            <Image
              src={"/svg/income.svg"}
              alt="Income icon"
              width={20}
              height={20}
            />
            <span className="text-sm text-lettersIcon">Total balance</span>
          </div>
          <span className="font-bold text-bggreen-whiteletter text-xl">
            Rp 7.783.000
          </span>
        </div>
        <div className="h-15 bg-bggreen-whiteletter w-[2px]" />
        <div className="space-y-1">
          <div className="flex gap-x-2 items-center">
            <Image
              src={"/svg/Expense.svg"}
              alt="Expense icon"
              width={20}
              height={20}
            />
            <span className="text-sm text-lettersIcon">Total Expense</span>
          </div>
          <span className="font-bold text-oceanblue-btn text-xl">
            -Rp 1.783.000
          </span>
        </div>
      </div>
      <ProgressBar />
      <span className="text-sm text-bgdarkmode-letter">
        30% Of your expenses, looks good.
      </span>
    </div>
  );
}

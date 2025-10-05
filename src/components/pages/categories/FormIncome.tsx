"use client";
import { usePopover } from "@/store/popover-store";

interface FormIncomeProps {
  category: string;
}

export default function FormIncome(props: FormIncomeProps) {
  const { category } = props;
  const { setOpenId } = usePopover();
  return (
    <>
      <h4 className="text-center text-xl font-bold text-lettersIcon">
        Add Income {category}
      </h4>
      <form className="space-y-5 mt-4">
        <div className="space-y-2">
          <label htmlFor="date" className="text-lettersIcon font-semibold">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full shadow focus:outline-0 focus:border-0 bg-[#DFF7E2] rounded-lg px-3 py-2"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="amount" className="text-lettersIcon font-semibold">
            Amount
          </label>
          <input
            type="text"
            inputMode="numeric"
            id="amount"
            className="w-full shadow focus:outline-0 focus:border-0 bg-[#DFF7E2] rounded-lg px-3 py-2"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="title" className="text-lettersIcon font-semibold">
            Income Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full shadow focus:outline-0 focus:border-0 bg-[#DFF7E2] rounded-lg px-3 py-2"
          />
        </div>
        <div className="w-full flex gap-x-2">
          <button
            className="w-full flex-1 px-2 text-sm py-3 bg-maingreen rounded-xl font-semibold hover:bg-maingreen/80 active:scale-95 text-lettersIcon"
            type="submit"
          >
            Save
          </button>
          <button
            onClick={() => setOpenId(null)}
            type="button"
            className="px-4 py-3 text-sm bg-red-500/80 hover:bg-red-800 active:scale-95 rounded-xl text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

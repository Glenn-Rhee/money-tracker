import Image from "next/image";

export default function CardItem() {
  return (
    <div className="flex items-center w-full justify-between bg-lightgreen px-2 py-1 rounded-lg">
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
          <span className="font-semibold text-bgdarkmode-letter">Salary</span>
          <span className="text-sm font-semibold text-[#0068FF]">
            30 April 2025, 18.27
          </span>
        </div>
      </div>
      <span className="font-semibold text-bgdarkmode-letter">Rp 4.000.000</span>
    </div>
  );
}

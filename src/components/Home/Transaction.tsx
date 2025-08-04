import clsx from "clsx";

interface TransactionProps {
  date: string;
  title: string;
  isIncome: boolean;
  balance: number;
  className?: string;
}
export default function Transaction(props: TransactionProps) {
  const { date, title, isIncome, balance, className } = props;
  return (
    <div
      className={clsx("flex items-center justify-between px-3 py-2", className)}
    >
      <div className="flex flex-col">
        <span className="text-sm text-gray-900 font-semibold">{title}</span>
        <span className="text-xs text-gray-600 font-semibold">{date}</span>
      </div>
      <div
        className={clsx("flex items-center gap-x-0.5 px-2 py-0.5 rounded-md", {
          "text-red-600 bg-red-100": !isIncome,
          "text-green-600 bg-green-100": isIncome,
        })}
      >
        <span className="text-xs font-semibold">
          {(isIncome ? "" : "-") + "Rp" + balance.toLocaleString("id-ID")}
        </span>
        <i
          className={clsx(
            isIncome ? "ri-arrow-right-up-line" : "ri-arrow-right-down-line"
          )}
        ></i>
      </div>
    </div>
  );
}

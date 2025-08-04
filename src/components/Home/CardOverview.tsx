import clsx from "clsx";

interface CardOverviewProps {
  icon: string;
  bgIcon: string;
  title: string;
  titleColor?: string;
  money: number;
  className?: string;
}
export default function CardOverview(props: CardOverviewProps) {
  const { icon, bgIcon, title, money, className, titleColor } = props;
  return (
    <div className={clsx("flex items-center gap-x-4", className)}>
      <div
        className={clsx(
          "w-14 aspect-square h-14 rounded-full flex items-center justify-center text-2xl text-white",
          bgIcon
        )}
      >
        <i className={`ri-${icon}`}></i>
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-slate-600">{title}</span>
        <span
          className={clsx(
            "text-lg font-semibold",
            titleColor || "text-slate-800"
          )}
        >
          Rp {money.toLocaleString("id-ID")}
        </span>
      </div>
    </div>
  );
}

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
    <div className={clsx("flex flex-col md:flex-row items-center gap-x-4 gap-y-2", className)}>
      <div
        className={clsx(
          "w-8 h-8 lg:w-14 aspect-square lg:h-14 rounded-full flex items-center justify-center lg:text-2xl text-white",
          bgIcon
        )}
      >
        <i className={`ri-${icon}`}></i>
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold md:font-normal md:text-sm text-slate-600">{title}</span>
        <span
          className={clsx(
            "text-sm md:text-lg font-semibold text-center md:text-start",
            titleColor || "text-slate-800"
          )}
        >
          Rp {money.toLocaleString("id-ID")}
        </span>
      </div>
    </div>
  );
}

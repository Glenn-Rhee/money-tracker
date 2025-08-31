import clsx from "clsx";

interface PaginationDotsProps {
  isActive: boolean;
  onclick?: () => void;
}

export default function PaginationDots(props: PaginationDotsProps) {
  const { isActive, onclick } = props;
  return (
    <button
    onClick={onclick}
      className={clsx(
        "w-3 h-3 aspect-square rounded-full",
        isActive ? "bg-maingreen" : "bg-transparent border border-darkmode-green-bar"
      )}
    />
  );
}

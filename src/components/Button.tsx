import clsx from "clsx";

interface ButtonProps {
  children?: React.ReactNode;
  onclick?: () => void;
  className?: string;
  color?: "bg-maingreen" | "bg-lightgreen";
}
export default function Button(props: ButtonProps) {
  const { children, onclick, className, color = "bg-maingreen" } = props;
  return (
    <button
      onClick={onclick}
      className={clsx(
        "px-4 py-2 text-lettersIcon font-bold text-xl cursor-pointer active:scale-95 transition-all duration-100 rounded-3xl shadow-xl",
        className,
        color
      )}
    >
      {children}
    </button>
  );
}

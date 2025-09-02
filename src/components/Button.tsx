import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "bg-maingreen" | "bg-lightgreen";
};

export default function Button(props: ButtonProps) {
  const { children, onClick, className, color = "bg-maingreen" } = props;
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-1 text-lettersIcon font-bold text-xl cursor-pointer active:scale-95 transition-all duration-100 rounded-3xl shadow-xl",
        className,
        color
      )}
    >
      {children}
    </button>
  );
}

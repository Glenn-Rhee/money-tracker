import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const { className } = props;

  return (
    <input
      className={clsx(
        "p-2 rounded-lg w-full focus:border-none transition-all duration-200 focus:ring-0 text-sm focus:outline-none focus:scale-[1.009] bg-slate-300  text-slate-800",
        className
      )}
      {...props}
    />
  );
}

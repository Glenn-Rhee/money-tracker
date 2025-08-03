import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        "w-full bg-green-600 cursor-pointer hover:bg-green-700 active:scale-[0.985] active:bg-green-800 transition-all duration-100 text-white font-semibold text-lg rounded-md py-2",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}

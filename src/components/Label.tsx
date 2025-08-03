import clsx from "clsx";
import { LabelHTMLAttributes } from "react";

export default function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  const { children, className } = props;
  return (
    <label
      {...props}
      className={clsx("font-semibold text-sm text-gray-700", className)}
    >
      {children}
    </label>
  );
}

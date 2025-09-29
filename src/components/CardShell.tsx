import clsx from "clsx";

export default function CardShell({
  children,
  className,
  isScrolling,
}: {
  children: React.ReactNode;
  className?: string;
  isScrolling?: boolean;
}) {
  return (
    <div
      className={clsx(
        "h-40 w-full space-y-3 mt-1",
        className,
        isScrolling ? "overflow-y-scroll" : "overflow-y-hidden"
      )}
    >
      {children}
    </div>
  );
}

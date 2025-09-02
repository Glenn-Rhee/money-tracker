import clsx from "clsx";

export default function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <header
      className={clsx("flex items-center justify-between p-4", className)}
    >
      {children}
    </header>
  );
}

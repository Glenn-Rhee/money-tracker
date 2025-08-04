import clsx from "clsx";

interface CardShellProps {
  children: React.ReactNode;
  className?: string;
}
export default function CardShell(props: CardShellProps) {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        "px-2 py-4 bg-white-primary shadow-lg rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
}

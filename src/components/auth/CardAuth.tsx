import clsx from "clsx";

interface CardAuthProps {
  className?: string;
  children: React.ReactNode;
}
export default function CardAuth(props: CardAuthProps) {
  const { className, children } = props;
  return (
    <div
      className={clsx(
        "space-y-2 mt-20 bg-gray-100 shadow shadow-black rounded-xl px-3 py-4 max-w-2xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

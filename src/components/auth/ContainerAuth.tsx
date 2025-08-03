import clsx from "clsx";

interface ContainerAuthProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContainerAuth(props: ContainerAuthProps) {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        "min-h-screen w-full overflow-hidden flex justify-center py-3",
        className
      )}
    >
      <div className="w-[90%] md:w-[75%] lg:w-[65%] max-w-4xl">{children}</div>
    </div>
  );
}

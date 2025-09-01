import clsx from "clsx";

interface DrawerProps {
  className?: string;
  children: React.ReactNode;
  roundedSize?: string;
}

export default function Drawer(props: DrawerProps) {
  const { className, children, roundedSize = "4rem" } = props;
  return (
    <div
      className={clsx(
        "fixed flex items-center flex-col justify-center gap-y-3 right-0 h-[70vh] left-0 bottom-0 bg-bggreen-whiteletter",
        className,
        `rounded-tr-[${roundedSize}] rounded-tl-[${roundedSize}]`
      )}
    >
      {children}
    </div>
  );
}

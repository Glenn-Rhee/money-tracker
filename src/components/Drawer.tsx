import clsx from "clsx";

interface DrawerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Drawer(props: DrawerProps) {
  const { className, children } = props;
  return (
    <div
      className={clsx(
        "fixed flex items-center flex-col justify-center gap-y-4 right-0 h-[70vh] left-0 bottom-0 rounded-tr-[4rem] rounded-tl-[4rem] bg-bggreen-whiteletter",
        className
      )}
    >
      {children}
    </div>
  );
}

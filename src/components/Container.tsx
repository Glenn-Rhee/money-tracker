import clsx from "clsx";
import NavbarPhone from "./NavbarPhone";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}
export default function Container(props: ContainerProps) {
  const { className, children } = props;
  return (
    <div className={clsx("my-container", className)}>
      <NavbarPhone />
      {children}
    </div>
  );
}

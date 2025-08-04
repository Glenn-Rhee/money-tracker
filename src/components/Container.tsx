import clsx from "clsx";
import NavbarPhone from "./NavbarPhone";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}
export default function Container(props: ContainerProps) {
  const { className, children } = props;
  return (
    <>
      <NavbarPhone />
      <div className={clsx("my-container pt-14 mx-4", className)}>{children}</div>
    </>
  );
}

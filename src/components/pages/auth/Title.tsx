import clsx from "clsx";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}
export default function Title(props: TitleProps) {
  const { className, children } = props;
  return (
    <h1 className={clsx("text-lettersIcon mt-20 font-semibold text-3xl", className)}>
      {children}
    </h1>
  );
}

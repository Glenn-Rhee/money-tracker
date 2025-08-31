import clsx from "clsx";

interface AuthShellProps {
  className?: string;
  children: React.ReactNode;
}
export default function AuthShell(props: AuthShellProps) {
  const { className, children } = props;
  return (
    <div
      className={clsx("w-screen flex items-center justify-center", className)}
    >
      {children}
    </div>
  );
}

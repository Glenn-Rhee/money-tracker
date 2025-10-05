import clsx from "clsx";
import Card from "./Card";
import CardShell from "./CardShell";

interface ItemTransactionProps {
  isFirstItem?: boolean;
  isLastItem?: boolean;
}

export default function ItemTransaction(props: ItemTransactionProps) {
  const { isFirstItem, isLastItem } = props;
  return (
    <>
      <div className={clsx("w-full", isLastItem ? "mb-32" : "mb-4")}>
        <div className="w-full flex items-center justify-between">
          <span className="font-semibold text-sm text-lettersIcon">April</span>
          {isFirstItem ? (
            <div className="px-2 py-1 bg-maingreen rounded-md">
              <i className="ri-calendar-line"></i>
            </div>
          ) : null}
        </div>
        <CardShell>
          <Card />
          <Card />
          <Card />
        </CardShell>
      </div>
    </>
  );
}

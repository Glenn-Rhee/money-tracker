import FinancialOverview from "./FinancialOverview";
import Recent from "./Recent";

export default function RecentTransaction() {
  return (
    <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
      <Recent />
      <FinancialOverview />
    </div>
  );
}

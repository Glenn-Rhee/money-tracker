import CardShell from "../CardShell";
import CardOverview from "./CardOverview";

export default function Overview() {
  return (
    <CardShell className="grid gap-x-4 grid-cols-3">
      <CardOverview
        icon="bank-card-line"
        title="Total Balance"
        bgIcon="bg-purple-600"
        money={10000}
      />
      <CardOverview
        icon="wallet-line"
        title="Total Income"
        bgIcon="bg-orange-600"
        money={20000}
      />
      <CardOverview
        icon="hand-coin-line"
        title="Total Expenses"
        bgIcon="bg-rose-600"
        money={20000}
      />
    </CardShell>
  );
}

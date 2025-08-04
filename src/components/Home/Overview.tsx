import CardOverview from "./CardOverview";

export default function Overview() {
  return (
    <div className="px-2 py-4 grid grid-cols-3 bg-white-primary shadow-lg rounded-md mt-8">
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
    </div>
  );
}

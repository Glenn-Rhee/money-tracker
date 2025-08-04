import Transaction from "./Transaction";
const transactions = [
  {
    date: "14 Juli 2025",
    title: "Shopping",
    isIncome: false,
    balance: 200000,
  },
  {
    date: "13 Juli 2025",
    title: "Salary",
    isIncome: true,
    balance: 5000000,
  },
  {
    date: "12 Juli 2025",
    title: "Freelance Project",
    isIncome: true,
    balance: 1500000,
  },
  {
    date: "11 Juli 2025",
    title: "Electricity Bill",
    isIncome: false,
    balance: 350000,
  },
  {
    date: "10 Juli 2025",
    title: "Internet Subscription",
    isIncome: false,
    balance: 250000,
  },
  {
    date: "9 Juli 2025",
    title: "Bonus",
    isIncome: true,
    balance: 1000000,
  },
];

export default function Transactions() {
  return (
    <div className="flex flex-col gap-y-2 ps-4 mt-4">
      {transactions.map((tr, i) => (
        <Transaction
          key={i}
          date={tr.date}
          title={tr.title}
          isIncome={tr.isIncome}
          balance={tr.balance}
        />
      ))}
    </div>
  );
}

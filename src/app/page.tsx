import Container from "@/components/Container";
import ExpenseTransaction from "@/components/Home/ExpenseTransaction";
import Overview from "@/components/Home/Overview";
import RecentTransaction from "@/components/Home/RecentTransaction";

export default async function Home() {
  return (
    <Container>
      <Overview />
      <RecentTransaction />
      <ExpenseTransaction />
    </Container>
  );
}

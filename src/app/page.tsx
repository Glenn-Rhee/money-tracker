import Container from "@/components/Container";
import Overview from "@/components/Home/Overview";
import RecentTransaction from "@/components/Home/RecentTransaction";

export default async function Home() {
  return (
    <Container>
      <Overview />
      <RecentTransaction />
    </Container>
  );
}

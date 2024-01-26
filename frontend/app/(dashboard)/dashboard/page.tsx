import Cards from "@/components/Cards";
import Chart from "@/components/Chart";
import Heading from "@/components/Heading";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10 p-10">
      <Heading>Stats</Heading>
      <Cards />
      <Chart />
    </div>
  );
}

import Cards from "@/components/Cards";
import Heading from "@/components/Heading";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col gap-10 p-10">
      <Heading>Stats</Heading>
      <Cards />
    </div>
  );
}

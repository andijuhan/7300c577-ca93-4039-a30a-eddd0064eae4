import CallToAction from "@/components/CallToAction";
import Intro from "@/components/Intro";
import Shortener from "@/components/Shortener";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Intro />
      <Shortener />
      <CallToAction />
    </div>
  );
}

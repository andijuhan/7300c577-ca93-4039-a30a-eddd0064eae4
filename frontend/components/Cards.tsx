import { Link, MousePointerClick } from "lucide-react";
import CardItem from "./CardItem";

export default function Cards() {
  return (
    <div className="flex flex-col items-center gap-5 md:flex-row">
      <CardItem title="Total links" count={100} icon={<Link size={30} />} />
      <CardItem
        title="Total click"
        count={568}
        icon={<MousePointerClick size={30} />}
      />
    </div>
  );
}

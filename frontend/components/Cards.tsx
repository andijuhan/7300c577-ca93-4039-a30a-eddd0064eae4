import { Link, MousePointerClick } from "lucide-react";
import CardItem from "./CardItem";

interface CardProps {
  totalLink: number;
  totalClick: number;
}

export default function Cards({ totalLink, totalClick }: CardProps) {
  return (
    <div className="flex flex-col items-center gap-5 md:flex-row">
      <CardItem
        title="Total links"
        count={totalLink}
        icon={<Link size={30} />}
      />
      <CardItem
        title="Total click"
        count={totalClick}
        icon={<MousePointerClick size={30} />}
      />
    </div>
  );
}

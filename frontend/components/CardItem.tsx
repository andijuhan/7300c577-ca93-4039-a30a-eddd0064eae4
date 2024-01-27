interface CardItemProps {
  title: string;
  count: number;
  icon: React.ReactNode;
}

export default function CardItem({ title, count, icon }: CardItemProps) {
  return (
    <div className="flex w-full items-center justify-between gap-3 rounded-2xl border bg-gray-50 p-7 text-gray-600">
      <div className="flex flex-col gap-3 font-medium">
        <p>{title}</p>
        <p className="text-2xl font-bold text-gray-800">{count}</p>
      </div>
      <div className="text-gray-600">{icon}</div>
    </div>
  );
}

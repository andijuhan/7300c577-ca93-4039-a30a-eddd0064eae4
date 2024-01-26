interface HeadingProps {
  children: string;
}

export default function Heading({ children }: HeadingProps) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-gray-800">
      {children}
    </h2>
  );
}

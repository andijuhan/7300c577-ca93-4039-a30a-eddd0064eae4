import { urlShorteners } from "@/data/shorturl-stats";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { IUrlShortener } from "@/types/interface";
import Heading from "@/components/Heading";

async function getData(): Promise<IUrlShortener[]> {
  // Fetch data from your API here.
  return urlShorteners;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="flex flex-col gap-10 p-10">
      <Heading>Links</Heading>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

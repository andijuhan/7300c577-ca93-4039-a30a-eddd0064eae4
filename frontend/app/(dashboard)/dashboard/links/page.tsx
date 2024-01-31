import { urlShorteners } from "@/data/shorturl-stats";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { IShortUrl } from "@/types/interface";
import Heading from "@/components/Heading";
import { Metadata } from "next/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axios from "axios";
import { apiUrl } from "@/config";

export const metadata: Metadata = {
  title: "Dashboard link | Moli.cx",
};

async function getData(): Promise<IShortUrl[]> {
  const session = await getServerSession(authOptions);
  const response = await axios.get(
    `${apiUrl}/short-url/data/${session?.user.id}`,
    {
      headers: {
        Authorization: `Bearer ${session?.backendToken.accessToken}`,
      },
    },
  );

  return response.data;
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

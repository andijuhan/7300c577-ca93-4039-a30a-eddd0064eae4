import { columns } from "./columns";
import { DataTable } from "./data-table";
import { IShortUrl } from "@/types/interface";
import Heading from "@/components/Heading";
import { Metadata } from "next/types";
import { getServerSession } from "next-auth";
import axios from "axios";
import { authOptions } from "@/lib/next-auth-options";

export const metadata: Metadata = {
  title: "Dashboard link | Moli.cx",
};

//get shortlink data by userId
async function getShortlinkData(): Promise<IShortUrl[]> {
  const session = await getServerSession(authOptions);
  const response = await axios.get(
    `${process.env.API_URL}/short-url/data/${session?.user.id}`,
    {
      headers: {
        Authorization: `Bearer ${session?.backendToken.accessToken}`,
      },
    },
  );

  return response.data;
}

export default async function DemoPage() {
  const data = await getShortlinkData();

  return (
    <div className="flex flex-col gap-10 p-10">
      <Heading>Links</Heading>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

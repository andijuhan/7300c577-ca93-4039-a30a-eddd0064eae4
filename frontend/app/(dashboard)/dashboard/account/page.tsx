import Heading from "@/components/Heading";
import { authOptions } from "@/lib/next-auth-options";
import { getServerSession } from "next-auth";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Dashboard account | Moli.cx",
};

export default async function DemoPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-10 p-10">
      <Heading>Your account</Heading>
      <div>
        <p className="font-medium text-gray-800">{session?.user.email}</p>
      </div>
    </div>
  );
}

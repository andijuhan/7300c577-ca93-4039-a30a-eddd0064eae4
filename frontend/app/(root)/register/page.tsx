import { Metadata } from "next/types";
import RegisterForm from "./RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/next-auth-options";

export const metadata: Metadata = {
  title: "Register user | Moli.cx",
};

export default async function RegisterPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col gap-12">
      <RegisterForm />
    </div>
  );
}

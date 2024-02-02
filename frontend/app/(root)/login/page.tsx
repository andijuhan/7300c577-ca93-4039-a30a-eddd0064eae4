import React from "react";
import LoginForm from "./LoginForm";
import { Metadata } from "next/types";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/next-auth-options";

export const metadata: Metadata = {
  title: "Login user | Moli.cx",
};

interface LoginPageProps {
  searchParams: {
    error?: string;
  };
}
export default async function LoginPage({ searchParams }: LoginPageProps) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col gap-12">
      <LoginForm error={searchParams?.error} />
    </div>
  );
}

import React from "react";
import LoginForm from "./LoginForm";
import { Metadata } from "next/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

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

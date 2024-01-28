import React from "react";
import LoginForm from "./LoginForm";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Login user | Moli.cx",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-12">
      <LoginForm />
    </div>
  );
}

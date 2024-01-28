import { Metadata } from "next/types";
import RegisterForm from "./RegisterForm";

export const metadata: Metadata = {
  title: "Register user | Moli.cx",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-col gap-12">
      <RegisterForm />
    </div>
  );
}

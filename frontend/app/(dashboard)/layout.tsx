import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ToastProvider from "@/providers/ToastProvider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import NextAuthProviders from "@/providers/NextAuthProviders";
import { authOptions } from "@/lib/next-auth-options";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | Moli.cx",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen w-full min-w-[350px] flex-col bg-gray-100`}
      >
        <NextAuthProviders>
          <Navbar />
          <div className="mx-auto mt-16 flex h-fit w-full grow">
            <Sidebar />
            <main className="mx-auto mt-2 w-full max-w-5xl flex-1">
              {children}
            </main>
          </div>

          <Footer />
          <ToastProvider />
        </NextAuthProviders>
      </body>
    </html>
  );
}

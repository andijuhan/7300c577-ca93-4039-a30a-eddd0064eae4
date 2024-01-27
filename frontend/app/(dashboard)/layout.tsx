import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ToastProvider from "@/providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen w-full min-w-[350px] flex-col bg-gray-100`}
      >
        <Navbar />
        <div className="mx-auto mt-16 flex h-fit w-full grow gap-10 pr-2">
          <main className="mx-auto mt-2 w-full max-w-5xl flex-1">
            {children}
          </main>
        </div>
        <Sidebar />
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}

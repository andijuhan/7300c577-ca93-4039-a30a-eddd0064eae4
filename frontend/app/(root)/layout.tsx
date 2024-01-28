import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ToastProvider from "@/providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moli.cx | Free url shortener",
  description:
    "Create short links, share them anywhere. Track what's working, and what's not. All inside the moli.cx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen w-full flex-col justify-between bg-gray-100`}
      >
        <Navbar />
        <main className="m-auto mt-[130px] w-full max-w-5xl px-2 md:px-0">
          {children}
        </main>
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}

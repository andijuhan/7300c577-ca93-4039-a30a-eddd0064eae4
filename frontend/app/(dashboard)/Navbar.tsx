import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <header className="z-50 flex w-full bg-gray-50 p-5 shadow-sm">
      <nav className="m-auto flex w-full items-center justify-between px-2 md:px-0">
        <Link href="/" className="flex items-center gap-1 text-rose-500">
          <Zap size={30} />
          <h1 className="text-2xl font-bold tracking-tighter text-rose-500 md:text-4xl">
            cutly.lol
          </h1>
        </Link>

        <div className="flex gap-4 md:gap-10">
          <Link
            className="rounded-lg px-4 py-2 hover:bg-gray-100"
            href="/signout"
          >
            Sign out
          </Link>
        </div>
      </nav>
    </header>
  );
}

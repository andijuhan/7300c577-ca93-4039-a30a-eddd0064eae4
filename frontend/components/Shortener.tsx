"use client";
import { Copy, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Shortener() {
  const [isAuth, setIsAuth] = useState(false);
  const [isShortened, setIsShortened] = useState(false);

  return (
    <div className="flex flex-col gap-5 rounded-xl border-4 bg-gray-50 px-5 py-10 text-gray-800">
      <h2 className="text-3xl font-bold">Shorten a long link</h2>
      <form action="" className="flex flex-col gap-5">
        <div className="flex items-end gap-3">
          <div className="flex grow flex-col gap-2">
            <label
              className="text-lg font-bold text-gray-600"
              htmlFor="longUrl"
            >
              Paste a long URL
            </label>
            <input
              type="text"
              id="longUrl"
              name="longUrl"
              placeholder="https://super-long-link.com/shorten-your-link"
              className="w-full rounded-xl border p-4 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <button className="btn-primary hidden md:block">Shorten</button>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-lg font-bold text-gray-600"
            htmlFor="costumLink"
          >
            Costum link
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="costumLink"
              name="costumLink"
              placeholder="fauzan-shop"
              disabled
              className="w-full max-w-md cursor-not-allowed rounded-xl border p-4 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <Lock className="-ml-10 text-gray-500" />
          </div>
        </div>
        <div className="flex w-full items-center gap-4 rounded-lg bg-teal-100 p-3">
          <p className="font-medium text-teal-800">
            <Link href="#" target="_blank">
              cutly.lol/short
            </Link>
          </p>
          <button className="flex items-center gap-2 rounded-md border bg-gray-50 px-3 py-1">
            Copy
            <Copy size={20} />
          </button>
        </div>
        <button className="btn-primary w-full md:hidden">Shorten</button>
        <p className="text-center text-sm text-gray-600">
          By clicking Shorten URL, you agree to Rebrandly&apos;s{" "}
          <span className="underline">Terms of Use</span>,{" "}
          <span className="underline">Privacy Policy</span> and{" "}
          <span className="underline">Cookie Policy</span>
        </p>
      </form>
    </div>
  );
}

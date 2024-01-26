import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 w-full bg-gray-800 px-3 py-7 text-gray-50">
      <div className="m-auto flex max-w-5xl flex-col items-center justify-center gap-7 text-center md:flex-row md:justify-between">
        <div>
          <div className="flex flex-col gap-3 font-semibold md:flex-row">
            <Link href="#">Terms & conditions</Link>
            <Link href="#">Privacy policy</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
        <div>
          <p className="font-medium">
            &copy; cutly.lol {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

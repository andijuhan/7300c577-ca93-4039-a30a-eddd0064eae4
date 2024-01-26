import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto w-full border bg-gray-50 px-3 py-5 text-gray-800">
      <div className="m-auto flex flex-col items-center justify-center gap-7 px-5 text-center md:flex-row md:justify-between">
        <div>
          <div className="flex flex-col gap-3 text-sm md:flex-row">
            <Link href="#">Terms & conditions</Link>
            <Link href="#">Privacy policy</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
        <div>
          <p>&copy; cutly.lol {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

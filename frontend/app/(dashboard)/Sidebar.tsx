import { AreaChart, Link as LinkIcon, Settings, Wrench } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-full max-w-[200px] border bg-gray-50 px-4 py-10">
      <div className="flex h-full flex-col">
        <ul className="flex flex-col gap-1 overflow-x-hidden text-sm font-medium">
          <li>
            <Link href="/dashboard" className="link">
              <AreaChart size={20} /> Stats
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="link">
              <LinkIcon size={20} /> Links
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="link">
              <Wrench size={20} /> Tools
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="link">
              <Settings size={20} /> Settings
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

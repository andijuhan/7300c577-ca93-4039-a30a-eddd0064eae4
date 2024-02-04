"use client";
import { useSidebarStore } from "@/hooks/useSidebarStore";
import { cn } from "@/lib/utils";
import { AreaChart, Link as LinkIcon, LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const { isOpen, close, open } = useSidebarStore();
  const pathName = usePathname();
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    setIsLarge(window.innerWidth > 768);
    close();
    isLarge && open();
  }, [pathName, isLarge]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 top-[60px] z-[40] max-h-screen bg-black/10 backdrop-blur-sm transition-all duration-500 sm:top-0 md:hidden",
          { "h-0 w-0 opacity-0": !isOpen },
        )}
        onClick={() => close()}
      ></div>
      <div
        className={cn(
          "fixed inset-0 z-40 flex min-h-full w-full max-w-[200px] flex-col justify-between border-r bg-gray-50 px-4 py-10 shadow-md transition-all duration-300 sm:relative sm:py-0",
          { "-translate-x-full transform": !isOpen },
        )}
      >
        <div className="mt-10 flex flex-col">
          <ul className="flex flex-col gap-1 overflow-x-hidden text-sm font-medium">
            <li>
              <Link href="/dashboard" className="link">
                <AreaChart size={20} /> Stats
              </Link>
            </li>
            <li>
              <Link href="/dashboard/links" className="link">
                <LinkIcon size={20} /> Links
              </Link>
            </li>

            <li>
              <Link href="/dashboard" className="link">
                <User size={20} /> Account
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/logout" className="link md:hidden">
          <LogOut size={20} /> Sign out
        </Link>
      </div>
    </>
  );
}

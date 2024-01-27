"use client";

import { useSidebarStore } from "@/hooks/useSidebarStore";
import { Menu, X } from "lucide-react";

export default function SidebarButton() {
  const { toggle, isOpen } = useSidebarStore();
  return (
    <button className="ml-auto text-gray-800 md:hidden">
      {isOpen ? (
        <X size={30} onClick={toggle} />
      ) : (
        <Menu size={30} onClick={toggle} />
      )}
    </button>
  );
}

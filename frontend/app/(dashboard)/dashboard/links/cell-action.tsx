"use client";
import ModalDialog from "@/components/ModalDialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { apiUrl, baseUrl } from "@/config";
import { IShortUrl } from "@/types/interface";
import { Row } from "@tanstack/react-table";
import axios from "axios";
import { MoreHorizontal } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface CellActionProps {
  row: Row<IShortUrl>;
  //data: IShortUrl
}

export default function CellAction({ row }: CellActionProps) {
  const shortUrl = `${baseUrl}/${row.getValue("shortSlug")}`;
  const originalUrl = row.getValue("originalUrl") as string;
  const router = useRouter();

  const { data: session } = useSession();

  const deleteShortUrl = async () => {
    try {
      await axios.delete(`${apiUrl}/short-url/${row.original.id}`, {
        headers: {
          Authorization: `Bearer ${session?.backendToken.accessToken}`,
        },
      });
      toast.success("Short url deleted successfully");
      router.refresh();
    } catch (error) {
      toast.error("Failed to delete short url");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(originalUrl);
            toast.success("Copied to clipboard");
          }}
        >
          Copy original url
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(shortUrl);
            toast.success("Copied to clipboard");
          }}
        >
          Copy short url
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete short url</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

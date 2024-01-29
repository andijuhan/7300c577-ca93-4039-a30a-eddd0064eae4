"use client";
import { IShortUrl } from "@/types/interface";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { baseUrl } from "@/config";

export const columns: ColumnDef<IShortUrl>[] = [
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created at
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return format(new Date(row.getValue("createdAt")), "dd/MM/yyyy");
    },
  },
  {
    accessorKey: "originalUrl",
    header: "Original url",
    cell: ({ row }) => {
      return <p className="line-clamp-1">{row.getValue("originalUrl")}</p>;
    },
  },
  {
    accessorKey: "shortSlug",
    header: "Short url",
    cell: ({ row }) => {
      return `${baseUrl}/${row.getValue("shortSlug")}`;
    },
  },
  {
    accessorKey: "clicks",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Clicks
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const shortUrl = `${baseUrl}/${row.getValue("shortSlug")}`;
      const originalUrl = row.getValue("originalUrl") as string;

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
    },
  },
];

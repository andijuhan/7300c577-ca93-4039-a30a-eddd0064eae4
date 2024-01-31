"use client";
import { IShortUrl } from "@/types/interface";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/config";
import CellAction from "./cell-action";

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
    cell: ({ row }) => {
      return (row.getValue("clicks") as any[]).length;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction row={row} />,
  },
];

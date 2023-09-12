"use client"

import Checkbox from "@mui/material/Checkbox"
import { ColumnDef } from "@tanstack/react-table"
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@/components/ui/button"

export type ConfessionPost = {
  id: string
  content: string
}

export const columns: ColumnDef<ConfessionPost>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onChange={(value) => table.toggleAllPageRowsSelected(!!value.target.checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(value) => row.toggleSelected(!!value.target.checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "content",
    header: "Content",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="sm:flex">
        <Button variant="ghost" className="h-8 w-8 p-0">
          <AddIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <DeleteIcon className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
]

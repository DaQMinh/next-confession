import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
  } from "@radix-ui/react-icons"

import { Table } from "@tanstack/react-table"
import React from "react"  
import { Button } from "@/components/ui/button"
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { cn } from "@/lib/utils"
import { FormControl, MenuItem } from "@mui/material"


interface DataTablePaginationProps<TData>
  extends React.HTMLAttributes<HTMLDivElement>{
    table: Table<TData>
}

export default function DataTablePagination<TData>({
  table,
  className,
  ...props
}: DataTablePaginationProps<TData>) {

return (
  <div className={cn("flex items-center space-x-4 my-1 justify-between", { className })}>
  <div className="flex items-center mx-5 w-20">
  <FormControl fullWidth>
      <Select
        variant="filled"
        size="small"
        value={table.getState().pagination.pageSize}
        onChange={(event) => {
          table.setPageSize(Number(event.target.value))
        }}
      >
        {[5, 10, 20, 30, 40, 50].map((pageSize) => (
          <MenuItem key={pageSize} value={pageSize}>
            {pageSize}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
  <div className="flex items-center space-x-4">
  <p className="text-sm font-medium">
      Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
    </p>
    <Button
      variant="ghost"
      className="h-8 w-8 p-0"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      <span className="sr-only">Go to previous page</span>
      <ChevronLeftIcon className="h-4 w-4" />
    </Button>
    <Button
      variant="ghost"
      className="h-8 w-8 p-0"
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      <span className="sr-only">Go to next page</span>
      <ChevronRightIcon className="h-4 w-4" />
    </Button>
  </div>
</div>
)
  }
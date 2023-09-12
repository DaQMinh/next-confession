'use client'
import { Box } from "@mui/material"
import { DataTable } from "./subcomponents/data-table"
import { ConfessionPost, columns } from "./subcomponents/columns"

export default function IndexPage() {
  const data: ConfessionPost[] = [
    {
      id: "m5gr84i9",
      content : '2'
    },
    {
      id: "3u1reuv4",
      content : '1'
    },
  ]
  return (
    <Box>
      <DataTable
        columns={columns}
        data={data}
        isFetchingData={false}
      />
    </Box>
  )
}


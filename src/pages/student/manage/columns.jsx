import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => columnHeaderWithSorting({ column, columnName: "Name" }),
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "diet",
    header: "Diet Restrictions",
    cell: ({ row }) => {
      const amount = row.getValue("diet");
      if (amount === null) return <div>None</div>;

      return <div>{amount}</div>;
    },
  },
  {
    accessorKey: "experience",
    header: "Experience",
  },
  {
    accessorKey: "language",
    header: "Language",
  },
];

const columnHeaderWithSorting = ({ column, columnName }) => {
  return (
    <div className="flex items-center justify-between">
      {columnName}
      <Button variant={"ghost"} className={"size-8"} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <ArrowUpDown className="size-3" />
      </Button>
    </div>
  );
}
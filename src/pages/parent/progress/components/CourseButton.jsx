import React from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function CourseButton({ title, status, last = false }) {
  const variants = {
    "completed": "success",
    "ongoing": "primary",
    "signed up": "warning",
  }

  return (
    <Link
      to="#"
      className={
        buttonVariants({ variant: "ghost" }) +
        "flex items-center justify-between p-4 rounded-none " +
        (last ? "" : "border-b border-border")
      }
    >
      <strong className="text-sm font-normal w-full truncate">{title}</strong>
      <div className="flex gap-5">
        <Badge variant={variants[status]}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
        <ChevronRight size={16} />
      </div>
    </Link>
  );
}

export default CourseButton;
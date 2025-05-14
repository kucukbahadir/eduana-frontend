import { buttonVariants } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { ChevronRight } from "lucide-react";
import { studentsData } from "./data";
import { Link } from "react-router";

const STORAGE_KEY = "studentManagement";

const StudentManagement = () => {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem(STORAGE_KEY);
    return savedStudents ? JSON.parse(savedStudents) : studentsData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  return (
    <div className="flex flex-col gap-5 max-w-5xl w-full mx-auto bg-background p-5">
      <div className="flex justify-between">
        <h1>Student Overview</h1>
        <Link to="#" className={buttonVariants({ variant: "default", size: "sm"}) + " pl-5! rounded-full!"}>
          Start Preparation <ChevronRight />
        </Link>
      </div>
      <hr />
      <DataTable columns={columns} data={students} />
    </div>
  );
};

export default StudentManagement;

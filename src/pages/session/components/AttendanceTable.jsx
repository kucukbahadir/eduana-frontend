import React from "react";
import { Card } from "@/components/ui/card";
import SectionHeader from "./SectionHeader";
import { ListCheck } from "lucide-react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AttendanceRow from "./AttendanceRow";

const AttendanceTable = React.memo(({ students, attendance, handleToggleAttendance }) => (
  <Card className={"p-6 gap-4 rounded-md w-full"}>
    <SectionHeader icon={ListCheck} title="Attendance" subtitle={`${Object.values(attendance).filter((a) => a.present).length}/${students.length} Present`} />
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          <TableHead>Language</TableHead>
          <TableHead>Diet Restrictions</TableHead>
          <TableHead>Allergies</TableHead>
          <TableHead>Contact Number</TableHead>
          <TableHead className="w-12 text-center">Present</TableHead>
          <TableHead className="w-12 text-center">Late</TableHead>
          <TableHead className="w-12 text-center">Excused</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <AttendanceRow 
            key={student.id}
            student={student}
            initialAttendance={attendance[student.id]}
            onToggle={handleToggleAttendance}
          />
        ))}
      </TableBody>
    </Table>
  </Card>
));

export default AttendanceTable;
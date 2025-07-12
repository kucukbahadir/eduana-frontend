import React, { useState, useEffect } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";

const AttendanceRow = ({ student, initialAttendance, onToggle }) => {
  const [rowAttendance, setRowAttendance] = useState(initialAttendance || {
    present: false,
    late: false,
    excused: false
  });

  useEffect(() => {
    setRowAttendance(initialAttendance || {
      present: false,
      late: false,
      excused: false
    });
  }, [initialAttendance]);

  const handleToggle = (field, value) => {
    setRowAttendance(prev => ({
      ...prev,
      [field]: value
    }));
    
    onToggle(student.id, field, value);
  };

  return (
    <TableRow>
      <TableCell>{student.name}</TableCell>
      <TableCell>{student.language}</TableCell>
      <TableCell>{student.dietaryRestrictions || "None"}</TableCell>
      <TableCell>{student.allergies || "None"}</TableCell>
      <TableCell>{student.parentPhone || "None"}</TableCell>
      <TableCell className="text-center">
        <AttendanceSwitch
          checked={rowAttendance.present}
          onChange={(value) => handleToggle("present", value)}
          variant="success"
        />
      </TableCell>
      <TableCell className="text-center">
        <AttendanceSwitch
          checked={rowAttendance.late}
          onChange={(value) => handleToggle("late", value)}
          variant="destructive"
        />
      </TableCell>
      <TableCell className="text-center">
        <AttendanceSwitch
          checked={rowAttendance.excused}
          onChange={(value) => handleToggle("excused", value)}
          variant="warning"
        />
      </TableCell>
    </TableRow>
  );
};

const AttendanceSwitch = React.memo(({ checked, onChange, disabled = false, variant = "success" }) => {
  const colorVariants = {
    success: "data-[state=checked]:bg-success!",
    destructive: "data-[state=checked]:bg-destructive!",
    warning: "data-[state=checked]:bg-warning!",
  };

  return <Switch checked={checked} onCheckedChange={onChange} disabled={disabled} className={`${colorVariants[variant]} mx-auto`} />;
});

export default React.memo(AttendanceRow);
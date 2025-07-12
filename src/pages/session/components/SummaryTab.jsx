import React, { useMemo } from "react";
import evaluationCriteria from "../constants/evaluationCriteria";
import SectionHeader from "./SectionHeader";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle } from "lucide-react";

const SummaryTab = React.memo(({ students, attendance, evaluations }) => (
  <div className={`flex flex-col gap-0 p-1 rounded-lg bg-muted`}>
    <Card className={"p-6 gap-4 rounded-md w-full"}>
      <SectionHeader icon={CheckCircle} title="Statistics" />
      <div className="grid gap-6">
        <StatisticsCards students={students} attendance={attendance} evaluations={evaluations} />
        <SummaryEvaluationTable students={students} attendance={attendance} evaluations={evaluations} />
      </div>
    </Card>
  </div>
));

const StatisticsCards = React.memo(({ students, attendance, evaluations }) => {
  const stats = useMemo(() => {
    const presentCount = Object.values(attendance).filter((a) => a.present).length;
    
    let sum = 0;
    let count = 0;
    
    Object.entries(evaluations).forEach(([studentId, studentEvals]) => {
      // Only include evaluations for students who are present
      if (attendance[studentId]?.present) {
        Object.values(studentEvals).forEach((rating) => {
          sum += rating;
          count++;
        });
      }
    });
    
    const averageRating = count > 0 ? ((sum / count) * 2).toFixed(1) : "N/A";
    
    return {
      attendance: `${presentCount}/${students.length}`,
      averageRating
    };
  }, [students.length, attendance, evaluations]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard value={stats.attendance} label="Students Attended" />
      <StatCard value={stats.averageRating} label="Average Rating out of 10" />
    </div>
  );
});

const StatCard = React.memo(({ value, label }) => (
  <div className="flex flex-col gap-2 items-center justify-center bg-muted rounded-lg p-10">
    <strong className="text-5xl">{value}</strong>
    <span className="font-light">{label}</span>
  </div>
));

const SummaryEvaluationTable = React.memo(({ students, attendance, evaluations }) => {
  const { presentStudents, studentAverages } = useMemo(() => {
    const presentStudents = students.filter((student) => attendance[student.id]?.present);
    
    const studentAverages = {};
    presentStudents.forEach(student => {
      const studentEvals = evaluations[student.id] || {};
      const ratings = Object.values(studentEvals);
      if (ratings.length === 0) {
        studentAverages[student.id] = "N/A";
      } else {
        const sum = ratings.reduce((a, b) => a + b, 0);
        studentAverages[student.id] = (sum / ratings.length).toFixed(1);
      }
    });
    
    return { presentStudents, studentAverages };
  }, [students, attendance, evaluations]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          {evaluationCriteria.map((criteria) => (
            <TableHead key={criteria.id}>{criteria.name}</TableHead>
          ))}
          <TableHead>Average</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {presentStudents.map((student) => (
          <TableRow key={student.id}>
            <TableCell>{student.name}</TableCell>
            {evaluationCriteria.map((criteria) => (
              <TableCell key={criteria.id}>{evaluations[student.id]?.[criteria.id] || "N/A"}</TableCell>
            ))}
            <TableCell>{studentAverages[student.id]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
});

export default SummaryTab;
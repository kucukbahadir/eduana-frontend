import Table from "@/components/uiDashboard/Table.jsx";
import Card from "@/components/uiDashboard/Card.jsx";
import React from "react";

const coursesData = [
  { name: "Essential Coding Skills", level: 1, type: "Regular", period: 1, lessons: 6 },
  { name: "Essential Robotics Skills", level: 1, type: "Regular", period: 2, lessons: 6 },
  { name: "Navigating Electronics", level: 2, type: "BrightMinds", period: 1, lessons: 5 }
];

export function TeacherCourses() {
  return (
    <div>
      <Card>
        <h2 className="text-2xl font-bold mb-4 text-black">Courses</h2>
        <Table
          headers={["NAME", "LEVEL", "TYPE", "PERIOD", "# OF LESSONS"]}
          data={coursesData.map((course) => ({
            name: course.name,
            level: course.level,
            type: <span className="text-black">{course.type}</span>,
            period: course.period,
            lessons: course.lessons
          }))}
          className="table-auto w-full text-black"
        />
      </Card>
    </div>
  );
}
import Card from "@/components/uiDashboard/Card.jsx";
import Table from "@/components/uiDashboard/Table.jsx";
import React from "react";

const classesData = [
  {
    tag: "NLAMS02-20250106-RC-00300",
    location: "Amsterdam Oost",
    course: "Essential Robotics Skills",
    period: "Completed",
    level: 1
  },
  {
    tag: "NLAMS02-20250106-RC-00300",
    location: "Den Haag",
    course: "Essential Robotics Skills",
    period: "Completed",
    level: 2
  },
  { tag: "NLDH01-20240102-CC-02000", location: "Amstelveen", course: "CoderCamp", period: "Cancelled", level: 1 }
];

export function TeacherClasses() {
  return (
    <div>
      <Card>
        <h2 className="text-2xl font-bold mb-4 text-black">Your Classes</h2>
        <Table
          headers={["TAG", "LOCATION", "COURSE", "PERIOD", "LEVEL/GROUP"]}
          data={classesData.map((cls) => ({
            tag: cls.tag,
            location: cls.location,
            course: <span className="font-bold text-black">{cls.course}</span>,
            period: <span className="text-black">{cls.period}</span>,
            level: cls.level
          }))}
          className="table-auto w-full text-black"
        />
      </Card>
    </div>
  );
}



import Progress from "@/components/uiDashboard/Progress.jsx";
import Card from "@/components/uiDashboard/Card.jsx";
import React from "react";

const nextLesson = {
  tag: "NLAMS02-20250106-RC-00300",
  date: "22-01-2025 15:30-18:00",
  location: "The Hague, Netherlands",
  progress: 20,
  prepared: false
};

export function TeacherNextLesson() {
  return (
    <div>
      <Card>
        <h2 className="text-2xl font-bold mb-4 text-black">Next Lesson</h2>
        <p className="font-semibold text-black">{nextLesson.tag}</p>
        <p className="text-black"> {nextLesson.date}</p>
        <p className="text-black"> {nextLesson.location}</p>
        <Progress value={nextLesson.progress} />
        <p className="mt-2 text-sm text-black">{nextLesson.progress}% completed</p>
        <p className={`mt-2 text-black`}>{nextLesson.prepared ? "Prepared" : "Not Prepared"}</p>
      </Card>
    </div>
  );
}
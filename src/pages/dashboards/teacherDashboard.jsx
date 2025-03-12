import React from "react";
import Card from "../../components/uiDashboard/Card";
import Progress from "../../components/uiDashboard/Progress";
import {TeacherClasses} from "@/pages/dashboards/teacherDashboard/teacherClasses.jsx";
import { TeacherCourses } from "@/pages/dashboards/teacherDashboard/teacherCourses.jsx";

const nextLesson = {
  tag: "NLAMS02-20250106-RC-00300",
  date: "22-01-2025 15:30-18:00",
  location: "The Hague, Netherlands",
  progress: 75,
  prepared: false,
};

function TeacherDashboard() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">

      <TeacherClasses />

      <TeacherCourses />

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

export default TeacherDashboard;

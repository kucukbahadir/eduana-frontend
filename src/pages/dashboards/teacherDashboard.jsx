import React from "react";
import { TeacherClasses } from "@/pages/dashboards/teacherDashboard/teacherClasses.jsx";
import { TeacherCourses } from "@/pages/dashboards/teacherDashboard/teacherCourses.jsx";
import { TeacherNextLesson } from "@/pages/dashboards/teacherDashboard/teacherNextLesson.jsx";

function TeacherDashboard() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">

      <TeacherClasses />

      <TeacherCourses />

      <TeacherNextLesson />

    </div>
  );
}

export default TeacherDashboard;

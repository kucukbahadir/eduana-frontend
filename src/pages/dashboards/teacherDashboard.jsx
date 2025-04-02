import { TeacherClasses } from "@/pages/dashboards/teacherDashboard/teacherClasses.jsx";
import { TeacherCourses } from "@/pages/dashboards/teacherDashboard/teacherCourses.jsx";
import { TeacherNextLesson } from "@/pages/dashboards/teacherDashboard/teacherNextLesson.jsx";

function TeacherDashboard() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8 space-y-6">

      <section className="bg-background rounded-xl shadow-md p-6">
        <TeacherClasses />
      </section>

      <div className="grid grid-cols-3 gap-6">

        <section className="bg-background rounded-xl shadow-md p-6 col-span-2">
          <TeacherCourses />
        </section>

        <section className="bg-background rounded-xl shadow-md p-6 col-span-1">
          <TeacherNextLesson />
        </section>

      </div>

    </div>
  );
}

export default TeacherDashboard;

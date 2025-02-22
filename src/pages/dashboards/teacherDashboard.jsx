import React from "react";
import Card from "../../components/uiDashboard/Card";
import Progress from "../../components/uiDashboard/Progress";
import Table from "../../components/uiDashboard/Table";

const classesData = [
  {
    tag: "NLAMS02-20250106-RC-00300",
    location: "Amsterdam Oost",
    course: "Essential Robotics Skills",
    period: "Completed",
    level: 1,
  },
  {
    tag: "NLAMS02-20250106-RC-00300",
    location: "Den Haag",
    course: "Essential Robotics Skills",
    period: "Completed",
    level: 2,
  },
  { tag: "NLDH01-20240102-CC-02000", location: "Amstelveen", course: "CoderCamp", period: "Cancelled", level: 1 },
];

const coursesData = [
  { name: "Essential Coding Skills", level: 1, type: "Regular", period: 1, lessons: 6 },
  { name: "Essential Robotics Skills", level: 1, type: "Regular", period: 2, lessons: 6 },
  { name: "Navigating Electronics", level: 2, type: "BrightMinds", period: 1, lessons: 5 },
];

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
      <Card>
        <h2 className="text-2xl font-bold mb-4 text-black">Your Classes</h2>
        <Table
          headers={["TAG", "LOCATION", "COURSE", "PERIOD", "LEVEL/GROUP"]}
          data={classesData.map((cls) => ({
            tag: cls.tag,
            location: cls.location,
            course: <span className="font-bold text-black">{cls.course}</span>,
            period: <span className="text-black">{cls.period}</span>,
            level: cls.level,
          }))}
          className="table-auto w-full text-black"
        />
      </Card>

      <Card>
        <h2 className="text-2xl font-bold mb-4 text-black">Courses</h2>
        <Table
          headers={["NAME", "LEVEL", "TYPE", "PERIOD", "# OF LESSONS"]}
          data={coursesData.map((course) => ({
            name: course.name,
            level: course.level,
            type: <span className="text-black">{course.type}</span>,
            period: course.period,
            lessons: course.lessons,
          }))}
          className="table-auto w-full text-black"
        />
      </Card>

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

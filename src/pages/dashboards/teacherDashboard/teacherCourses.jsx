import Table from "@/components/uiDashboard/Table.jsx";
import Card from "@/components/uiDashboard/Card.jsx";
import { Button } from "@/components/ui/button";

const coursesData = [
  { name: "Essential Coding Skills", level: 1, type: "Regular", period: 1, lessons: 6 },
  { name: "Essential Robotics Skills", level: 1, type: "Regular", period: 2, lessons: 6 },
  { name: "Navigating Electronics", level: 2, type: "BrightMinds", period: 1, lessons: 5 }
];

export function TeacherCourses() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-primary">Courses</h1>
      <div>
        <Card>
          <Table
            headers={["NAME", "LEVEL", "TYPE", "PERIOD", "# OF LESSONS"]}
            data={coursesData.map((course) => ({
              name: <span className="text-primary font-medium">{course.name}</span>,
              level: <span className="text-primary-70">{course.level}</span>,
              type: (
                <span
                  className={`px-2 py-1 rounded-md text-sm font-semibold ${
                    course.type === "Regular" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"
                  }`}
                >
              {course.type}
            </span>
              ),
              period: <span className="text-primary-70">{course.period}</span>,
              lessons: <span className="text-primary-70">{course.lessons}</span>,
            }))}
            className="table-auto w-full text-primary"
          />
        </Card>
      </div>
      <Button variant={"primary"} className={"w-fit"}>
        View more →
      </Button>
    </div>

  );
}
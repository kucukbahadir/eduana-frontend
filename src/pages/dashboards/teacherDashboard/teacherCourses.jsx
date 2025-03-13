import Table from "@/components/uiDashboard/Table.jsx";
import Card from "@/components/uiDashboard/Card.jsx";

const coursesData = [
  { name: "Essential Coding Skills", level: 1, type: "Regular", period: 1, lessons: 6 },
  { name: "Essential Robotics Skills", level: 1, type: "Regular", period: 2, lessons: 6 },
  { name: "Navigating Electronics", level: 2, type: "BrightMinds", period: 1, lessons: 5 }
];

export function TeacherCourses() {
  return (
    <div>
      <h2 className="text-5xl font-bold mb-4 text-black">Courses</h2>
      <div>
        <Card>
          <Table
            headers={["NAME", "LEVEL", "TYPE", "PERIOD", "# OF LESSONS"]}
            data={coursesData.map((course) => ({
              name: <span className="text-black font-medium">{course.name}</span>,
              level: <span className="text-gray-700">{course.level}</span>,
              type: (
                <span
                  className={`px-2 py-1 rounded-md text-sm font-semibold ${
                    course.type === "Regular" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"
                  }`}
                >
              {course.type}
            </span>
              ),
              period: <span className="text-gray-700">{course.period}</span>,
              lessons: <span className="text-gray-700">{course.lessons}</span>,
            }))}
            className="table-auto w-full text-black"
          />
        </Card>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        View more →
      </button>
    </div>

  );
}
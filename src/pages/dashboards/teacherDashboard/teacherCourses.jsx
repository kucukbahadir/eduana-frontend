import { useEffect, useState } from "react";
import Table from "@/components/uiDashboard/Table.jsx";
import Card from "@/components/uiDashboard/Card.jsx";
import { Button } from "@/components/ui/button";
import CoursesService from "@/services/coursesService.js";

export function TeacherCourses() {
  const [courses, setCourses] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await CoursesService.getAllCourses();

        // Ensure data contains the courses array and handle the structure
        if (data && Array.isArray(data.courses)) {
          setCourses(data.courses); // Set courses to the courses array from data
        } else {
          setCourses([]); // Set to empty array if no courses found
        }
      } catch (err) {
        setError(err.message);
        setCourses([]); // Set courses to empty array if there is an error
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-primary">Courses</h1>
      <div>
        <Card>
          {loading ? (
            <p>Loading courses...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <Table
              headers={["NAME", "LEVEL", "TYPE", "PERIOD", "# OF LESSONS"]}
              data={courses.map((course) => ({
                name: <span className="text-primary font-medium">{course.title}</span>,
                level: <span className="text-primary-70">{course.curriculum?.level || "N/A"}</span>,
                type: (
                  <span
                    className={`px-2 py-1 rounded-md text-sm font-semibold ${
                      course.curriculum?.type === "Regular"
                        ? "bg-green-100 text-green-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {course.curriculum?.type || "N/A"}
                  </span>
                ),
                period: <span className="text-primary-70">{course.period || "N/A"}</span>,
                lessons: <span className="text-primary-70">{course.curriculum?.lessons?.length || 0}</span>,
              }))}
              className="table-auto w-full text-primary"
            />
          )}
        </Card>
      </div>
      <Button variant={"primary"} className={"w-fit"}>
        View more →
      </Button>
    </div>
  );
}

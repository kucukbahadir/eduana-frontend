import { useEffect, useState } from "react";
import Table from "@/components/uiDashboard/Table.jsx";
import Card from "@/components/uiDashboard/Card.jsx";
import { Button } from "@/components/ui/button";
import TeacherDashboardService from "@/services/teacherDashboardService.js"; // Assuming correct import for service

export function TeacherClasses() {
  const [classes, setClasses] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await TeacherDashboardService.getAllClasses();

        // Check the structure of the data received from backend
        console.log("Data received from backend:", data);

        // If the data is an array (expected to be an array of classes), set it
        if (data && Array.isArray(data)) {
          setClasses(data);
        } else {
          setClasses([]); // Set to empty array if the structure is not as expected
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setClasses([]); // Set classes to empty array if there is an error
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-primary">Your Classes</h1>
      <div>
        <Card>
          {loading ? (
            <p>Loading classes...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <Table
              headers={["COURSE", "LOCATION", "PERIOD", "LEVEL/GROUP", "NUMBER OF SESSIONS", "EVALUATIONS"]}
              data={classes.slice(0, 3).map((cls) => ({
                course: <span className="font-bold text-primary">{cls.title}</span>,
                location: <span className="text-primary/70">{cls.location || "N/A"}</span>,
                period: (
                  <span
                    className={`px-2 py-1 rounded-md text-sm font-semibold ${
                      cls.sessions && cls.sessions.length > 0
                        ? "bg-green-100 text-green-700"
                        : "bg-muted text-primary/70"
                    }`}
                  >
                    {cls.sessions && cls.sessions.length > 0
                      ? `Ongoing (${cls.sessions.length} sessions)`
                      : "No sessions"}
                  </span>
                ),
                level: <span className="text-primary/70">{cls.level || "N/A"}</span>,
                sessions: (
                  <span className="text-primary/70">{cls.sessions ? cls.sessions.length : 0}</span>
                ),
                evaluations: (
                  <span className="text-primary/70">{cls.evaluations ? cls.evaluations.length : 0}</span>
                ),
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
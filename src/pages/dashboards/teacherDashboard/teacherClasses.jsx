import { Button } from "@/components/ui/button";
import Card from "@/components/uiDashboard/Card.jsx";
import Table from "@/components/uiDashboard/Table.jsx";

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
    <div className="flex flex-col gap-4">
      <h1 className="text-primary">Your Classes</h1>
      <div>
        <Card>
          <Table
            headers={["TAG", "LOCATION", "COURSE", "PERIOD", "LEVEL/GROUP"]}
            data={classesData.map((cls) => ({
              tag: <span className="text-primary">{cls.tag}</span>,
              location: <span className="text-primary/70">{cls.location}</span>,
              course: <span className="font-bold text-primary">{cls.course}</span>,
              period: (
                <span
                  className={`px-2 py-1 rounded-md text-sm font-semibold ${
                    cls.period === "Completed"
                      ? "bg-green-100 text-green-700"
                      : cls.period === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-muted text-primary/70"
                  }`}
                >
              {cls.period}
            </span>
              ),
              level: <span className="text-primary/70">{cls.level}</span>,
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



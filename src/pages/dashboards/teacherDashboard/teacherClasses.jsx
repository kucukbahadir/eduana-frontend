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
    <div>
      <h2 className="text-5xl font-bold mb-4 text-black">Your Classes</h2>
      <div>
        <Card>
          <Table
            headers={["TAG", "LOCATION", "COURSE", "PERIOD", "LEVEL/GROUP"]}
            data={classesData.map((cls) => ({
              tag: <span className="text-black">{cls.tag}</span>,
              location: <span className="text-gray-700">{cls.location}</span>,
              course: <span className="font-bold text-black">{cls.course}</span>,
              period: (
                <span
                  className={`px-2 py-1 rounded-md text-sm font-semibold ${
                    cls.period === "Completed"
                      ? "bg-green-100 text-green-700"
                      : cls.period === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                  }`}
                >
              {cls.period}
            </span>
              ),
              level: <span className="text-gray-700">{cls.level}</span>,
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



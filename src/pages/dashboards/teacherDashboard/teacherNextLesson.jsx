import Progress from "@/components/uiDashboard/Progress.jsx";
import Card from "@/components/uiDashboard/Card.jsx";
import { Button } from "@/components/ui/button";

const nextLesson = {
  tag: "NLAMS02-20250106-RC-00300",
  date: "22-01-2025 15:30-18:00",
  location: "The Hague, Netherlands",
  progress: 90,
  prepared: false, // Initial value
};

// Ensure prepared is true when progress reaches 100%
if (nextLesson.progress === 100) {
  nextLesson.prepared = true;
}

export function TeacherNextLesson() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-primary">Next Lesson</h1>
      <Card>
        <p className="font-semibold text-primary">{nextLesson.tag}</p>
        <p className="text-primary/60">{nextLesson.date}</p>
        <p className="text-primary/60">{nextLesson.location}</p>

        {/* Progress Bar */}
        <Progress value={nextLesson.progress} className="mt-4" />
        <p className="mt-2 text-sm text-primary/60">{nextLesson.progress}% completed</p>

        {/* Prepared Status */}
        <p
          className={`mt-2 text-sm font-semibold px-2 py-1 rounded-md w-fit ${
            nextLesson.prepared ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {nextLesson.prepared ? "Prepared" : "Not Prepared"}
        </p>

        {/* Action Button */}
        <Button variant={"primary"} className={"w-fit mt-4"}>
          {nextLesson.prepared ? "Start Lesson" : "Finish Preparation →"}
        </Button>
      </Card>
    </div>
  );
}

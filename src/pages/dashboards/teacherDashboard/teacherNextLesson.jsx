import Progress from "@/components/uiDashboard/Progress.jsx";
import Card from "@/components/uiDashboard/Card.jsx";

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
    <div>
      <h2 className="text-2xl font-bold mb-4 text-black">Next Lesson</h2>
      <Card>
        <p className="font-semibold text-black">{nextLesson.tag}</p>
        <p className="text-gray-600">{nextLesson.date}</p>
        <p className="text-gray-600">{nextLesson.location}</p>

        {/* Progress Bar */}
        <Progress value={nextLesson.progress} className="mt-4" />
        <p className="mt-2 text-sm text-gray-700">{nextLesson.progress}% completed</p>

        {/* Prepared Status */}
        <p
          className={`mt-2 text-sm font-semibold px-2 py-1 rounded-md w-fit ${
            nextLesson.prepared ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {nextLesson.prepared ? "Prepared" : "Not Prepared"}
        </p>

        {/* Action Button */}
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          {nextLesson.prepared ? "Start Lesson" : "Finish Preparation →"}
        </button>
      </Card>
    </div>
  );
}

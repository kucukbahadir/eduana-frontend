import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Check, ChevronRight, CircleDashed, CircleDotDashed } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

/**
 * Component for displaying a list of lessons with their status
 * @param {Object} props
 * @param {Array} props.sessions - Array of session objects
 */
const LessonsList = ({ sessions }) => {
  // Force re-render every minute to update lesson statuses
  const [, setRefreshTrigger] = useState(0);

  useEffect(() => {
    // Update every 30 seconds to refresh status icons
    const intervalId = setInterval(() => {
      setRefreshTrigger((prev) => prev + 1);
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card className={"h-fit p-4 gap-2 grow"}>
      <h3 className="mb-2">Sessions</h3>
      {sessions.length < 1 ? (
        <span className="text-muted-foreground">No sessions available</span>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {sessions
            .sort((a, b) => new Date(a.start_time) - new Date(b.start_time))
            .map((session, index) => (
              <LessonItem key={session.id || index} session={session} index={index} />
            ))}
        </div>
      )}
    </Card>
  );
};

/**
 * Individual lesson item component
 */
const LessonItem = ({ session, index }) => {
  const { id: classId } = useParams();
  const [status, setStatus] = useState("upcoming");

  // Update the status whenever the component renders or timer triggers
  useEffect(() => {
    updateLessonStatus();

    // Check status every second for active lessons
    const timer = setInterval(updateLessonStatus, 1000);
    return () => clearInterval(timer);
  }, [session.start_time, session.end_time]);

  // Function to determine the current status
  function updateLessonStatus() {
    const now = Date.now();
    const start_time = new Date(session.start_time).getTime();
    const end_time = new Date(session.end_time).getTime();

    let newStatus;
    if (start_time <= now && end_time >= now) {
      newStatus = "active";
    } else if (end_time < now) {
      newStatus = "completed";
    } else {
      newStatus = "upcoming";
    }

    if (newStatus !== status) {
      setStatus(newStatus);
    }
  }

  // Get the appropriate icon based on status
  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return <Check className="text-success" size={16} />;
      case "active":
        return <CircleDotDashed className="text-warning" size={16} />;
      default:
        return <CircleDashed className="text-muted-foreground" size={16} />;
    }
  };

  return (
    <Link
      to={`/classes/${classId}/sessions/${session.id}`}
      className={buttonVariants({ variant: "secondary" }) + " !shadow-none text-start justify-start !h-fit !py-3"}
    >
      {getStatusIcon()}
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <span>{session.lesson.title}</span>
          <span className="text-xs font-normal text-muted-foreground">
            {new Date(session.start_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} /{" "}
            {new Date(session.end_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} —{" "}
            {new Date(session.start_time).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </span>
        </div>
        <ChevronRight />
      </div>
    </Link>
  );
};

export default LessonsList;

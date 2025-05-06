import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Check, CircleDashed, CircleDotDashed } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

/**
 * Component for displaying a list of lessons with their status
 * @param {Object} props
 * @param {Array} props.lessons - Array of lesson objects
 */
const LessonsList = ({ lessons }) => {
  // Force re-render every minute to update lesson statuses
  const [, setRefreshTrigger] = useState(0);
  
  useEffect(() => {
    // Update every 30 seconds to refresh status icons
    const intervalId = setInterval(() => {
      setRefreshTrigger(prev => prev + 1);
    }, 30000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <Card className={"h-fit p-4 gap-2 grow"}>
      <h3 className="mb-2">Lessons</h3>
      {lessons.length < 1 ? (
        <span className="text-muted-foreground">No lessons available</span>
      ) : (
        <div className="grid grid-cols-2 gap-2">

        {lessons.map((lesson, index) => (
          <LessonItem 
            key={lesson.id || index} 
            lesson={lesson} 
            index={index} 
            />
        ))}
            </div>
      )}
    </Card>
  );
};

/**
 * Individual lesson item component
 */
const LessonItem = ({ lesson, index }) => {
  const { id: classId } = useParams();
  const [status, setStatus] = useState("upcoming");
  
  // Update the status whenever the component renders or timer triggers
  useEffect(() => {
    updateLessonStatus();
    
    // Check status every second for active lessons
    const timer = setInterval(updateLessonStatus, 1000);
    return () => clearInterval(timer);
  }, [lesson.startDate, lesson.endDate]);
  
  // Function to determine the current status
  function updateLessonStatus() {
    const now = Date.now();
    const startDate = new Date(lesson.startDate).getTime();
    const endDate = new Date(lesson.endDate).getTime();
    
    let newStatus;
    if (startDate <= now && endDate >= now) {
      newStatus = "active";
    } else if (endDate < now) {
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
    <Link to={`/classes/${classId}/lessons/${lesson.id}`} className={buttonVariants({ variant: "outline" }) + " text-start justify-start"}>
      {getStatusIcon()}
      {index + 1 < 10 ? `0${index + 1}` : index + 1} - {lesson.name}
    </Link>
  );
};

export default LessonsList;
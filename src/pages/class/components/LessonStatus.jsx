import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Component for displaying active or next lesson information
 * @param {Object} props
 * @param {Array} props.allLessons - All scheduled lessons for this class
 * @param {boolean} props.isCamp - Whether the class is a Coder Camp
 */
const LessonStatus = ({ allLessons, isCamp = false }) => {
  // Internal state to track current active and next lessons
  const [activeLesson, setActiveLesson] = useState(null);
  const [nextLesson, setNextLesson] = useState(null);
  
  // Update active and next lessons based on current time
  useEffect(() => {
    // Function to determine active and next lessons
    const updateLessonStatus = () => {
      if (!allLessons || !allLessons.length) return;
      
      const now = new Date();
      
      // Find active lesson (current time is between start and end)
      const currentActiveLesson = allLessons.find(lesson => 
        new Date(lesson.startDate) <= now && 
        new Date(lesson.endDate) >= now
      );
      
      // Find next lesson (start time is in the future)
      // Sort by start time to get the closest upcoming lesson
      const upcomingLessons = allLessons
        .filter(lesson => new Date(lesson.startDate) > now)
        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      
      const currentNextLesson = upcomingLessons.length > 0 ? upcomingLessons[0] : null;
      
      setActiveLesson(currentActiveLesson);
      setNextLesson(currentNextLesson);
    };
    
    // Update immediately and then set interval
    updateLessonStatus();
    
    // Check every second for changes in lesson status
    const intervalId = setInterval(updateLessonStatus, 1000);
    return () => clearInterval(intervalId);
  }, [allLessons]);
  
  return (
    <Card className={"p-4 gap-2 text-nowrap h-fit justify-between"}>
      <div className="flex flex-col pt-2 pb-4 gap-2 justify-center text-center">
        {activeLesson ? (
          <ActiveLessonContent lesson={activeLesson} isCamp={isCamp} />
        ) : nextLesson ? (
          <NextLessonContent lesson={nextLesson} isCamp={isCamp} />
        ) : (
          <span className="text-muted-foreground">No upcoming {isCamp ? "activities" : "lessons"}</span>
        )}
      </div>
      <Link to={"#"} className={buttonVariants({ variant: activeLesson ? "default" : "secondary" })}>
        <ChevronRight /> {activeLesson ? `Join Active ${isCamp ? "Activity" : "Lesson"}` : `Go To ${isCamp ? "Activity" : "Lesson"}`}
      </Link>
    </Card>
  );
};

/**
 * Component for displaying active lesson details with accurate countdown
 */
const ActiveLessonContent = ({ lesson, isCamp = false }) => {
  const [remainingTime, setRemainingTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    // Calculate initial time
    updateRemainingTime();
    
    // Set up interval to update countdown
    const intervalId = setInterval(updateRemainingTime, 1000);
    
    return () => clearInterval(intervalId);
    
    function updateRemainingTime() {
      const now = Date.now();
      const endTime = new Date(lesson.endDate).getTime();
      const timeDiff = endTime - now;
      
      // Check if lesson has ended
      if (timeDiff <= 0) {
        setRemainingTime({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      // Calculate hours, minutes, seconds with proper rounding
      // Convert milliseconds to seconds first to avoid rounding errors
      const totalSeconds = Math.ceil(timeDiff / 1000);
      
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      
      setRemainingTime({ hours, minutes, seconds });
    }
  }, [lesson.endDate]);
  
  return (
    <>
      <span className="text-warning font-medium">Currently Active</span>
      <h2 className="font-extrabold">{lesson.name}</h2>
      <span className="text-muted-foreground">
        {new Date(lesson.startDate).toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
      </span>
      <span className="text-warning text-sm">
        {isCamp ? "Activity" : "Lesson"} ends in {remainingTime.hours > 0 ? `${remainingTime.hours}h ` : ""}
        {remainingTime.minutes}m {remainingTime.seconds}s
      </span>
    </>
  );
};

/**
 * Component for displaying next lesson details with accurate countdown
 */
const NextLessonContent = ({ lesson, isCamp = false }) => {
  const [timeDisplay, setTimeDisplay] = useState("");
  
  useEffect(() => {
    // Initial calculation
    updateTimeDisplay();
    
    // Set up interval for live updates
    const timer = setInterval(updateTimeDisplay, 1000);
    return () => clearInterval(timer);
    
    function updateTimeDisplay() {
      const now = Date.now();
      const startTime = new Date(lesson.startDate).getTime();
      const timeDiff = startTime - now;
      
      // Convert to total seconds to avoid floating point issues
      const totalSeconds = Math.max(0, Math.ceil(timeDiff / 1000));
      
      // Calculate with proper rounding
      const days = Math.floor(totalSeconds / 86400); // 86400 seconds in a day
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      
      // Create a more detailed time display that shows more precision
      let newTimeDisplay = "";
      
      if (days > 0) {
        newTimeDisplay = `${days} ${days === 1 ? "day" : "days"}`;
        // Add hours if there are any
        if (hours > 0) {
          newTimeDisplay += ` ${hours} ${hours === 1 ? "hour" : "hours"}`;
        }
      } else if (hours > 0) {
        newTimeDisplay = `${hours} ${hours === 1 ? "hour" : "hours"}`;
        // Add minutes if there are any
        if (minutes > 0) {
          newTimeDisplay += ` ${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
        }
      } else if (minutes > 0) {
        newTimeDisplay = `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
        // Add seconds if less than 5 minutes remaining
        if (minutes < 5 && seconds > 0) {
          newTimeDisplay += ` ${seconds} ${seconds === 1 ? "second" : "seconds"}`;
        }
      } else {
        newTimeDisplay = `${seconds} ${seconds === 1 ? "second" : "seconds"}`;
      }
      
      setTimeDisplay(newTimeDisplay);
    }
  }, [lesson.startDate]);

  return (
    <>
      <span className="text-muted-foreground">Next {isCamp ? "Activity" : "Lesson"}</span>
      <h2 className="font-extrabold">{lesson.name}</h2>
      <span className="text-muted-foreground">
        {new Date(lesson.startDate).toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
      </span>
      <span className="text-muted-foreground text-sm">
        {isCamp ? "Activity" : "Lesson"} will start in {timeDisplay}
      </span>
    </>
  );
};

export default LessonStatus;
import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Component for displaying active or next lesson information
 * @param {Object} props
 * @param {Array} props.allLessons - All scheduled lessons for this class
 */
const LessonStatus = ({ allLessons }) => {
  // Internal state to track current active and next lessons
  const [activeLesson, setActiveLesson] = useState(null);
  const [nextLesson, setNextLesson] = useState(null);

  // Update active and next lessons based on current time
  useEffect(() => {
    if (!allLessons || !allLessons.length) return;

    let timeoutId = null;

    // Function to determine active and next lessons
    const updateLessonStatus = () => {
      const now = new Date();

      // Find active lesson (current time is between start and end)
      const currentActiveLesson = allLessons.find((lesson) => new Date(lesson.startDate) <= now && new Date(lesson.endDate) >= now);

      // Find next lesson (start time is in the future)
      // Sort by start time to get the closest upcoming lesson
      const upcomingLessons = allLessons.filter((lesson) => new Date(lesson.startDate) > now).sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

      const currentNextLesson = upcomingLessons.length > 0 ? upcomingLessons[0] : null;

      console.log("Active Lesson:", currentActiveLesson);
      console.log("Next Lesson:", currentNextLesson);

      setActiveLesson(currentActiveLesson);
      setNextLesson(currentNextLesson);

      // Calculate when the next status change will happen
      const nextChangeTime = getNextStatusChangeTime(now, currentActiveLesson, currentNextLesson);

      if (nextChangeTime) {
        // Schedule the next update at the exact moment the status changes
        const timeUntilChange = nextChangeTime.getTime() - now.getTime();
        // Add 100ms buffer to ensure we capture the change
        timeoutId = setTimeout(updateLessonStatus, Math.max(timeUntilChange + 100, 1000));
      } else {
        // No upcoming changes, check again in 5 minutes
        timeoutId = setTimeout(updateLessonStatus, 5 * 60 * 1000);
      }
    };

    // Helper function to calculate when the next status change will occur
    const getNextStatusChangeTime = (now, activeLesson, nextLesson) => {
      const times = [];

      // If there's an active lesson, it will end at some point
      if (activeLesson) {
        times.push(new Date(activeLesson.endDate));
      }

      // If there's a next lesson, it will start at some point
      if (nextLesson) {
        times.push(new Date(nextLesson.startDate));
      }

      // Find the earliest time in the future
      const futureTimes = times.filter((time) => time > now);
      return futureTimes.length > 0 ? futureTimes.sort((a, b) => a - b)[0] : null;
    };

    // Initial update
    updateLessonStatus();

    // Cleanup timeout on unmount or dependency change
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [allLessons]);

  if (!activeLesson && !nextLesson) {
    return
  }

  return (
    <Card className={"p-4 gap-2 text-nowrap h-fit justify-between"}>
      <div className="flex flex-col pt-2 pb-4 gap-2 justify-center text-center">
        {activeLesson ? (
          <ActiveLessonContent lesson={activeLesson} />
        ) : nextLesson ? (
          <NextLessonContent lesson={nextLesson} />
        ) : (
          <span className="text-muted-foreground">No upcoming lessons</span>
        )}
      </div>
      <Link to={"lessons/" + (activeLesson ? activeLesson.id : nextLesson.id)} className={buttonVariants({ variant: activeLesson ? "default" : "secondary" })}>
        <ChevronRight /> {activeLesson ? "Join Active Lesson" : "Go To Lesson"}
      </Link>
    </Card>
  );
};

/**
 * Component for displaying active lesson details with accurate countdown
 */
const ActiveLessonContent = ({ lesson }) => {
  const [remainingTime, setRemainingTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    let intervalId = null;

    const updateRemainingTime = () => {
      const now = Date.now();
      const endTime = new Date(lesson.endDate).getTime();
      const timeDiff = endTime - now;

      // Check if lesson has ended
      if (timeDiff <= 0) {
        setRemainingTime({ hours: 0, minutes: 0, seconds: 0 });
        if (intervalId) {
          clearInterval(intervalId);
        }
        return;
      }

      // Calculate hours, minutes, seconds with proper rounding
      // Convert milliseconds to seconds first to avoid rounding errors
      const totalSeconds = Math.ceil(timeDiff / 1000);

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setRemainingTime({ hours, minutes, seconds });
    };

    // Calculate initial time
    updateRemainingTime();

    // Only set up interval if lesson hasn't ended
    const now = Date.now();
    const endTime = new Date(lesson.endDate).getTime();

    if (endTime > now) {
      // Update every second for countdown display
      intervalId = setInterval(updateRemainingTime, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [lesson.endDate]);

  return (
    <>
      <span className="text-warning font-medium">Currently Active</span>
      <h2 className="font-extrabold">{lesson.name}</h2>
      <span className="text-muted-foreground">{new Date(lesson.startDate).toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}</span>{" "}
      <span className="text-warning text-sm">
        Lesson ends in {remainingTime.hours > 0 ? `${remainingTime.hours}h ` : ""}
        {remainingTime.minutes}m {remainingTime.seconds}s
      </span>
    </>
  );
};

/**
 * Component for displaying next lesson details with adaptive countdown timing
 */
const NextLessonContent = ({ lesson }) => {
  const [timeDisplay, setTimeDisplay] = useState("");

  useEffect(() => {
    let timerId = null;

    const updateTimeDisplay = () => {
      const now = Date.now();
      const startTime = new Date(lesson.startDate).getTime();
      const timeDiff = startTime - now;

      // If lesson has already started, clear timer and return
      if (timeDiff <= 0) {
        setTimeDisplay("Starting now");
        if (timerId) {
          clearTimeout(timerId);
        }
        return;
      }

      // Convert to total seconds to avoid floating point issues
      const totalSeconds = Math.max(0, Math.ceil(timeDiff / 1000));

      // Calculate with proper rounding
      const days = Math.floor(totalSeconds / 86400); // 86400 seconds in a day
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      // Create a more detailed time display that shows more precision
      let newTimeDisplay = "";
      let nextUpdateInterval = 1000; // Default to 1 second

      if (days > 0) {
        newTimeDisplay = `${days} ${days === 1 ? "day" : "days"}`;
        // Add hours if there are any
        if (hours > 0) {
          newTimeDisplay += ` ${hours} ${hours === 1 ? "hour" : "hours"}`;
        }
        // Update every hour when days remain
        nextUpdateInterval = 60 * 60 * 1000;
      } else if (hours > 0) {
        newTimeDisplay = `${hours} ${hours === 1 ? "hour" : "hours"}`;
        // Add minutes if there are any
        if (minutes > 0) {
          newTimeDisplay += ` ${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
        }
        // Update every minute when hours remain (but less than a day)
        nextUpdateInterval = 60 * 1000;
      } else if (minutes > 5) {
        newTimeDisplay = `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
        // Update every minute when more than 5 minutes remain
        nextUpdateInterval = 60 * 1000;
      } else if (minutes > 0) {
        newTimeDisplay = `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
        // Add seconds when less than 5 minutes remaining
        if (seconds > 0) {
          newTimeDisplay += ` ${seconds} ${seconds === 1 ? "second" : "seconds"}`;
        }
        // Update every second when less than 5 minutes remain
        nextUpdateInterval = 1000;
      } else {
        newTimeDisplay = `${seconds} ${seconds === 1 ? "second" : "seconds"}`;
        // Update every second when less than a minute remains
        nextUpdateInterval = 1000;
      }

      setTimeDisplay(newTimeDisplay);

      // Schedule next update with adaptive timing
      timerId = setTimeout(updateTimeDisplay, nextUpdateInterval);
    };

    // Initial calculation
    updateTimeDisplay();

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [lesson.startDate]);
  return (
    <>
      <span className="text-muted-foreground">Next Lesson</span>
      <h2 className="font-extrabold">{lesson.name}</h2>
      <span className="text-muted-foreground">{new Date(lesson.startDate).toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}</span>
      <span className="text-muted-foreground text-sm">Lesson will start in {timeDisplay}</span>
    </>
  );
};

export default LessonStatus;

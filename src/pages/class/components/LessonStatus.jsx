import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

/**
 * Component for displaying active or next lesson information
 * @param {Object} props
 * @param {Array} props.sessions - All scheduled sessions for this class
 */
const LessonStatus = ({ sessions }) => {
  const [activeLesson, setActiveLesson] = useState(null);
  const [nextLesson, setNextLesson] = useState(null);

  // Helper function to calculate when the next status change will occur
  const getNextStatusChangeTime = useCallback((now, activeLesson, nextLesson) => {
    const times = [];
    
    if (activeLesson) {
      times.push(new Date(activeLesson.end_time));
    }

    if (nextLesson) {
      times.push(new Date(nextLesson.start_time));
    }

    const futureTimes = times.filter((time) => time > now);
    return futureTimes.length > 0 ? futureTimes.sort((a, b) => a - b)[0] : null;
  }, []);

  // Move updateLessonStatus function outside and make it a useCallback
  const updateLessonStatus = useCallback(() => {
    if (!sessions || !sessions.length) return;

    const now = new Date();

    // Find active lesson
    const currentActiveLesson = sessions.find((session) => 
      new Date(session.start_time) <= now && new Date(session.end_time) >= now
    );

    // Find next lesson
    const upcomingSessions = sessions
      .filter((session) => new Date(session.start_time) > now)
      .sort((a, b) => new Date(a.start_time) - new Date(b.start_time));

    const currentNextLesson = upcomingSessions.length > 0 ? upcomingSessions[0] : null;

    setActiveLesson(currentActiveLesson);
    setNextLesson(currentNextLesson);
  }, [sessions]);

  // Optimized timer management
  useEffect(() => {
    if (!sessions || !sessions.length) return;

    let timeoutId = null;

    const scheduleNextUpdate = () => {
      const now = new Date();
      const nextChangeTime = getNextStatusChangeTime(now, activeLesson, nextLesson);
      
      if (nextChangeTime) {
        const timeUntilChange = nextChangeTime.getTime() - now.getTime();
        // Schedule update at the exact moment of change, with minimum 1 second interval
        timeoutId = setTimeout(() => {
          updateLessonStatus();
          scheduleNextUpdate();
        }, Math.max(timeUntilChange + 100, 1000));
      } else {
        // No upcoming changes, check again in 5 minutes
        timeoutId = setTimeout(() => {
          updateLessonStatus();
          scheduleNextUpdate();
        }, 5 * 60 * 1000);
      }
    };

    // Initial update
    updateLessonStatus();
    scheduleNextUpdate();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [sessions, updateLessonStatus, getNextStatusChangeTime, activeLesson, nextLesson]);

  if (!activeLesson && !nextLesson) {
    return null;
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
      <Link 
        to={"sessions/" + (activeLesson ? activeLesson.id : nextLesson.id)} 
        className={buttonVariants({ variant: activeLesson ? "default" : "secondary" })}
      >
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
      const endTime = new Date(lesson.end_time).getTime();
      const timeDiff = endTime - now;

      if (timeDiff <= 0) {
        setRemainingTime({ hours: 0, minutes: 0, seconds: 0 });
        if (intervalId) {
          clearInterval(intervalId);
        }
        return;
      }

      const totalSeconds = Math.ceil(timeDiff / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setRemainingTime({ hours, minutes, seconds });
    };

    updateRemainingTime();
    
    const now = Date.now();
    const endTime = new Date(lesson.end_time).getTime();

    if (endTime > now) {
      intervalId = setInterval(updateRemainingTime, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [lesson.end_time]);

  return (
    <>
      <span className="text-warning font-medium">Currently Active</span>
      <h2 className="font-extrabold">{lesson.lesson.title}</h2>
      <span className="text-muted-foreground">
        {new Date(lesson.start_time).toLocaleString("en-US", { 
          dateStyle: "full", 
          timeStyle: "short" 
        })}
      </span>
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
      const startTime = new Date(lesson.start_time).getTime();
      const timeDiff = startTime - now;

      if (timeDiff <= 0) {
        setTimeDisplay("Starting now");
        if (timerId) {
          clearTimeout(timerId);
        }
        return;
      }

      const totalSeconds = Math.max(0, Math.ceil(timeDiff / 1000));
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      let newTimeDisplay = "";
      let nextUpdateInterval = 1000;

      if (days > 0) {
        newTimeDisplay = `${days} ${days === 1 ? "day" : "days"}`;
        if (hours > 0) {
          newTimeDisplay += ` ${hours} ${hours === 1 ? "hour" : "hours"}`;
        }
        nextUpdateInterval = 60 * 60 * 1000;
      } else if (hours > 0) {
        newTimeDisplay = `${hours} ${hours === 1 ? "hour" : "hours"}`;
        if (minutes > 0) {
          newTimeDisplay += ` ${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
        }
        nextUpdateInterval = 60 * 1000;
      } else if (minutes > 5) {
        newTimeDisplay = `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
        nextUpdateInterval = 60 * 1000;
      } else if (minutes > 0) {
        newTimeDisplay = `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
        if (seconds > 0) {
          newTimeDisplay += ` ${seconds} ${seconds === 1 ? "second" : "seconds"}`;
        }
        nextUpdateInterval = 1000;
      } else {
        newTimeDisplay = `${seconds} ${seconds === 1 ? "second" : "seconds"}`;
        nextUpdateInterval = 1000;
      }

      setTimeDisplay(newTimeDisplay);
      timerId = setTimeout(updateTimeDisplay, nextUpdateInterval);
    };

    updateTimeDisplay();

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [lesson.start_time]);

  return (
    <>
      <span className="text-muted-foreground">Next Lesson</span>
      <h2 className="font-extrabold">{lesson.lesson.title}</h2>
      <span className="text-muted-foreground">
        {new Date(lesson.start_time).toLocaleString("en-US", { 
          dateStyle: "full", 
          timeStyle: "short" 
        })}
      </span>
      <span className="text-muted-foreground text-sm">
        Lesson will start in {timeDisplay}
      </span>
    </>
  );
};

export default LessonStatus;

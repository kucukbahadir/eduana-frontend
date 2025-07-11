import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { MapPinned, BarChart, Calendar, ChevronLeft, LoaderCircle, ChevronRight, CircleDotDashed } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import Category from "./components/Category";
import StudentTable from "./components/StudentTable";
import LessonsList from "./components/LessonsList";
import LessonStatus from "./components/LessonStatus";
import Card from "@/components/Card";

const errorMessages = {
  404: { title: "Class Not Found", description: "Please check the class ID or try again later." },
  500: { title: "Server Error", description: "An error occurred while fetching class data. Please try again later." },
  default: { title: "Unexpected Error", description: "An unexpected error occurred. Please try again later." },
};

const fetchClass = async (classId) => {
  const response = await fetch(`http://localhost:3000/api/classes/${classId}`);

  if (!response.ok) {
    const errorStatus = response.status.toString();
    const errorMessage = errorMessages[errorStatus] || errorMessages["default"];
    throw new Error(errorMessage);
  }

  return response.json();
};

/**
 * Class detail page component
 */
const Class = () => {
  const { id: classId } = useParams();
  const {
    data: classData = null,
    isLoading: loading,
    isRefetching: refetching,
    error,
  } = useQuery({
    queryKey: ["classData", classId],
    queryFn: () => fetchClass(classId),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  console.log("Class data:", classData);

  if (loading || refetching) {
    return (
      <div className="grow flex items-center justify-center text-muted-foreground">
        <LoaderCircle className="mr-4 animate-spin" />
      </div>
    );
  }

  if (error || !classData) {
    return (
      <div className="grow flex flex-col items-center justify-center font-light">
        <h1>{error.message.title}</h1>
        <p className="pb-0 mb-0">{error.message.description}</p>
        <p className="pt-0 mt-0">
          Would you like to go
          <Link to={"/classes"} className={buttonVariants({ variant: "link" }) + " h-fit px-0! pl-1! text-base!"}>
            back to classes
          </Link>
          ?
        </p>
      </div>
    );
  }

  const curriculum = classData.curriculum;
  const students = classData.enrollments;

  return (
    <div className="flex flex-col gap-4 max-w-5xl w-full mx-auto bg-background p-5">
      <h1>{curriculum.program_type}</h1>
      <div className="flex justify-between items-end mt-[-0.25rem]">
        <div className="flex gap-4 items-center text-sm text-muted-foreground">
          <Category name="Location" value={classData.location.name} icon={<MapPinned size={16} />} />
          <Category
            name="Duration"
            value={
              new Date(classData.sessions[0].start_time).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) +
              " - " +
              new Date(classData.sessions[classData.sessions.length - 1].end_time).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }
            icon={<Calendar size={16} />}
          />
          <Category name="Level" value={curriculum.difficulty_level} icon={<BarChart size={16} />} />
        </div>
        <Link to={"/classes"} className={buttonVariants({ variant: "link" }) + " h-fit px-0!"}>
          <ChevronLeft /> Back to classes
        </Link>
      </div>
      <hr />
      <LessonStatus sessions={classData.sessions} />
      {/* <SessionStatus sessions={classData.sessions} classId={classData.id} /> */}
      <LessonsList sessions={classData.sessions} />
      <StudentTable students={students} />
    </div>
  );
};

const findOngoingSession = (sessions) => {
  const now = new Date();
  return sessions.find((s) => new Date(s.start_time) <= now && new Date(s.end_time) >= now);
};

const findNextSession = (sessions) => {
  const now = new Date();
  return sessions.find((s) => new Date(s.start_time) > now);
};

const SessionStatus = ({ sessions, classId }) => {
  const session = findOngoingSession(sessions) || findNextSession(sessions);
  const [countdown, setCountdown] = useState(0);
  const [ongoing, setOngoing] = useState(false);
  const [loading, isLoading] = useState(true);

  console.log("Session data:", session);

  const calculateCountdown = (startTime) => {
    const now = new Date();
    const start = new Date(startTime);
    const timeDiff = start - now;
    return Math.max(0, Math.floor(timeDiff / 1000)); // in seconds
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!session) {
        isLoading(false);
        return;
      }

      const newCountdown = calculateCountdown(session.start_time);
      setCountdown(newCountdown);

      isLoading(false);
    }, 1000);

    return () => clearInterval(interval);
  }, [session]);

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  const countdownComponent = (value, unit) => {
    return (
      <div className="flex flex-col gap-2 font-mono font-light px-2 text-muted-foreground items-center uppercase leading-none">
        <strong className={"text-primary text-5xl"}>{value}</strong>
        {unit}
      </div>
    );
  };

  return (
    <Card className="flex flex-col border-none justify-center items-center border pt-7 gap-5">
      <h2 className="flex flex-col text-center gap-1 font-extrabold">
        {session.lesson.title}
        <span className="text-base font-normal text-muted-foreground">
          {new Date(session.start_time).toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
        </span>
      </h2>
      {loading ? (
        <div className={"bg-muted animate-pulse w-56 h-[72px] mx-auto rounded-md"} />
      ) : (
        <div className="grid grid-cols-3">
          {countdownComponent(hours, "Hours")}
          {countdownComponent(minutes, "Minutes")}
          {countdownComponent(seconds, "Seconds")}
        </div>
      )}
      <Link to={`/classes/${classId}/sessions/${session.id}`} className={buttonVariants({ variant: ongoing ? "default" : "secondary" }) + " w-full mt-3"}>
        {ongoing ? "Join Active Session" : "View Session Details"}
        <ChevronRight />
      </Link>
    </Card>
  );
};

export default Class;

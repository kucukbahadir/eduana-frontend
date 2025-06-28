import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import ClassCard from "./components/ClassCard";
import { Clock, CalendarDays, Calendar, ClockFading, Hourglass, BellElectric, SearchIcon, RefreshCcw, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const errorMessages = {
  404: "Classes not found. Please check the teacher ID or try again later.",
  500: "Server error. Please try again later.",
  "default": "An unexpected error occurred. Please try again later.",
};

const fetchClasses = async (teacherId) => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // delay for demonstration purposes

  const response = await fetch(`http://localhost:3000/api/teachers/${teacherId}/classes`);

  if (!response.ok) {
    const errorStatus = response.status.toString();
    const errorMessage = errorMessages[errorStatus] || errorMessages["default"];
    throw new Error(errorMessage);
  }

  return response.json();
};

const Classes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const teacherId = import.meta.env.VITE_TEACHER_ID;

  const {
    data: classes = [],
    isLoading: loading,
    isRefetching: refetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ["classes", teacherId],
    queryFn: () => fetchClasses(teacherId),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  const getNextUpcomingEvent = (classData) => {
    const now = new Date();

    if (!classData.sessions || classData.sessions.length === 0) {
      return null;
    }

    const upcomingSessions = classData.sessions
      .map((session) => ({
        startDateTime: new Date(session.start_time),
        endDateTime: new Date(session.end_time),
        id: session.id,
      }))
      .filter((session) => session.startDateTime > now)
      .sort((a, b) => a.startDateTime - b.startDateTime);

    return upcomingSessions[0] || null;
  };

  const getCurrentOngoingEvent = (classData) => {
    const now = new Date();

    if (!classData.sessions || classData.sessions.length === 0) {
      return null;
    }

    const ongoingSessions = classData.sessions
      .map((session) => ({
        startDateTime: new Date(session.start_time),
        endDateTime: new Date(session.end_time),
        id: session.id,
      }))
      .filter((session) => session.startDateTime <= now && session.endDateTime >= now);

    return ongoingSessions[0] || null;
  };

  const categorizedClasses = useMemo(() => {
    const now = new Date();

    const endOfToday = new Date(now);
    endOfToday.setHours(23, 59, 59, 999);

    const twentyFourHoursFromNow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    let result = [...classes];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (classData) =>
          classData.name.toLowerCase().includes(query) ||
          classData.location?.name.toLowerCase().includes(query) ||
          classData.location?.address.toLowerCase().includes(query) ||
          classData.curriculum?.title.toLowerCase().includes(query) ||
          classData.curriculum?.program_type.toLowerCase().includes(query) ||
          classData.curriculum?.difficulty_level.toLowerCase().includes(query)
      );
    }

    // Categorize classes by their next event time
    const ongoing = [];
    const today = [];
    const tomorrow = [];
    const thisWeek = [];
    const beyond = [];
    const noUpcoming = [];

    result.forEach((classItem) => {
      const currentEvent = getCurrentOngoingEvent(classItem);
      if (currentEvent) {
        ongoing.push(classItem);
        return;
      }

      const nextEvent = getNextUpcomingEvent(classItem);

      if (!nextEvent) {
        noUpcoming.push(classItem);
        return;
      }

      // Use startDateTime for lesson events
      const eventDateObj = nextEvent.startDateTime;
      const eventTime = eventDateObj.getTime();

      // Check if the event is today (before midnight tonight)
      if (eventTime <= endOfToday.getTime()) {
        today.push(classItem);
      }
      // Check if the event is within 24 hours but not today (tomorrow)
      else if (eventTime <= twentyFourHoursFromNow.getTime()) {
        tomorrow.push(classItem);
      }
      // Check if the event is within the week but not tomorrow
      else if (eventTime <= sevenDaysFromNow.getTime()) {
        thisWeek.push(classItem);
      } else {
        beyond.push(classItem);
      }
    });

    // Sort each category by date of next event
    const sortByNextEvent = (classItems) => {
      return classItems.sort((a, b) => {
        const eventA = getNextUpcomingEvent(a);
        const eventB = getNextUpcomingEvent(b);
        if (!eventA) return 1;
        if (!eventB) return -1;

        const dateA = eventA.startDateTime;
        const dateB = eventB.startDateTime;

        return dateA - dateB;
      });
    };

    return {
      ongoing: ongoing,
      today: sortByNextEvent(today),
      tomorrow: sortByNextEvent(tomorrow),
      thisWeek: sortByNextEvent(thisWeek),
      beyond: sortByNextEvent(beyond),
      noUpcoming: noUpcoming,
    };
  }, [classes, searchQuery]);

  // Render class cards with a category header
  const renderCategorySection = (classes, title, icon) => {
    if (!classes || classes.length === 0) return null;

    return (
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4 border-b pb-2">
          {icon}
          <h2 className="text-lg font-medium">{title}</h2>
          <span className="text-muted-foreground text-sm">({classes.length})</span>
        </div>
        <div className="space-y-3">
          {classes.map((classData) => (
            <ClassCard key={classData.id} classData={classData} curriculum={classData.curriculum} />
          ))}
        </div>
      </div>
    );
  };
  if (loading || refetching) {
    return (
      <div className="flex flex-col gap-4 max-w-5xl w-full mx-auto bg-background p-5">
        <div className="flex justify-between items-end">
          <h1>Classes</h1>
          <Button variant="link" className="h-fit px-0! gap-2" disabled>
            <RefreshCcw size={16} className="mr-1" /> Refresh
          </Button>
        </div>
        <hr />
        <Input icon={SearchIcon} placeholder="Search classes..." className="w-full" disabled />
        <div className="mt-4">
          <div className="w-40 h-6 bg-muted rounded animate-pulse" />
          <hr className="mb-4 mt-3" />
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="w-full h-24 rounded-md bg-muted animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 max-w-5xl w-full mx-auto bg-background p-5">
      <div className="flex justify-between items-end">
        <h1>Classes</h1>
        <Button variant="link" className="h-fit px-0! gap-2" onClick={() => refetch()} disabled={loading}>
          <RefreshCcw size={16} className="mr-1" /> Refresh
        </Button>
      </div>
      <hr />

      <Input icon={SearchIcon} placeholder="Search classes..." className="w-full" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

      {[
        ...categorizedClasses.ongoing,
        ...categorizedClasses.today,
        ...categorizedClasses.tomorrow,
        ...categorizedClasses.thisWeek,
        ...categorizedClasses.beyond,
        ...categorizedClasses.noUpcoming,
      ].length > 0 ? (
        <div className="mt-4">
          {renderCategorySection(categorizedClasses.ongoing, "Ongoing", <BellElectric size={18} className="text-primary-button" />)}
          {renderCategorySection(categorizedClasses.today, "Today", <Hourglass size={18} className="text-success" />)}
          {renderCategorySection(categorizedClasses.tomorrow, "Tomorrow", <Clock size={18} className="text-warning" />)}
          {renderCategorySection(categorizedClasses.thisWeek, "This Week", <ClockFading size={18} className="text-muted-foreground" />)}
          {renderCategorySection(categorizedClasses.beyond, "Later", <CalendarDays size={18} className="text-muted-foreground" />)}
          {renderCategorySection(categorizedClasses.noUpcoming, "No Upcoming Events", <CalendarCheck size={18} className="text-muted-foreground" />)}
        </div>
      ) : error ? (
        <p className="text-red-500 text-center py-4">{error.message}</p>
      ) : (
        <p className="text-muted-foreground text-center py-4">No classes found matching your criteria</p>
      )}
    </div>
  );
};

export default Classes;

import { useState, useEffect, useMemo } from "react";
import { classesData, curriculumData, scheduleData } from "./data";
import ClassCard from "./components/ClassCard";
import { FilterX, Clock, CalendarDays, Calendar, ClockFading, Hourglass, BellElectric, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STORAGE_KEY = "classManagement";

/**
 * Main Classes component that lists all available classes
 */
const Classes = () => {
  const [classes, setClasses] = useState(() => {
    const savedClasses = localStorage.getItem(STORAGE_KEY);
    return savedClasses ? JSON.parse(savedClasses) : classesData;
  });
  const [searchQuery, setSearchQuery] = useState("");

  // Check if any filters are active
  const hasActiveFilters = searchQuery ? true : false;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(classes));
  }, [classes]);
  // Get the next upcoming lesson for a specific class
  const getNextUpcomingEvent = (classData) => {
    const now = new Date();

    // For regular courses, check upcoming lessons
    const lessonsSchedule = scheduleData
      .filter((schedule) => schedule.classId === classData.id)
      .map((schedule) => ({
        startDateTime: new Date(schedule.startDateTime),
        id: schedule.id,
      }))
      .filter((schedule) => schedule.startDateTime > now)
      .sort((a, b) => a.startDateTime - b.startDateTime);

    return lessonsSchedule[0] || null;
  };
  // Get the currently ongoing lesson for a specific class
  const getCurrentOngoingEvent = (classData) => {
    const now = new Date();

    // For regular courses, check ongoing lessons
    const lessonsSchedule = scheduleData
      .filter((schedule) => schedule.classId === classData.id)
      .map((schedule) => ({
        startDateTime: new Date(schedule.startDateTime),
        endDateTime: new Date(schedule.endDateTime),
        id: schedule.id,
      }))
      .filter((schedule) => schedule.startDateTime <= now && schedule.endDateTime >= now);

    return lessonsSchedule[0] || null;
  };

  // Group classes by time categories
  const categorizedClasses = useMemo(() => {
    const now = new Date();

    // Calculate the end of today (midnight tonight)
    const endOfToday = new Date(now);
    endOfToday.setHours(23, 59, 59, 999);

    // Calculate exact time thresholds using milliseconds for precise comparison
    const twentyFourHoursFromNow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Get the filtered classes
    let result = [...classesData];

    // Apply search filter if query exists
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (classData) =>
          classData.name.toLowerCase().includes(query) ||
          classData.location.toLowerCase().includes(query) ||
          classData.period.includes(query) ||
          // Search in curriculum names
          curriculumData
            .find((c) => c.id === classData.curriculumId)
            ?.name.toLowerCase()
            .includes(query)
      );
    }

    // Categorize classes by their next event time
    const ongoing = []; // New category for ongoing lessons
    const today = [];
    const tomorrow = [];
    const thisWeek = [];
    const beyond = [];
    const noUpcoming = [];
    result.forEach((classItem) => {
      // Check if there's a currently ongoing lesson
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
      ongoing: ongoing, // Add the ongoing category to the result
      today: sortByNextEvent(today),
      tomorrow: sortByNextEvent(tomorrow),
      thisWeek: sortByNextEvent(thisWeek),
      beyond: sortByNextEvent(beyond),
      noUpcoming: noUpcoming,
    };
  }, [searchQuery]);

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
            <ClassCard key={classData.id} classData={classData} curriculum={curriculumData.find((curriculum) => curriculum.id === classData.curriculumId)} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 max-w-5xl w-full mx-auto bg-background p-5">
      <div className="flex justify-between items-end">
        <h1>Classes</h1>
        <Button variant="link" className="h-fit px-0! gap-2" onClick={() => setSearchQuery("")} disabled={!hasActiveFilters}>
          <FilterX size={16} className="mr-1" /> Clear Filters
        </Button>
      </div>
      <hr />

      <Input icon={SearchIcon} placeholder="Search classes..." className="w-full" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

      {[
        ...categorizedClasses.ongoing, // Include ongoing category
        ...categorizedClasses.today,
        ...categorizedClasses.tomorrow,
        ...categorizedClasses.thisWeek,
        ...categorizedClasses.beyond,
        ...categorizedClasses.noUpcoming,
      ].length > 0 ? (
        <div className="mt-4">
          {/* When no custom sorting, show classes categorized by time */}
          <>
            {renderCategorySection(categorizedClasses.ongoing, "Ongoing", <BellElectric size={18} className="text-primary-button" />)}

            {renderCategorySection(categorizedClasses.today, "Today", <Hourglass size={18} className="text-success" />)}

            {renderCategorySection(categorizedClasses.tomorrow, "Tomorrow", <Clock size={18} className="text-warning" />)}

            {renderCategorySection(categorizedClasses.thisWeek, "This Week", <ClockFading size={18} className="text-muted-foreground" />)}

            {renderCategorySection(categorizedClasses.beyond, "Later", <CalendarDays size={18} className="text-muted-foreground" />)}

            {renderCategorySection(categorizedClasses.noUpcoming, "No Upcoming Events", <Calendar size={18} className="text-muted-foreground" />)}
          </>
        </div>
      ) : (
        <p className="text-muted-foreground text-center py-4">No classes found matching your criteria</p>
      )}
    </div>
  );
};

export default Classes;

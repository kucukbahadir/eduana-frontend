import { Link, useParams } from "react-router";
import { classesData, curriculumData, lessonsData, scheduleData, isCoderCamp, campActivitiesData, campScheduleData, activityTypesData } from "./data";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { MapPinned, Notebook, BarChart, Calendar, Brain, Activity } from "lucide-react";

// Import our components
import Category from "./components/Category";
import LessonStatus from "./components/LessonStatus";
import LessonsList from "./components/LessonsList";
import StudentTable from "./components/StudentTable";
import ActivityList from "./components/ActivityList";

/**
 * Class detail page component
 */
const Class = () => {
  const { id } = useParams();
  const classId = parseInt(id);
  const classData = classesData.find((classData) => classData.id === classId);

  const isCamp = isCoderCamp(classData);

  // For regular courses, get curriculum and lessons
  const curriculum = !isCamp ? curriculumData.find((curriculum) => curriculum.id === classData.curriculumId) : null;

  // Get schedule data based on class type
  let scheduleItems = [];

  if (isCamp) {
    // For camps, get activities schedule
    const campActivitiesSchedule = campScheduleData.filter((schedule) => schedule.classId === classId);

    scheduleItems = campActivitiesSchedule.map((schedule) => {
      const activity = campActivitiesData.find((activity) => activity.id === schedule.activityId);
      const activityType = activityTypesData.find((type) => type.id === activity.typeId);

      return {
        id: schedule.id,
        name: activity.name,
        description: activity.description,
        startDate: schedule.startTime,
        endDate: schedule.endTime,
        type: "activity",
        category: activityType.name,
      };
    });
  } else {
    // For regular courses, get lessons schedule
    const classSchedule = scheduleData.filter((schedule) => schedule.classId === classId);

    scheduleItems = classSchedule.map((schedule) => {
      const lesson = lessonsData.find((lesson) => lesson.id === schedule.lessonId);
      return {
        ...lesson,
        startDate: schedule.startDate,
        endDate: schedule.endDate,
        scheduleId: schedule.id,
      };
    });
  }

  // Sort items by start date for consistent ordering
  scheduleItems.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  return (
    <div className="flex flex-col gap-4 max-w-5xl w-full mx-auto bg-background p-5">
      <h1>{classData.name}</h1>
      <div className="flex justify-between items-end mt-[-0.25rem]">
        <div className="flex gap-4 items-center text-sm text-muted-foreground">
          <Category name="Location" value={classData.location} icon={<MapPinned size={16} />} />

          {isCamp ? (
            <>
              <Category name="Type" value="Coder Camp" icon={<Brain size={16} />} />
              <Category name="Activities" value={scheduleItems.length} icon={<Activity size={16} />} />
            </>
          ) : (
            <>
              <Category name="Curriculum" value={curriculum?.name} icon={<Notebook size={16} />} />
              <Category name="Level" value={curriculum?.level} icon={<BarChart size={16} />} />
            </>
          )}
          <Category name="Period" value={classData.period} icon={<Calendar size={16} />} />
        </div>
        <Link to={"/classes"} className={buttonVariants({ variant: "link" }) + " h-fit px-0!"}>
          <ChevronLeft /> Back to classes
        </Link>
      </div>
      <hr />
      <div className="flex flex-col grow gap-4">
        {/* Pass all scheduled items to LessonStatus so it can determine active/next in real-time */}
        <LessonStatus allLessons={scheduleItems} />
        {/* Use our StudentTable component */}
        <StudentTable students={classData.students} />

        {isCamp ? <ActivityList activities={scheduleItems} /> : <LessonsList lessons={scheduleItems} />}
      </div>
    </div>
  );
};

export default Class;

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { classesData, curriculumData, lessonsData, scheduleData } from "./data";
import { MapPinned, Notebook, BarChart, Calendar, ChevronLeft, LoaderCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import Category from "./components/Category";
import LessonStatus from "./components/LessonStatus";
import LessonsList from "./components/LessonsList";
import StudentTable from "./components/StudentTable";

/**
 * Class detail page component
 */
const Class = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const classId = parseInt(id);
  
  // Simulate data loading
  useEffect(() => {
    const loadClassData = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setLoading(false);
    };
    
    loadClassData();
  }, [id]);
    const classData = classesData.find((classData) => classData.id === classId);

  // Get curriculum and lessons for regular courses
  const curriculum = curriculumData.find((curriculum) => curriculum.id === classData?.curriculumId);

  // Get lessons schedule for regular courses
  const classSchedule = scheduleData.filter((schedule) => schedule.classId === classId);

  const scheduleItems = classSchedule.map((schedule) => {
    const lesson = lessonsData.find((lesson) => lesson.id === schedule.lessonId);
    return {
      ...lesson,
      startDate: schedule.startDateTime,
      endDate: schedule.endDateTime,
      scheduleId: schedule.id,
    };
  });

  // Sort items by start date for consistent ordering
  scheduleItems.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  if (loading) {
    return (
      <div className="grow flex items-center justify-center text-muted-foreground">
        <LoaderCircle className="mr-4 animate-spin" />
      </div>
    );
  }

  if (!classData) {
    return (
      <div className="grow flex flex-col items-center justify-center text-muted-foreground">
        <h2 className="text-lg font-medium mb-2">Class not found</h2>
        <p className="mb-4">The class you're looking for doesn't exist.</p>
        <Link to={"/classes"} className={buttonVariants({ variant: "outline" })}>
          <ChevronLeft className="mr-2" size={16} />
          Back to classes
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 max-w-5xl w-full mx-auto bg-background p-5">
      <h1>{classData.name}</h1>
      <div className="flex justify-between items-end mt-[-0.25rem]">
        <div className="flex gap-4 items-center text-sm text-muted-foreground">
          <Category name="Location" value={classData.location} icon={<MapPinned size={16} />} />
          <Category name="Curriculum" value={curriculum?.name} icon={<Notebook size={16} />} />
          <Category name="Level" value={curriculum?.level} icon={<BarChart size={16} />} />
          <Category name="Period" value={classData.period} icon={<Calendar size={16} />} />
        </div>
        <Link to={"/classes"} className={buttonVariants({ variant: "link" }) + " h-fit px-0!"}>
          <ChevronLeft /> Back to classes
        </Link>
      </div>
      <hr />
      <LessonStatus allLessons={scheduleItems} />
      <StudentTable students={classData.students} />
      <LessonsList lessons={scheduleItems} />
    </div>
  );
};

export default Class;

import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { MapPinned, BarChart, Notebook, CalendarClock } from "lucide-react";
import Category from "./Category";
import React from 'react';

/**
 * Component for displaying a class card with relevant information
 * @param {Object} props
 * @param {Object} props.classData - Class data object
 * @param {Object} props.curriculum - Curriculum data object
 */
const ClassCard = React.memo(({ classData, curriculum }) => {
  const nextUpcomingEvent = classData.sessions ? classData.sessions.find((session) => new Date(session.start_time) > new Date()) : null;

  return (
    <div className="flex flex-col gap-2">
      <Link to={`${classData.id}`} className={buttonVariants({ variant: "outline" }) + " flex flex-col items-start h-fit p-4 gap-2! rounded-xl capitalize"}>
        <h3>{curriculum?.program_type}</h3>
        <div className="flex gap-4 items-center text-sm text-muted-foreground">
          <Category name="Location" value={classData.location ? classData.location.name : "IM DA BIGGEST BIRD"} icon={<MapPinned size={16} />} />
          <Category
            name="Duration"
            value={
              new Date(classData.sessions[0].start_time).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) + " - " + new Date(classData.sessions[classData.sessions.length - 1].end_time).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }
            icon={<CalendarClock size={16} />}
          />
          <Category name="Level" value={curriculum?.difficulty_level} icon={<BarChart size={16} />} />
        </div>
      </Link>
    </div>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.classData.id === nextProps.classData.id &&
    prevProps.curriculum?.id === nextProps.curriculum?.id
  );
});

export default ClassCard;

import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Circle, Clock, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Component for displaying a list of camp activities with their status
 * @param {Object} props
 * @param {Array} props.activities - Array of activity objects
 */
const ActivityList = ({ activities }) => {
  // Group activities by day
  const activitiesByDay = groupActivitiesByDay(activities);
  const hasMultipleDays = Object.keys(activitiesByDay).length > 1;

  return (
    <Card className={"h-fit p-4 gap-0 grow"}>
      <h3 className="mb-2">Camp Activities</h3>
      {activities.length < 1 ? (
        <span className="text-muted-foreground">No activities available</span>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(activitiesByDay).map(([day, dayActivities]) => (
          <div key={day} className="flex flex-col gap-1">
            {hasMultipleDays && (
              <div className="flex items-center gap-2 mb-2 mt-4 border-b pb-2">
                <Calendar size={16} className="text-primary" />
                <span className="font-medium">{formatDate(day)}</span>
              </div>
            )}

            {dayActivities.map((activity, index) => (
              <ActivityItem key={activity.id || index} activity={activity} index={index} />
            ))}
          </div>
          ))}
        </div>
      )}
    </Card>
  );
};

/**
 * Groups activities by their day (date part of startDate)
 * @param {Array} activities - List of activities to group
 * @returns {Object} Object with dates as keys and arrays of activities as values
 */
function groupActivitiesByDay(activities) {
  const grouped = {};

  activities.forEach((activity) => {
    // Extract just the date part (YYYY-MM-DD) from the startDate
    const date = new Date(activity.startDate);
    const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }

    grouped[dateKey].push(activity);
  });

  return grouped;
}

/**
 * Formats a date string (YYYY-MM-DD) into a readable format
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Individual activity item component
 */
const ActivityItem = ({ activity, index }) => {
  const [status, setStatus] = useState("upcoming");

  // Update the status whenever the component renders or timer triggers
  useEffect(() => {
    updateActivityStatus();

    // Check status every second for active activities
    const timer = setInterval(updateActivityStatus, 1000);
    return () => clearInterval(timer);
  }, [activity.startDate, activity.endDate]);

  // Function to determine the current status
  function updateActivityStatus() {
    const now = Date.now();
    const startDate = new Date(activity.startDate).getTime();
    const endDate = new Date(activity.endDate).getTime();

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

  // Get the appropriate icon based on status and category
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "text-success";
      case "active":
        return "text-warning";
      default:
        return "text-muted-foreground";
    }
  };

  // Format the activity time
  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Link to={"#"} className={buttonVariants({ variant: "outline" }) + " text-start justify-start mb-1 w-full"}>
      <div className="flex items-center gap-2 w-full">
        <Circle className={getStatusColor()} size={8} />
        <span className="flex-1">{activity.name}</span>
        <span className="text-xs text-muted-foreground flex items-center gap-2 ml-2">
          <Clock size={12} />
          {formatTime(activity.startDate)} - {formatTime(activity.endDate)}
        </span>
      </div>
    </Link>
  );
};

export default ActivityList;

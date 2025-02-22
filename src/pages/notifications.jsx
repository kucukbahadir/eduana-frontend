import { Button, buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { generateRandomNotifications } from "@/data/notifications";
import { BadgeCheck, Book, ChartNoAxesCombined, Construction, Eye, EyeClosed, FilterX, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const randomNotifications = generateRandomNotifications(5);

function Notifications() {
  const [filteredBy, setFilteredBy] = useState(undefined);
  const [notifications, setNotifications] = useState(
    [...randomNotifications].sort((a, b) => b.date - a.date)
  );

  useEffect(() => {
    setNotifications(() => {
      let filtered = [...randomNotifications];
      
      switch (filteredBy) {
        case "feedback":
          return filterByType(filtered, "feedback");
        case "course":
          return filterByType(filtered, "course");
        case "certificate":
          return filterByType(filtered, "certificate");
        case "maintenance":
          return filterByType(filtered, "maintenance");
        case "read":
          return filtered.filter((notification) => notification.read);
        case "unread":
          return filtered.filter((notification) => !notification.read);
        default:
          return randomNotifications;
      }
    });
  }, [filteredBy]);

  function filterByType(a, type) {
    return a.filter((notification) => notification.type === type);
  }

  function refreshNotifications() {
    setNotifications(null);
    setTimeout(() => {
      setFilteredBy(undefined);
      const newNotifications = generateRandomNotifications(5);
      setNotifications(newNotifications.sort((a, b) => b.date - a.date));
    }, 1000);
  }

  function markAllAsViewed() {
    setNotifications((prev) => {
      return prev.map((notification) => {
        return { ...notification, read: true };
      });
    });
  }

  return (
    <div className="flex flex-col gap-2.5 py-4 max-w-2xl mx-auto">
      <h1>Notifications</h1>

      <div className="flex w-full gap-2.5 mt-2.5">
        <Select value={filteredBy || ""} onValueChange={(value) => setFilteredBy(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Type</SelectLabel>
              <SelectItem value="feedback">
                <ChartNoAxesCombined /> Feedback
              </SelectItem>
              <SelectItem value="course">
                <Book /> Course
              </SelectItem>
              <SelectItem value="certificate">
                <BadgeCheck /> Certificate
              </SelectItem>
              <SelectItem value="maintenance">
                <Construction /> Maintenance
              </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="read">
                <Eye /> Read
              </SelectItem>
              <SelectItem value="unread">
                <EyeClosed /> Unread
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {filteredBy && (
          <Button variant="outline" className={"shrink-0"} onClick={() => setFilteredBy(undefined)} size={"icon"}>
            <FilterX />
          </Button>
        )}
        <Button variant={"primary"} onClick={refreshNotifications}>
          <RefreshCcw /> Refresh
        </Button>
        <Button variant="default" onClick={markAllAsViewed}>
          <Eye /> Mark all as viewed
        </Button>
      </div>

      {!notifications
        ? Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-muted-foreground/20 rounded-md w-full h-[110px] animate-pulse" />
          ))
        : notifications.map((notification, index) => (
            <NotificationCard key={index} notification={notification} />
          ))}

      {notifications && notifications.length === 0 && (
        <small className="text-muted-foreground text-center mt-5">You're all caught up!</small>
      )}
    </div>
  );
}

function NotificationCard({ notification }) {
  const date = notification.date.toLocaleString();

  return (
    <Link
      to="#"
      className={
        buttonVariants({ variant: "ghost" }) +
        " transition-colors flex flex-col items-start gap-4 p-3 text-start h-fit rounded-md shadow border border-border"
      }
    >
      <div className="flex gap-6">
        {(() => {
          switch (notification.type) {
            case "course":
              return <NewCourseNotificationContent user={notification.user} content={notification.content} />;
            case "certificate":
              return <NewCertificateNotificationContent user={notification.user} content={notification.content} />;
            case "feedback":
              return <FeedbackReceivedNotificationContent user={notification.user} content={notification.content} />;
            case "maintenance":
              return <MaintenanceNotificationContent date={date} />;
            default:
              return null;
          }
        })()}
      </div>
      <small className="text-muted-foreground font-normal text-xs">
        {date} - {notification.read ? "Viewed" : "Unviewed"}
      </small>
    </Link>
  );
}

function NewCourseNotificationContent({ user, content }) {
  return (
    <>
      <div className="flex shrink-0 justify-center items-center size-12 aspect-square rounded-md bg-accent">
        <Book className="size-6" />
      </div>
      <p className="flex flex-col mt-0.5 font-light w-full text-pretty">
        <strong className="text-base">New course available</strong>
        {content} is now open for {user}
      </p>
    </>
  );
}

function NewCertificateNotificationContent({ user, content }) {
  return (
    <>
      <div className="flex shrink-0 items-center justify-center size-12 aspect-square rounded-md bg-accent">
        <BadgeCheck className="size-6" />
      </div>
      <p className="flex flex-col mt-0.5 font-light w-full text-pretty">
        <strong className="text-base">Certificate unlocked!</strong>
        {user} received a new certificate for: {content}
      </p>
    </>
  );
}

function FeedbackReceivedNotificationContent({ user, content }) {
  return (
    <>
      <div className="flex shrink-0 items-center justify-center size-12 aspect-square rounded-md bg-accent">
        <ChartNoAxesCombined className="size-6" />
      </div>
      <p className="flex flex-col mt-0.5 font-light w-full text-pretty">
        <strong className="text-base">Feedback received</strong>
        {user} received new feedback on: {content}
      </p>
    </>
  );
}

function MaintenanceNotificationContent({ date }) {
  return (
    <>
      <div className="flex shrink-0 items-center justify-center size-12 aspect-square rounded-md bg-accent">
        <Construction className="size-6" />
      </div>
      <p className="flex flex-col mt-0.5 font-light w-full text-pretty">
        <strong className="text-base">Scheduled maintenance</strong>
        We are performing maintenance on our servers. You may experience downtime.
      </p>
    </>
  );
}

export default Notifications;

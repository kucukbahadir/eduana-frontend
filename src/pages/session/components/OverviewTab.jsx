import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import SectionHeader from "./SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart, CalendarClock, Clock, FileText, Gamepad, ListCheck, MapPinned, Notebook, NotebookPen, Paperclip, Presentation, School, Timer, Users } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router";

const OverviewTab = React.memo(({ session, classData, curriculum, students }) => {
  const [teacherNotes, setTeacherNotes] = useState("");
  
  return (
    <div className="flex gap-1 bg-muted p-1 rounded-lg">
      <div className="flex flex-col w-full gap-1">
        <LearningObjectives learningObjectives={session?.lesson?.learning_objectives} />
        <Keywords keywords={session?.lesson?.keywords} />
        <ResourcesList resources={session?.lesson?.resources} />
        <TeacherNotes teacherNotes={teacherNotes} setTeacherNotes={setTeacherNotes} />
      </div>
      <LessonSidebar session={session} classData={classData} curriculum={curriculum} students={students} />
    </div>
  );
});

const LearningObjectives = React.memo(({ learningObjectives }) => (
  <Card className={"p-6 gap-6 rounded-md"}>
    <SectionHeader icon={ListCheck} title="Learning Objectives" />
    <Accordion type="multiple" collapsible={"true"} className="w-full my-[-1rem]">
      {learningObjectives?.map((obj, index) => (
        <AccordionItem key={obj.id || index} value={`objective-${index}`}>
          <AccordionTrigger>{obj.objective}</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside pl-4">
              {obj.descriptions.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </Card>
));

const Keywords = React.memo(({ keywords }) => (
  <Card className={"p-6 gap-6 rounded-md"}>
    <SectionHeader icon={FileText} title="Keywords" />
    <ol className="list-decimal list-outside space-y-1 ml-4">
      {keywords?.map((keywordItem, index) => (
        <li key={keywordItem.keyword.id || index} className="text-sm">
          <strong className="text-sm capitalize">{keywordItem.keyword.name}</strong>: {keywordItem.keyword.description}
        </li>
      ))}
    </ol>
  </Card>
));

const ResourcesList = React.memo(({ resources }) => {
  if (!resources || resources.length === 0) return null;

  const getResourceIcon = (type) => {
    switch (type) {
      case "SLIDES":
        return Presentation;
      case "KAHOOT":
        return Gamepad;
      default:
        return Paperclip;
    }
  };

  const getResourceTitle = (type) => {
    switch (type) {
      case "SLIDES":
        return "Presentation Slides";
      case "KAHOOT":
        return "Kahoot Quiz";
      default:
        return "Resource";
    }
  };

  return (
    <Card className={"p-6 gap-6 rounded-md"}>
      <SectionHeader icon={Paperclip} title="Resources" />
      <div className="grid grid-cols-2 gap-4">
        {resources.map((resource, index) => {
          const ResourceIcon = getResourceIcon(resource.type);
            return (
              <Link
                key={resource.id || index}
                to={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline" }) + " flex flex-col text-lg! font-bold! h-fit py-6 items-center gap-0!"}
              >
                <ResourceIcon className="size-6 mb-2" />
                {getResourceTitle(resource.type)}
                <span className="text-sm font-light text-muted-foreground">{resource.language}</span>
              </Link>
            );
        })}
      </div>
    </Card>
  );
});

const TeacherNotes = React.memo(({ teacherNotes, setTeacherNotes }) => (
  <Card className={"p-6 gap-6 rounded-md"}>
    <SectionHeader icon={NotebookPen} title="Notes" />
    <Textarea 
      placeholder="Add your lesson notes here..." 
      value={teacherNotes} 
      onChange={(e) => setTeacherNotes(e.target.value)} 
      className="min-h-28" 
    />
  </Card>
));

const LessonSidebar = React.memo(({ session, classData, curriculum, students }) => {
  const lessonItems = [
    {
      icon: CalendarClock,
      label: "Date",
      value: new Date(session.start_time).toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
    },
    { icon: Timer, label: "Duration", value: `${Math.ceil((new Date(session.end_time) - new Date(session.start_time)) / (1000 * 60))} minutes` },
    { icon: Clock, label: "Start Time", value: new Date(session.start_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
    { icon: Clock, label: "End Time", value: new Date(session.end_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
  ];

  const classItems = [
    { icon: School, label: "Name", value: classData?.name },
    { icon: MapPinned, label: "Location", value: classData?.location?.name },
    { icon: Users, label: "Students", value: students?.length || 0 },
  ];

  const curriculumItems = [
    { icon: Notebook, label: "Name", value: curriculum?.program_type },
    { icon: BarChart, label: "Level", value: curriculum?.difficulty_level },
  ];

  return (
    <Card className={"p-6 gap-4 rounded-md text-nowrap w-full max-w-xs"}>
      <InfoSection title="Lesson" items={lessonItems} />
      <InfoSection title="Class" items={classItems} />
      <InfoSection title="Curriculum" items={curriculumItems} />
    </Card>
  );
});

const InfoSection = React.memo(({ title, items }) => (
  <>
    <strong>{title}</strong>
    <ul className="list-none list-inside text-sm space-y-4 mb-4">
      {items.map((item, index) => (
        <InfoListItem key={index} icon={item.icon} label={item.label} value={item.value} />
      ))}
    </ul>
  </>
));

const InfoListItem = React.memo(({ icon: Icon, label, value, size = 18 }) => (
  <li className="flex items-center gap-4">
    <Icon size={size} />
    <div className="flex flex-col text-wrap">
      <strong className="text-sm">{label}</strong>
      {value || "N/A"}
    </div>
  </li>
));

export default OverviewTab;
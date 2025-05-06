import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  BookOpen,
  Users,
  Clock,
  CheckCircle,
  FileText,
  Star,
  ChevronRight,
  Notebook,
  BarChart,
  ChevronLeft,
  CalendarClock,
  Calendar,
  MapPinned,
  ListCheck,
  NotebookPen,
  Paperclip,
  Presentation,
  Gamepad,
  School,
  ChartNoAxesColumn,
  LoaderCircle,
} from "lucide-react";

// Temporary mock data - will come from API in production
import { classesData, curriculumData, lessonsData, scheduleData } from "@/pages/class/data.js";

// Rating criteria for student evaluation
const evaluationCriteria = [
  { id: "participation", name: "Participation" },
  { id: "understanding", name: "Understanding" },
  { id: "collaboration", name: "Collaboration" },
  { id: "problemSolving", name: "Problem Solving" },
  { id: "completion", name: "Task Completion" },
];

// Reusable info list item component
const InfoListItem = ({ icon: Icon, label, value, size = 18 }) => (
  <li className="flex items-center gap-4">
    <Icon size={size} />
    <div className="flex flex-col text-wrap">
      <strong className="text-sm">{label}</strong>
      {value || "N/A"}
    </div>
  </li>
);

// Section header component
const SectionHeader = ({ icon: Icon, title, subtitle = null }) => (
  <div className="flex items-center gap-4">
    <Icon />
    <strong className="flex flex-col">
      {title}
      {subtitle && <span className="text-sm font-normal text-muted-foreground">{subtitle}</span>}
    </strong>
  </div>
);

// Resource card component
const ResourceCard = ({ icon: Icon, title, language }) => (
  <Link to={"#"} className={buttonVariants({ variant: "outline" }) + " flex flex-col text-lg! font-bold! h-fit py-6 items-center gap-0!"}>
    <Icon className="size-6 mb-2" />
    {title}
    <span className="text-sm font-light text-muted-foreground">{language}</span>
  </Link>
);

// Component for displaying learning objectives section
const LearningObjectives = ({ learningObjectives }) => (
  <Card className={"p-6 gap-6 rounded-md"}>
    <SectionHeader icon={ListCheck} title="Learning Objectives" />
    <Accordion type="multiple" collapsible={"true"} className="w-full my-[-1rem]">
      {learningObjectives?.map((obj, index) => (
        <AccordionItem key={index} value={`objective-${index}`}>
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
);

// Component for displaying keywords section
const Keywords = ({ keywords }) => (
  <Card className={"p-6 gap-6 rounded-md"}>
    <SectionHeader icon={FileText} title="Keywords" />
    <ol className="list-decimal list-outside space-y-1 ml-4">
      {keywords?.map((keyword, index) => (
        <li key={index} className="text-sm">
          <strong className="text-sm">{keyword.term}</strong>: {keyword.explanation}
        </li>
      ))}
    </ol>
  </Card>
);

// Component for displaying resources section
const ResourcesList = () => (
  <Card className={"p-6 gap-6 rounded-md"}>
    <SectionHeader icon={Paperclip} title="Resources" />
    <div className="grid grid-cols-2 gap-4">
      <ResourceCard icon={Presentation} title="Presentation Slides" language="English" />
      <ResourceCard icon={Presentation} title="Presentation Slides" language="Dutch" />
      <ResourceCard icon={Gamepad} title="Kahoot Quiz" language="English" />
      <ResourceCard icon={Gamepad} title="Kahoot Quiz" language="Dutch" />
    </div>
  </Card>
);

// Component for teacher notes section
const TeacherNotes = ({ teacherNotes, setTeacherNotes }) => (
  <Card className={"p-6 gap-6 rounded-md"}>
    <SectionHeader icon={NotebookPen} title="Notes" />
    <Textarea placeholder="Add your lesson notes here..." value={teacherNotes} onChange={(e) => setTeacherNotes(e.target.value)} className="min-h-28" />
  </Card>
);

// Info section component with title and items
const InfoSection = ({ title, items }) => (
  <>
    <strong>{title}</strong>
    <ul className="list-none list-inside text-sm space-y-4 mb-4">
      {items.map((item, index) => (
        <InfoListItem key={index} icon={item.icon} label={item.label} value={item.value} />
      ))}
    </ul>
  </>
);

// Component for the sidebar with lesson and class info
const LessonSidebar = ({ lesson, schedule, classData, curriculum, students, onStartLesson }) => {
  // Prepare data for each section
  const lessonItems = [
    { icon: CalendarClock, label: "Date", value: new Date(schedule.startDate).toLocaleDateString() },
    { icon: Clock, label: "Start Time", value: new Date(schedule.startDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
    { icon: Clock, label: "End Time", value: new Date(schedule.endDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
  ];

  const classItems = [
    { icon: School, label: "Name", value: classData.name },
    { icon: MapPinned, label: "Location", value: classData.location },
    { icon: Users, label: "Students", value: students.length },
    {
      icon: CalendarClock,
      label: "Start Date",
      value: new Date(scheduleData.find((sped) => parseInt(classData.id, 10) === sped.classId).startDate).toLocaleDateString(),
    },
    { icon: CalendarClock, label: "End Date", value: new Date(schedule.endDate).toLocaleDateString() },
  ];

  const curriculumItems = [
    { icon: Notebook, label: "Name", value: curriculum?.name },
    { icon: BarChart, label: "Level", value: curriculum?.level },
    { icon: Calendar, label: "Period", value: classData.period },
  ];

  return (
    <Card className={"p-6 gap-4 rounded-md text-nowrap w-full max-w-xs"}>
      <InfoSection title="Lesson" items={lessonItems} />
      <InfoSection title="Class" items={classItems} />
      <InfoSection title="Curriculum" items={curriculumItems} />

      <div className="flex items-end h-full">
        <Button variant={"primary"} className={"rounded-full w-full"}>
          <ChevronRight /> Start Taking Attendance
        </Button>
      </div>
    </Card>
  );
};

// Component for the Overview tab content
const OverviewTab = ({ lesson, schedule, classData, curriculum, students, teacherNotes, setTeacherNotes }) => (
  <div className="flex gap-1 bg-muted p-1 rounded-lg">
    <div className="flex flex-col gap-1">
      <LearningObjectives learningObjectives={lesson?.learningObjectives} />
      <Keywords keywords={lesson?.keywords} />
      <ResourcesList />
      <TeacherNotes teacherNotes={teacherNotes} setTeacherNotes={setTeacherNotes} />
    </div>
    <LessonSidebar lesson={lesson} schedule={schedule} classData={classData} curriculum={curriculum} students={students} />
  </div>
);

// Reusable switch component for attendance
const AttendanceSwitch = ({ checked, onChange, disabled = false, variant = "success" }) => (
  <Switch checked={checked} onCheckedChange={onChange} disabled={disabled} className={`data-[state=checked]:bg-${variant}! mx-auto`} />
);

// Component for attendance table
const AttendanceTable = ({ students, attendance, handleToggleAttendance }) => (
  <Card className={"p-6 gap-4 rounded-md w-full"}>
    <SectionHeader icon={ListCheck} title="Attendance" subtitle={`${Object.values(attendance).filter((a) => a.present).length}/${students.length} Present`} />
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          <TableHead>Language</TableHead>
          <TableHead>Diet Restrictions</TableHead>
          <TableHead>Allergies</TableHead>
          <TableHead>Experience</TableHead>
          <TableHead>Contact Number</TableHead>
          <TableHead className="w-12 text-center">Present</TableHead>
          <TableHead className="w-12 text-center">Late</TableHead>
          <TableHead className="w-12 text-center">Excused</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.language}</TableCell>
            <TableCell>{student.dietaryRestrictions}</TableCell>
            <TableCell>{student.allergies}</TableCell>
            <TableCell>{student.previousExperience}</TableCell>
            <TableCell>{student.parentPhone}</TableCell>
            <TableCell className="text-center">
              <AttendanceSwitch checked={attendance[student.id]?.present} onChange={() => handleToggleAttendance(student.id, "present")} variant="success" />
            </TableCell>
            <TableCell className="text-center">
              <AttendanceSwitch
                checked={attendance[student.id]?.late}
                onChange={() => handleToggleAttendance(student.id, "late")}
                disabled={!attendance[student.id]?.present}
                variant="destructive"
              />
            </TableCell>
            <TableCell className="text-center">
              <AttendanceSwitch
                checked={attendance[student.id]?.excused}
                onChange={() => handleToggleAttendance(student.id, "excused")}
                disabled={!attendance[student.id]?.present}
                variant="warning"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

// Rating selector component
const RatingSelector = ({ value, onChange }) => (
  <Select value={String(value || 3)} onValueChange={onChange}>
    <SelectTrigger className="h-6 w-16 rounded-full shadow-none bg-muted">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      {[1, 2, 3, 4, 5].map((rating) => (
        <SelectItem key={rating} value={String(rating)}>
          {rating}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

// Component for student evaluations
const EvaluationTable = ({ students, attendance, evaluations, handleEvaluationChange }) => {
  const presentStudents = students.filter((student) => attendance[student.id]?.present);
  if (presentStudents.length === 0) return null; // Return null if no students are present

  return (
    <Card className={"p-6 gap-4 rounded-md w-full"}>
      <SectionHeader icon={Star} title="Rating" subtitle="Scale: 1 to 5" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            {evaluationCriteria.map((criteria) => (
              <TableHead key={criteria.id} className={"text-center"}>
                {criteria.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {presentStudents.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              {evaluationCriteria.map((criteria) => (
                <TableCell key={criteria.id} className={"text-center"}>
                  <div className="flex items-center justify-center">
                    <RatingSelector
                      value={evaluations[student.id]?.[criteria.id]}
                      onChange={(value) => handleEvaluationChange(student.id, criteria.id, value)}
                    />
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

// Component for the Attendance tab content
const AttendanceTab = ({ students, attendance, evaluations, handleToggleAttendance, handleEvaluationChange }) => (
  <div className="flex flex-col gap-1 bg-muted p-1 rounded-lg">
    <AttendanceTable students={students} attendance={attendance} handleToggleAttendance={handleToggleAttendance} />
    <EvaluationTable students={students} attendance={attendance} evaluations={evaluations} handleEvaluationChange={handleEvaluationChange} />
  </div>
);

// Stat card component
const StatCard = ({ value, label }) => (
  <div className="flex flex-col gap-2 items-center justify-center bg-muted rounded-lg p-10">
    <strong className="text-5xl">{value}</strong>
    <span className="font-light">{label}</span>
  </div>
);

// Component for the statistics cards in Summary tab
const StatisticsCards = ({ students, attendance, evaluations }) => {
  // Calculate average rating
  const calculateAverageRating = () => {
    let sum = 0;
    let count = 0;
    Object.values(evaluations).forEach((studentEvals) => {
      // Only include evaluations for students who are present
      if (attendance[Object.keys(evaluations).find((id) => evaluations[id] === studentEvals)]?.present) {
        Object.values(studentEvals).forEach((rating) => {
          sum += rating;
          count++;
        });
      }
    });
    return count > 0 ? (sum / count).toFixed(1) : "N/A";
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard value={`${Object.values(attendance).filter((a) => a.present).length}/${students.length}`} label="Students Attended" />
      <StatCard value={calculateAverageRating()} label="Average Rating" />
    </div>
  );
};

// Component for the evaluations summary table
const SummaryEvaluationTable = ({ students, attendance, evaluations }) => {
  // Calculate student average
  const calculateStudentAverage = (studentId) => {
    const studentEvals = evaluations[studentId] || {};
    const ratings = Object.values(studentEvals);
    if (ratings.length === 0) return "N/A";
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          {evaluationCriteria.map((criteria) => (
            <TableHead key={criteria.id}>{criteria.name}</TableHead>
          ))}
          <TableHead>Average</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students
          .filter((student) => attendance[student.id]?.present)
          .map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              {evaluationCriteria.map((criteria) => (
                <TableCell key={criteria.id}>{evaluations[student.id]?.[criteria.id] || "N/A"}</TableCell>
              ))}
              <TableCell>{calculateStudentAverage(student.id)}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

// Component for the Summary tab content
const SummaryTab = ({ students, attendance, evaluations }) => (
  <div className="flex flex-col gap-1 bg-muted p-1 rounded-lg">
    <Card className={"p-6 gap-4 rounded-md w-full"}>
      <SectionHeader icon={CheckCircle} title="Statistics" />
      <div className="grid gap-6">
        <StatisticsCards students={students} attendance={attendance} evaluations={evaluations} />
        <SummaryEvaluationTable students={students} attendance={attendance} evaluations={evaluations} />
      </div>
    </Card>
  </div>
);

// Main component
const LessonView = () => {
  const { lessonId, classId } = useParams();
  const classData = classesData.find((classData) => classData.id === parseInt(classId, 10));
  const curriculum = classData.curriculumId ? curriculumData.find((curriculum) => curriculum.id === classData.curriculumId) : null;
  const students = classData.students || [];
  const schedule = scheduleData.find((schedule) => schedule.classId === parseInt(classId, 10) && schedule.lessonId === parseInt(lessonId, 10));

  // States for the entire lesson flow
  const [activeTab, setActiveTab] = useState("overview");
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  // Attendance state
  const [attendance, setAttendance] = useState({});

  // Evaluation state
  const [evaluations, setEvaluations] = useState({});

  // Notes state
  const [teacherNotes, setTeacherNotes] = useState("");

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchData = async () => {
      try {
        // Simulate API call delay
        setTimeout(() => {
          const lessonData = lessonsData.find((l) => l.id === parseInt(lessonId, 10));

          if (!lessonData) {
            setLoading(false);
            return;
          }

          setLesson(lessonData);

          // Initialize attendance state
          // Note: Data is randomly generated for demo purposes
          const initialAttendance = {};
          students.forEach((student) => {
            const present = faker.datatype.boolean();
            const late = present === true ? faker.datatype.boolean() : false; // Only allow late if present
            const excused = present === true ? faker.datatype.boolean() : false; // Only allow excused if present

            initialAttendance[student.id] = { present, late, excused };
          });
          setAttendance(initialAttendance);

          // Initialize evaluations state
          const initialEvaluations = {};
          students.forEach((student) => {
            initialEvaluations[student.id] = {};
            evaluationCriteria.forEach((criteria) => {
              initialEvaluations[student.id][criteria.id] = faker.number.int({ min: 1, max: 5 }); // In the future make this default to 3 (average) for QoL
            });
          });
          setEvaluations(initialEvaluations);

          setLoading(false);
        }, 800);
      } catch (err) {
        console.error("Error loading lesson data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [lessonId, classId, students]);

  const handleToggleAttendance = (studentId, field) => {
    setAttendance((prev) => {
      // Create updated student attendance state
      const updatedState = {
        ...prev[studentId],
        [field]: !prev[studentId][field],
      };
      
      // If we're toggling present to false, also set late and excused to false
      if (field === 'present' && !updatedState.present) {
        updatedState.late = false;
        updatedState.excused = false;
      }
      
      return {
        ...prev,
        [studentId]: updatedState
      };
    });
  };

  const handleEvaluationChange = (studentId, criteriaId, value) => {
    setEvaluations((prev) => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [criteriaId]: parseInt(value, 10),
      },
    }));
  };

  if (loading) {
    return (
      <div className="grow flex items-center justify-center text-muted-foreground">
        <LoaderCircle className="mr-4 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto p-5">
      {/* Lesson header */}
      <div className="flex items-end justify-between">
        <h1>{lesson.name}</h1>
        <Link to={"/classes/" + classData.id} className={buttonVariants({ variant: "link" }) + " h-fit px-0!"}>
          <ChevronLeft /> Back to class
        </Link>
      </div>
      <hr />

      {/* Main tabbed content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">
            <BookOpen className="mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="attendance">
            <Users className="mr-2" />
            Students
          </TabsTrigger>
          <TabsTrigger value="summary">
            <ChartNoAxesColumn className="mr-2" />
            Summary
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <OverviewTab
            lesson={lesson}
            schedule={schedule}
            classData={classData}
            curriculum={curriculum}
            students={students}
            teacherNotes={teacherNotes}
            setTeacherNotes={setTeacherNotes}
          />
        </TabsContent>

        {/* Attendance Tab */}
        <TabsContent value="attendance">
          <AttendanceTab
            students={students}
            attendance={attendance}
            evaluations={evaluations}
            handleToggleAttendance={handleToggleAttendance}
            handleEvaluationChange={handleEvaluationChange}
          />
        </TabsContent>

        {/* Summary Tab */}
        <TabsContent value="summary">
          <SummaryTab students={students} attendance={attendance} evaluations={evaluations} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LessonView;

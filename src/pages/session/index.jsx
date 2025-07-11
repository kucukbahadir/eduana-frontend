import React, { useState, useMemo, lazy, Suspense } from "react";
import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, ChevronLeft, ChartNoAxesColumn, LoaderCircle, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const LazyOverviewTab = lazy(() => import("./components/OverviewTab"));
const LazyAttendanceTab = lazy(() => import("./components/AttendanceTab"));
const LazyEvaluationTab = lazy(() => import("./components/EvaluationTab"));
const LazySummaryTab = lazy(() => import("./components/SummaryTab"));

const lessonTabs = [
  { id: "overview", name: "Overview", icon: BookOpen },
  { id: "attendance", name: "Attendance", icon: Users },
  { id: "evaluations", name: "Evaluations", icon: Star },
  { id: "summary", name: "Summary", icon: ChartNoAxesColumn },
];

const LessonView = () => {
  const { sessionId, classId } = useParams();

  const {
    data: session,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["session", sessionId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/sessions/${sessionId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch session data");
      }
      return response.json();
    },
    enabled: !!sessionId,
  });

  const { data: classData } = useQuery({
    queryKey: ["class", classId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/classes/${classId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch class data");
      }
      return response.json();
    },
    enabled: !!classId,
  });

  const curriculum = classData?.curriculum;
  const students = useMemo(
    () =>
      classData?.enrollments?.map((enrollment) => ({
        id: enrollment.user.id,
        name: enrollment.user.full_name,
        age: enrollment.user.age,
        language: enrollment.user.language_preference,
        dietaryRestrictions: enrollment.user.diet_restrictions,
        allergies: null,
        previousExperience: enrollment.user.experience,
        parentPhone: enrollment.user.parent_phone_number,
      })) || [],
    [classData?.enrollments]
  );

  const [activeTab, setActiveTab] = useState("overview");

  const { initialAttendanceData, initialEvaluationData } = useMemo(() => {
    if (!session || !students.length) {
      return { 
        initialAttendanceData: {}, 
        initialEvaluationData: {} 
      };
    }

    const initialAttendance = {};
    
    if (session.attendances && session.attendances.length > 0) {
      session.attendances.forEach((attendanceRecord) => {
        initialAttendance[attendanceRecord.user.id] = {
          id: attendanceRecord.id,
          present: attendanceRecord.present || false,
          late: attendanceRecord.late || false,
          excused: attendanceRecord.excused || false,
          note: attendanceRecord.note,
        };
      });
      
      students.forEach((student) => {
        if (!initialAttendance[student.id]) {
          initialAttendance[student.id] = {
            id: null,
            present: false,
            late: false,
            excused: false,
            note: null,
          };
        }
      });
    } else {
      students.forEach((student) => {
        initialAttendance[student.id] = {
          id: null,
          present: false,
          late: false,
          excused: false,
          note: null,
        };
      });
    }

    let initialEvaluations = {};
    if (session.sessionEvaluations && session.sessionEvaluations.length > 0) {
      session.sessionEvaluations.forEach((evaluation) => {
        initialEvaluations[evaluation.user_id] = {
          participation: evaluation.participation_score,
          understanding: evaluation.understanding_score,
          collaboration: evaluation.collaboration_score,
          problem_solving: evaluation.problem_solving_score,
          task_completion: evaluation.task_completion_score,
        };
      });
    } else {
      students.forEach((student) => {
        initialEvaluations[student.id] = {
          participation: 3,
          understanding: 3,
          collaboration: 3,
          problem_solving: 3,
          task_completion: 3,
        };
      });
    }

    return { 
      initialAttendanceData: initialAttendance, 
      initialEvaluationData: initialEvaluations 
    };
  }, [session, students]);

  if (isLoading) {
    return (
      <div className="grow flex items-center justify-center text-muted-foreground">
        <LoaderCircle className="mr-4 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="grow flex items-center justify-center text-muted-foreground">
        <p>Error loading session data: {error.message}</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="grow flex items-center justify-center text-muted-foreground">
        <p>Session not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto p-5">
      {/* Lesson header */}
      <div className="flex items-end justify-between">
        <h1 className="flex items-center gap-2">
          {session.lesson.title}
        </h1>
        <Link to={"/classes/" + classId} className={buttonVariants({ variant: "link" }) + " h-fit px-0!"}>
          <ChevronLeft /> Back to class
        </Link>
      </div>
      <hr />
      
      {/* Main tabbed content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          {lessonTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.icon && <tab.icon className="mr-2" />}
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoaderCircle className="animate-spin" /></div>}>
            {activeTab === "overview" && (
              <LazyOverviewTab
                session={session}
                classData={classData}
                curriculum={curriculum}
                students={students}
              />
            )}
          </Suspense>
        </TabsContent>

        {/* Attendance Tab */}
        <TabsContent value="attendance">
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoaderCircle className="animate-spin" /></div>}>
            {activeTab === "attendance" && (
              <LazyAttendanceTab
                students={students}
                sessionId={sessionId}
                initialAttendance={initialAttendanceData}
              />
            )}
          </Suspense>
        </TabsContent>

        {/* Evaluations Tab */}
        <TabsContent value="evaluations">
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoaderCircle className="animate-spin" /></div>}>
            {activeTab === "evaluations" && (
              <LazyEvaluationTab
                students={students}
                sessionId={sessionId}
                initialEvaluations={initialEvaluationData}
                attendance={initialAttendanceData}
              />
            )}
          </Suspense>
        </TabsContent>

        {/* Summary Tab */}
        <TabsContent value="summary">
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoaderCircle className="animate-spin" /></div>}>
            {activeTab === "summary" && (
              <LazySummaryTab 
                students={students} 
                attendance={initialAttendanceData} 
                evaluations={initialEvaluationData} 
              />
            )}
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LessonView;

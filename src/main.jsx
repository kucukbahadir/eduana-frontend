import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/home"; // not used for now
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import TabbedLogin from "./pages/login";
import StudentDashboard from "./pages/dashboards/studentDashboard";
import ParentDashboard from "./pages/dashboards/parentDashboard";
import AdminDashboard from "./pages/dashboards/adminDashboard";
import CoordinatorDashboard from "./pages/dashboards/coordinatorDashboard";
import TeacherDashboard from "./pages/dashboards/teacherDashboard";
import CourseOverview from "./pages/courseOverview";
import CourseDetail from "./pages/courseDetail";
import Notifications from "./pages/notifications.jsx";
import NotFound from "./pages/notFound";
import StudentManagement from "@/pages/student/manage/index.jsx";
import Progress from "./pages/parent/progress/index";
import CertificatesOverview from "./pages/parent/certificates";
import LessonPreparation from "@/pages/lessonPrep.jsx";
import StudentEvaluationTable from "@/pages/studentEvaluationPage.jsx";
import Classes from "@/pages/class";
import Class from "@/pages/class/[id]";
import LessonView from "@/pages/lesson/LessonView";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<TabbedLogin />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/parent" element={<ParentDashboard />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/certificates" element={<CertificatesOverview />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/coordinator" element={<CoordinatorDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/courses" element={<CourseOverview />} />
          <Route path="/courses/:id/manage" element={<CourseDetail />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/students/manage" element={<StudentManagement />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:id" element={<Class />} />
          <Route path="/classes/:classId/lessons/:lessonId" element={<LessonView />} />
          <Route path="/lesson-preparation" element={<LessonPreparation />} />
          <Route path="/evaluation" element={<StudentEvaluationTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);

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
import NoPage from "./pages/noPage";
import Progress from "./pages/parent/progress/index";
import StudentManagement from "@/pages/studentMagementPage.jsx";
import ClassManagement from "@/pages/classePage.jsx";
import LessonPreparation from "@/pages/lessonPrep.jsx";
import StudentEvaluationTable from "@/pages/studentEvaluationPage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<TabbedLogin />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/parent" element={<ParentDashboard />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/coordinator" element={<CoordinatorDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/courses" element={<CourseOverview />} />
          <Route path="/courses/:id/manage" element={<CourseDetail />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/students/manage" element={<StudentManagement />} />
          <Route path="/classes/manage" element={<ClassManagement />} />
          <Route path="/lesson-preperation" element={<LessonPreparation/>} />
          <Route path="/evaluation" element={<StudentEvaluationTable/>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>
);

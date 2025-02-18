import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import TabbedLogin from './pages/login.tsx'
import StudentDashboard from './pages/dashboards/studentDashboard.tsx'
import ParentDashboard from './pages/dashboards/parentDashboard.tsx'
import AdminDashboard from './pages/dashboards/adminDashboard.tsx'
import CoordinatorDashboard from './pages/dashboards/coordinatorDashboard.tsx'
import TeacherDashboard from './pages/dashboards/teacherDashboard.tsx'
import NoPage from './noPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <main className="mx-auto w-full max-w-5xl p-4">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<TabbedLogin />} />
          <Route path='/dashboard/student' element={<StudentDashboard />} />
          <Route path='/dashboard/parent' element={<ParentDashboard />} />
          <Route path='/dashboard/admin' element={<AdminDashboard />} />
          <Route path='/dashboard/coordinator' element={<CoordinatorDashboard />} />
          <Route path='/dashboard/teacher' element={<TeacherDashboard />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>,
)

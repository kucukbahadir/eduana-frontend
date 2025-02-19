import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router'
import TabbedLogin from './pages/login'
import StudentDashboard from './pages/dashboards/studentDashboard'
import ParentDashboard from './pages/dashboards/parentDashboard'
import AdminDashboard from './pages/dashboards/adminDashboard'
import CoordinatorDashboard from './pages/dashboards/coordinatorDashboard'
import TeacherDashboard from './pages/dashboards/teacherDashboard'
import NoPage from './pages/noPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <main className="p-4">
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

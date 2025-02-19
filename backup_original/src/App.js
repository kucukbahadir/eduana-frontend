import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
import NoPage from "./pages/noPage";
import StudentDashboard from './pages/dashboards/studentDashboard';
import ParentDashboard from './pages/dashboards/parentDashboard';
import TeacherDashboard from './pages/dashboards/teacherDashboard';
import CoordinatorDashboard from './pages/dashboards/coordinatorDashboard';
import AdminDashboard from './pages/dashboards/adminDashboard';
import './index.css';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <main className="App-main">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dashboard/student" element={<StudentDashboard/>}/>
                    <Route path="/dashboard/parent" element={<ParentDashboard/>}/>
                    <Route path="/dashboard/teacher" element={<TeacherDashboard/>}/>
                    <Route path="/dashboard/coordinator" element={<CoordinatorDashboard/>}/>
                    <Route path="/dashboard/admin" element={<AdminDashboard/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;

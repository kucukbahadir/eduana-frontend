import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import StudentDashboard from "./dashboards/StudentDashboard";

function Dashboard() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100 p-4">
                <nav className="bg-white shadow-md p-4 flex gap-4 mb-4">
                    <Link to="/student" className="text-blue-500">Student</Link>
                </nav>
                <Routes>
                    <Route path="/student" element={<StudentDashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Dashboard;

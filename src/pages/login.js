import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from '../services/userService';

function TabbedLogin() {
    const [activeTab, setActiveTab] = useState("Student");
    const [studentName, setStudentName] = useState("");
    const [studentCode, setStudentCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [educatorRole, setEducatorRole] = useState("");
    const navigate = useNavigate();

    const userService = new UserService();

    const handleLogin = async (event) => {
        event.preventDefault();
        setAlertMessage("");

        const credentials = {
            Student: { name: studentName, code: studentCode },
            Parent: { email: email, password: password },
            Educators: { email: email, password: password, role: educatorRole },
        };

        try {
            let userType = activeTab.toUpperCase();
            const data = await userService.login(userType, credentials[activeTab]);

            if (data.success) {
                navigate(data.redirect);
            } else {
                setAlertMessage(data.message || "Login failed. Please try again.");
            }
        } catch (error) {
            setAlertMessage(error.message || "An unexpected error occurred.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign in to Eduana</h2>
                <div className="flex justify-around mb-6">
                    {["Student", "Parent", "Educators"].map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 font-semibold rounded-lg ${activeTab === tab ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"}`}
                            onClick={() => {
                                setActiveTab(tab);
                                setAlertMessage("");
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div>
                    {activeTab === "Educators" && (
                        <div className="mb-4">
                            {["Admin", "Coordinator", "Teacher"].map((role) => (
                                <button
                                    key={role}
                                    type="button"
                                    className={`px-4 py-2 m-1 font-semibold rounded-lg ${educatorRole === role ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"}`}
                                    onClick={() => setEducatorRole(role)}
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {alertMessage && (
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                        {alertMessage}
                    </div>
                )}
                <form onSubmit={handleLogin}>
                    {activeTab === "Student" ? (
                        <>
                            <label className="block text-gray-600 text-sm mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg mb-4"
                            />
                            <label className="block text-gray-600 text-sm mb-2">Code</label>
                            <input
                                type="text"
                                placeholder="Enter your school code"
                                value={studentCode}
                                onChange={(e) => setStudentCode(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg mb-4"
                            />
                        </>
                    ) : (
                        <>
                            <label className="block text-gray-600 text-sm mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg mb-4"
                            />
                            <label className="block text-gray-600 text-sm mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg mb-4"
                            />
                        </>
                    )}
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="mr-2"
                        />
                        <span className="text-sm text-gray-600">Remember Me</span>
                    </div>
                    <button type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TabbedLogin;
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function TabbedLogin() {
    const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab") || "Student");
    const [studentName, setStudentName] = useState(localStorage.getItem("studentName") || "");
    const [studentCode, setStudentCode] = useState(localStorage.getItem("studentCode") || "");
    const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [password, setPassword] = useState(localStorage.getItem("password") || "");
    const [rememberMe, setRememberMe] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("studentName", studentName);
    }, [studentName]);

    useEffect(() => {
        localStorage.setItem("studentCode", studentCode);
    }, [studentCode]);

    useEffect(() => {
        localStorage.setItem("email", email);
    }, [email]);

    useEffect(() => {
        localStorage.setItem("password", password);
    }, [password]);

    const handleLogin = (event) => {
        event.preventDefault();
        setAlertMessage("");

        const credentials = {
            Student: {name: "Christian", code: "1234", redirect: "/dashboard/student"},
            Parent: {email: "jan@gmail.com", password: "Jan1", redirect: "/dashboard/parent"},
            Educators: {
                admin: {email: "admin@gmail.com", password: "Admin1", redirect: "/dashboard/admin"},
                coordinator: {
                    email: "coordinator@gmail.com",
                    password: "Coordinator1",
                    redirect: "/dashboard/coordinator"
                },
                teacher: {email: "brenda@gmail.com", password: "Brenda1", redirect: "/dashboard/teacher"}
            }
        };

        if (activeTab === "Student") {
            if (studentName === credentials.Student.name && studentCode === credentials.Student.code) {
                navigate(credentials.Student.redirect);
            } else {
                setAlertMessage("Wrong student name or code");
            }
        } else if (activeTab === "Parent") {
            if (email === credentials.Parent.email && password === credentials.Parent.password) {
                navigate(credentials.Parent.redirect);
            } else {
                setAlertMessage("Wrong credentials or password");
            }
        } else if (activeTab === "Educators") {
            const educator = Object.values(credentials.Educators).find((user) => user.email === email && user.password === password);
            if (educator) {
                navigate(educator.redirect);
            } else {
                setAlertMessage("Wrong credentials or password");
            }
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
                                localStorage.setItem("activeTab", tab);
                                setAlertMessage("");
                            }}
                        >
                            {tab}
                        </button>
                    ))}
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

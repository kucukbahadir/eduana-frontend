import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function TabbedLogin() {
    const [activeTab, setActiveTab] = useState("Student");
    const [studentName, setStudentName] = useState("");
    const [studentCode, setStudentCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        if (activeTab === "Student") {
            if (studentName === "Christian" && studentCode === "1234") {
                navigate("/dashboard/student");
            } else {
                setAlertMessage("wrong student name or code");
            }
        } else if (activeTab === "Parent") {
            if (email === "jan@gmail.com" && password === "Jan1") {
                navigate("/dashboard/parent");
            } else {
                setAlertMessage("Wrong parent credentials or password");
            }
        } else if (activeTab === "Teacher") {
            if (email === "brenda@gmail.com" && password === "Brenda1") {
                navigate("/dashboard/teacher");
            } else {
                setAlertMessage("Wrong teacher credentials or password");
            }
        }
    };

    return (<div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6 p-3">Sign in to Eduana</h2>
            <div className="flex justify-around mb-6">

                {['Student', 'Parent', 'Teacher'].map((tab) => (<button
                    key={tab}
                    className={`px-4 py-2 font-semibold rounded-lg ${activeTab === tab ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                    onClick={() => {
                        setActiveTab(tab);
                        setAlertMessage("");
                    }}
                >
                    {tab}
                </button>))}
            </div>
            {alertMessage && (<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                {alertMessage}
            </div>)}
            <form onSubmit={handleLogin}>
                {activeTab === "Student" ? (<>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your name"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">Code</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your school  code"
                            value={studentCode}
                            onChange={(e) => setStudentCode(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
                    >
                        Join the world of code
                    </button>
                </>) : (<>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
                    >
                        Sign In
                    </button>
                </>)}
            </form>
        </div>
    </div>);
}

export default TabbedLogin;

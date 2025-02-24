import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import UserService from "../services/userService";

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
      Educators: { email: email, password: password, role: educatorRole }
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
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className="flex border-border border-1 rounded-md overflow-clip">
        {["Student", "Parent", "Educators"].map((tab, index, array) => (
          <Button
            key={tab}
            className={`py-2 min-w-28 font-semibold border-border rounded-none ${
              index === 0 ? "rounded-l-md" : ""
            } ${index === array.length - 1 ? "rounded-r-md" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setEducatorRole(null); // Reset educator role when switching tabs
              setAlertMessage("");
            }}
            variant={activeTab === tab ? "default" : "outline"}
            size="sm"
          >
            {tab}
          </Button>
        ))}
      </div>

      {activeTab === "Educators" && (
        <div className="flex border-border border-1 rounded-md overflow-clip">
          {["Admin", "Coordinator", "Teacher"].map((role, index, array) => (
            <Button
              key={role}
              className={`py-2 min-w-28 font-semibold border-border rounded-none ${
                index === 0 ? "rounded-l-md" : ""
              } ${index === array.length - 1 ? "rounded-r-md" : ""}`}
              onClick={() => {
                setEducatorRole(role);
                setAlertMessage("");
              }}
              variant={educatorRole === role ? "default" : "outline"}
              size="sm"
            >
              {role}
            </Button>
          ))}
        </div>
      )}

      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-primary font-bold mb-6">Sign in to EduAna</h3>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          {activeTab === "Student" ? (
            <>
              <label className="flex flex-col gap-2 text-primary text-sm">
                Name
                <Input
                  icon={User}
                  type="text"
                  placeholder="Enter your name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="pl-10"
                />
              </label>
              <label className="flex flex-col gap-2 text-primary text-sm">
                Code
                <Input
                  icon={Lock}
                  type="text"
                  placeholder="Enter your school code"
                  value={studentCode}
                  onChange={(e) => setStudentCode(e.target.value)}
                  className="pl-10"
                />
              </label>
            </>
          ) : (
            <>
              <label className="flex flex-col gap-2 text-primary text-sm">
                Email
                <Input
                  icon={Mail}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </label>
              <label className="flex flex-col gap-2 text-primary text-sm">
                Password
                <Input
                  icon={Lock}
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                />
              </label>
            </>
          )}
          <div className="flex gap-2 items-center">
            <Checkbox checked={rememberMe} onCheckedChange={() => setRememberMe(!rememberMe)} />
            <span className="text-sm text-primary">Remember Me</span>
          </div>
          <Button type="submit" className="w-full" size="lg">
            Sign In
          </Button>
          {alertMessage && (
            <div className="text-sm text-destructive rounded-lg" role="alert">
              {alertMessage}
            </div>
          )}
        </form>
      </div>
    </div>

  )
  ;
}

export default TabbedLogin;

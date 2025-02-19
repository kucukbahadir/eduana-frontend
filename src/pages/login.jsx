import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

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
      Student: { name: "Christian", code: "1234", redirect: "/dashboard/student" },
      Parent: { email: "jan@gmail.com", password: "Jan1", redirect: "/dashboard/parent" },
      Educators: {
        admin: { email: "admin@gmail.com", password: "Admin1", redirect: "/dashboard/admin" },
        coordinator: {
          email: "coordinator@gmail.com",
          password: "Coordinator1",
          redirect: "/dashboard/coordinator",
        },
        teacher: { email: "brenda@gmail.com", password: "Brenda1", redirect: "/dashboard/teacher" },
      },
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
      const educator = Object.values(credentials.Educators).find(
        (user) => user.email === email && user.password === password
      );
      if (educator) {
        navigate(educator.redirect);
      } else {
        setAlertMessage("Wrong credentials or password");
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className="flex border-border border-1 rounded-md overflow-clip">
        {["Student", "Parent", "Educators"].map((tab, index, array) => (
          <Button
            key={tab}
            className={`py-2 min-w-28 font-semibold border-border rounded-none ${index === 0 && "rounded-l-md"} ${
              index === array.length - 1 && "rounded-r-md"
            }`}
            onClick={() => {
              setActiveTab(tab);
              localStorage.setItem("activeTab", tab);
              setAlertMessage("");
            }}
            variant={activeTab === tab ? "default" : "outline"}
          >
            {tab}
          </Button>
        ))}
      </div>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-primary font-bold mb-6">Sign in to EduAna</h3>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          {activeTab === "Student" ? (
            <>
              <label className="flex flex-col gap-2 text-primary text-sm">
                Name
                <div className="relative">
                  <User size={12} className="absolute left-0 top-0 m-3.5 pointer-events-none" />
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </label>
              <label className="flex flex-col gap-2 text-primary text-sm">
                Code
                <div className="relative">
                  <Lock size={12} className="absolute left-0 top-0 m-3.5 pointer-events-none" />
                  <Input
                    type="text"
                    placeholder="Enter your school code"
                    value={studentCode}
                    onChange={(e) => setStudentCode(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </label>
            </>
          ) : (
            <>
              <label className="flex flex-col gap-2 text-primary text-sm">
                Email
                <div className="relative">
                  <Mail size={12} className="absolute left-0 top-0 m-3.5 pointer-events-none" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </label>
              <label className="flex flex-col gap-2 text-primary text-sm">
                Password
                <div className="relative">
                  <Lock size={12} className="absolute left-0 top-0 m-3.5 pointer-events-none" />
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </label>
            </>
          )}
          <div className="flex gap-2 items-center">
            <Checkbox checked={rememberMe} onCheckedChange={() => setRememberMe(!rememberMe)} />
            <span className="text-sm text-primary">Remember Me</span>
          </div>
          <Button type="submit" className="w-full" size={"lg"}>
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
  );
}

export default TabbedLogin;

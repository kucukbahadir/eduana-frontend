import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import UserService from "../services/userService";

function TabbedLogin() {
  const [activeTab, setActiveTab] = useState("Student");
  const [username, setUsername] = useState("");
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

    const credentials =
      activeTab === "Student"
        ? { username, password }
        : { email, password };

    try {
      let userType = activeTab === "Educators" ? educatorRole : activeTab;
      const data = await userService.login(userType.toUpperCase(), credentials);
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
        {["Student", "Parent", "Educators"].map((tab) => (
          <Button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setEducatorRole(null);
              setAlertMessage("");
            }}
            variant={activeTab === tab ? "default" : "outline"}
          >
            {tab}
          </Button>
        ))}
      </div>
      {activeTab === "Educators" && (
        <div className="flex border-border border-1 rounded-md overflow-clip">
          {["Admin", "Coordinator", "Teacher"].map((role) => (
            <Button
              key={role}
              onClick={() => {
                setEducatorRole(role);
                setAlertMessage("");
              }}
              variant={educatorRole === role ? "default" : "outline"}
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
              <Input
                icon={User}
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </>
          ) : (
            <>
              <Input
                icon={Mail}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          )}
          <Input
            icon={Lock}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Checkbox
            checked={rememberMe}
            onCheckedChange={() => setRememberMe(!rememberMe)}
          />
          <Button type="submit">Sign In</Button>
          {alertMessage && <div className="text-destructive">{alertMessage}</div>}
        </form>
      </div>
    </div>
  );
}

export default TabbedLogin;
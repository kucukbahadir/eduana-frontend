import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import UserService from "../services/userService";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

const defaultRoles = ["student", "parent"];
const educatorRoles = ["teacher", "coordinator", "admin"];

const headerText = {
  student: "Ready to Learn?",
  parent: "Support Their Journey",
  teacher: "Inspire Minds Today",
  coordinator: "Lead Forward",
  admin: "Powering Excellence",
};

const subtitleText = {
  student: "Access your personalized learning path",
  parent: "Stay connected with your child's education",
  teacher: "Access your classroom and teaching tools",
  coordinator: "Manage teachers and their programs",
  admin: "Control and optimize EduAna",
};

function TabbedLogin() {
  const [showEducatorRoles, setShowEducatorRoles] = useState(false);
  const [roles, setRoles] = useState(defaultRoles);
  const [activeTab, setActiveTab] = useState(defaultRoles[0]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const userService = new UserService();

  const handleLogin = async (e) => {
    e.preventDefault();
    setAlertMessage("");

    const credentials = activeTab === "student" ? { username, password } : { email, password };

    try {
      const data = await userService.login(activeTab.toUpperCase(), credentials);
      if (data.success) {
        navigate(data.redirect);
      } else {
        setAlertMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setAlertMessage(error.message || "An unexpected error occurred.");
    }
  };

  const toggleEducatorView = () => {
    if (showEducatorRoles) {
      setRoles(defaultRoles);
      setActiveTab(defaultRoles[0]);
    } else {
      setRoles(educatorRoles);
      setActiveTab(educatorRoles[0]);
    }
    setShowEducatorRoles(!showEducatorRoles);

    setUsername("");
    setEmail("");
    setPassword("");
    setRememberMe(false);
    setAlertMessage("");
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 lg:gap-2.5 items-center grow lg:p-2.5">
      <img
        src={
          !showEducatorRoles
            ? "https://files.elfsightcdn.com/ce2bed6f-1ae6-4bd7-86a5-45cf9bbaa127/dcb76b7f-7ef8-4e87-a832-d79eb0907800/Coder-Camp-Dec-2023-023.jpg"
            : "https://files.elfsightcdn.com/ce2bed6f-1ae6-4bd7-86a5-45cf9bbaa127/063d5d7f-ee55-4ef6-a28a-79b5dc42ee27/_3EM9786.jpg"
        }
        className="lg:col-span-2 h-50 lg:h-full w-full object-cover lg:rounded-xl overflow-hidden mask-b-from-1 lg:mask-b-from-100% transition-opacity duration-300"
      />
      <Tabs value={activeTab} className="mx-auto w-full max-w-lg px-5">
        <h1 className="mb-0 text-center">{headerText[activeTab] || "Welcome to EduAna"}</h1>
        <p className="mt-[-0.25rem] text-center font-light">{subtitleText[activeTab] || "Your gateway to modern education"}</p>

        <hr className="my-5 mx-40" />

        <TabsList className="w-full rounded-full h-11 mb-5">
          {roles.map((role) => (
            <TabsTrigger value={role} key={role} onClick={() => setActiveTab(role)} className={"rounded-full"}>
              {role[0].toUpperCase() + role.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        {roles.map((role) => (
          <TabsContent key={role} value={role}>
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              {role === "student" ? (
                <Label htmlFor="username">
                  Username
                  <Input
                    id="username"
                    icon={User}
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Label>
              ) : (
                <Label htmlFor="email">
                  Email
                  <Input id="email" icon={Mail} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Label>
              )}
              <Label htmlFor="password">
                Password
                <Input
                  id="password"
                  icon={Lock}
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Label>
              <div className="flex w-full items-center gap-2 mb-5">
                <Checkbox id="remember" checked={rememberMe} onCheckedChange={() => setRememberMe(!rememberMe)} />
                <Label className={"text-nowrap"} htmlFor="remember">
                  Remember Me
                </Label>
                {alertMessage && <small className="w-full text-right text-destructive">{alertMessage}</small>}
              </div>
              <Button type="submit" onClick={handleLogin}>
                Sign in as {role[0].toUpperCase() + role.slice(1)}
              </Button>

              <div className="font-light w-full flex items-center gap-1 justify-center text-sm mt-4">
                {!showEducatorRoles ? (
                  <>
                    <span className="text-muted-foreground">Teaching or managing the platform?</span>
                    <Button variant="link" className="h-fit shadow-transparent cursor-pointer p-0" onClick={toggleEducatorView}>
                      Log in as educator
                    </Button>
                  </>
                ) : (
                  <>
                    <span className="text-muted-foreground">Student or parent?</span>
                    <Button variant="link" className="h-fit shadow-transparent cursor-pointer p-0" onClick={toggleEducatorView}>
                      Go back
                    </Button>
                  </>
                )}
              </div>
            </form>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default TabbedLogin;

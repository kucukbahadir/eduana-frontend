import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Collapsible from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Card from "../progress/components/Card";
import Statistic from "../progress/components/Statistic";
import {
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownZA,
  CalendarArrowDown,
  CalendarArrowUp,
  ChevronDown,
  Download,
  Eye,
  Search,
} from "lucide-react";

import React, { useEffect, useState } from "react";
import { students as data } from "../progress/data/studentData";

const sortOptions = {
  date: [
    { value: "date_desc", label: "Most recent", icon: CalendarArrowDown },
    { value: "date_asc", label: "Oldest first", icon: CalendarArrowUp },
  ],
  grade: [
    { value: "grade_desc", label: "Highest grade", icon: ArrowDown10 },
    { value: "grade_asc", label: "Lowest grade", icon: ArrowDown01 },
  ],
  teacher: [
    { value: "teacher_asc", label: "A-Z", icon: ArrowDownAZ },
    { value: "teacher_desc", label: "Z-A", icon: ArrowDownZA },
  ],
};

function CertificatesOverview() {
  const [students, setStudents] = useState(data);
  const [sortBy, setSortBy] = useState("date_desc");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStudent, setActiveStudent] = useState(students[0].id);

  useEffect(() => {
    setStudents(() => {
      // filter by search query
      const filteredStudents = data.map((student) => ({
        ...student,
        courses: student.courses.map((course) => ({
          ...course,
          certificate:
            course.certificate != null && course.name.toLowerCase().includes(searchQuery.toLowerCase())
              ? course.certificate
              : null,
        })),
      }));

      // sort by selected options
      return filteredStudents.map((student) => ({
        ...student,
        courses: [...student.courses].sort((a, b) => {
          if (!a.certificate || !b.certificate) {
            return a.certificate ? -1 : b.certificate ? 1 : 0; // push items with certificates to the top
          }

          switch (sortBy) {
            case "date_asc":
              return a.certificate.date - b.certificate.date;
            case "date_desc":
              return b.certificate.date - a.certificate.date;
            case "grade_asc":
              return a.certificate.grade - b.certificate.grade;
            case "grade_desc":
              return b.certificate.grade - a.certificate.grade;
            case "teacher_asc":
              return a.certificate.teacher.localeCompare(b.certificate.teacher);
            case "teacher_desc":
              return b.certificate.teacher.localeCompare(a.certificate.teacher);
            default:
              return 0;
          }
        }),
      }));
    });
  }, [searchQuery, sortBy]);

  const handleStudentChange = (value) => {
    setActiveStudent(value);
  };

  return (
    <div className="flex flex-col max-w-4xl w-full mx-auto gap-2.5 p-2.5 px-5 pt-5">
      <h1>Certificates</h1>
      <Tabs
        defaultValue={students[0].id}
        value={activeStudent}
        onValueChange={handleStudentChange}
        className={"w-full"}
      >
        <TabsList className={"hidden md:flex w-full "}>
          {students.map((student) => (
            <TabsTrigger key={student.id} value={student.id}>
              {student.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {students.map((student) => (
          <TabsContent value={student.id} key={student.id} className={"w-full"}>
            <hr className="mb-2.5 hidden md:block" />
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col md:flex-row gap-2.5">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  icon={Search}
                  placeholder="Search certificates"
                  className={"w-full"}
                />
                <div className="flex md:max-w-50 w-full gap-2.5">
                  <Select value={activeStudent} onValueChange={handleStudentChange}>
                    <SelectTrigger className={"md:hidden"}>
                      <SelectValue placeholder="Choose a student" />
                    </SelectTrigger>
                    <SelectContent>
                      {students.map((student) => (
                        <SelectItem key={student.id} value={student.id}>
                          {student.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={sortBy || ""} onValueChange={(value) => setSortBy(value)}>
                    <SelectTrigger className={"w-full"}>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(sortOptions).map(([key, options]) => (
                        <SelectGroup key={key}>
                          <SelectLabel>{key.charAt(0).toUpperCase() + key.slice(1)}</SelectLabel>
                          {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              <option.icon />
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <hr className="md:hidden my-2.5" />
              {student.courses.some((course) => course.certificate != null) ? (
                student.courses.map(
                  (course) => course.certificate != null && <Certificate key={course.name} course={course} />
                )
              ) : (
                <div className="text-center py-10 text-muted-foreground">
                  {searchQuery
                    ? "No certificates match your search criteria"
                    : `No certificates available for ${student.name} yet`}
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function Certificate({ course }) {
  const { name, description, certificate } = course;
  const { date, grade, teacher } = certificate;
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Card title={name}>
      <div className="grid md:grid-cols-3 gap-2.5">
        <Statistic value={grade} lead="Final score" suffix={"%"} />
        <Statistic
          value={date.toLocaleString("default", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
          lead="Awarded"
        />
        <Statistic value={teacher} lead="Taught by" />
      </div>
      <Collapsible collapsed={collapsed}>
        <div className="flex flex-col gap-2.5 text-sm font-light py-2.5">
          <p>
            {description}
          </p>
        </div>
      </Collapsible>
      <div className="flex flex-col gap-2.5 md:flex-row justify-between">
        <div className="flex flex-col md:flex-row gap-2.5">
          <Button>
            <Eye /> View certificate
          </Button>
          <Button variant="outline">
            <Download /> Download
          </Button>
        </div>
        <Button variant={"ghost"} onClick={() => setCollapsed(!collapsed)}>
          <ChevronDown className={`transition-transform duration-200 ${collapsed ? "" : "rotate-180"}`} />
          {collapsed ? "Show" : "Hide"} details
        </Button>
      </div>
    </Card>
  );
}

export default CertificatesOverview;

import { Input } from "@/components/ui/input";
import CourseButton from "./CourseButton";
import { Search } from "lucide-react";

import React, { useState } from "react";

function Courses({ courses }) {
  const [search, setSearch] = useState("");
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Input
        icon={Search}
        placeholder="Search for a course"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredCourses.length === 0 ? (
        <small className="flex items-center justify-center p-5 text-muted-foreground">No courses found</small>
      ) : (
        <div className="flex flex-col rounded-md border border-border overflow-hidden">
          {filteredCourses.map((course, index) => (
            <CourseButton
              key={index}
              title={course.name}
              status={course.status}
              last={index === courses.length - 1}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Courses;
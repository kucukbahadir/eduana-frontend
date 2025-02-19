import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import img1 from "../assets/img/regularCourses/essential-coding-skills.jpg";
import img2 from "../assets/img/regularCourses/essential-robotics-skills.jpg";
import img3 from "../assets/img/regularCourses/navigating-fundamental-electronics.jpg";
import img4 from "../assets/img/regularCourses/navigating-computer-hardware-curriculum.jpg";
import img5 from "../assets/img/regularCourses/essential-artificial-intelligence.jpg";
import img6 from "../assets/img/regularCourses/internet-essentials.jpg";
import img7 from "../assets/img/regularCourses/essential-coding-skills-lvl2.jpg";
import img8 from "../assets/img/regularCourses/essential-robotics-skills-Lvl2.jpg";

const regularCourses = [
  { title: "Essential Coding Skills - Level 1", image: img1 },
  { title: "Essential Robotics Skills - Level 1", image: img2 },
  { title: "Essential Fundamental Electronic Skills - Level 1", image: img3 },
  { title: "Navigating Computer Hardware - Level 1", image: img4 },
  { title: "Essential Artificial Intelligence Level 1", image: img5 },
  { title: "Internet Essentials - Level 1", image: img6 },
  { title: "Essential Coding Skills - Level 2", image: img7 },
  { title: "Essential Robotics Skills - Level 2", image: img8 },
];

const brightMindsCourses = [
  { title: "Space Exploration", image: img1 },
  { title: "Ocean Exploration", image: img2 },
  { title: "Ecosystem", image: img3 },
  { title: "Weather and Climate", image: img4 },
  { title: "Human Body and Health", image: img5 },
  { title: "Botany and Plant Growth", image: img6 },
  { title: "Sustainable Cities", image: img7 },
  { title: "Air and Atmospheric", image: img8 },
];

export default function CourseOverview() {
  const [courses, setCourses] = useState(regularCourses);
  const [isBrightMinds, setIsBrightMinds] = useState(false);

  const handleRegularCourses = () => {
    setCourses(regularCourses);
    setIsBrightMinds(false);
  };

  const handleBrightMinds = () => {
    setCourses(brightMindsCourses);
    setIsBrightMinds(true);
  };

  return (
    <div className="p-6 min-h-screen w-full">
      <div className="flex space-x-4 mb-6">
        <Button
          onClick={handleRegularCourses}
          className={`px-6 py-2 rounded font-semibold shadow-md`}
          variant={!isBrightMinds ? "default" : "ghost"}
        >
          Regular Course
        </Button>
        <Button
          onClick={handleBrightMinds}
          className={`px-6 py-2 rounded font-semibold shadow-md`}
          variant={isBrightMinds ? "default" : "ghost"}
        >
          Bright Minds
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">
        {isBrightMinds ? "Bright Minds Courses" : "Regular Courses"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`flex flex-col gap-4 rounded-lg overflow-hidden shadow-lg ${
              isBrightMinds ? "p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" : "p-4 bg-card"
            }`}
          >
            <div
              className={`h-40 w-full bg-cover bg-center rounded-md ${isBrightMinds ? "opacity-80" : ""}`}
              style={{ backgroundImage: `url(${course.image})` }}
            ></div>
            <h3 className={`text-lg font-semibold ${isBrightMinds ? "text-white" : "text-primary"}`}>{course.title}</h3>
            <Button className={"w-full"} size={"lg"} variant={isBrightMinds ? "default" : "primary"}>
              Manage <ChevronRight size={16} />
            </Button>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2 mt-8">
        <Button size={"icon"} variant={"outline"}>
          <ChevronLeft size={16} />
        </Button>
        <Button size={"icon"} variant={"default"}>
          1
        </Button>
        <Button size={"icon"} variant={"outline"}>
          2
        </Button>
        <Button size={"icon"} variant={"outline"}>
          3
        </Button>
        <span className="text-gray-400">...</span>
        <Button size={"icon"} variant={"outline"}>
          100
        </Button>
        <Button size={"icon"} variant={"outline"}>
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}

import React, {useState} from "react";
import {ChevronRight, ChevronLeft} from "lucide-react";

import img1 from "../assets/img/regularCourses/essential-coding-skills.jpg";
import img2 from "../assets/img/regularCourses/essential-robotics-skills.jpg";
import img3 from "../assets/img/regularCourses/navigating-fundamental-electronics.jpg";
import img4 from "../assets/img/regularCourses/navigating-computer-hardware-curriculum.jpg";
import img5 from "../assets/img/regularCourses/essential-artificial-intelligence.jpg";
import img6 from "../assets/img/regularCourses/internet-essentials.jpg";
import img7 from "../assets/img/regularCourses/essential-coding-skills-lvl2.jpg";
import img8 from "../assets/img/regularCourses/essential-robotics-skills-Lvl2.jpg";

const regularCourses = [
    {title: "Essential Coding Skills - Level 1", image: img1},
    {title: "Essential Robotics Skills - Level 1", image: img2},
    {title: "Essential Fundamental Electronic Skills - Level 1", image: img3},
    {title: "Navigating Computer Hardware - Level 1", image: img4},
    {title: "Essential Artificial Intelligence Level 1", image: img5},
    {title: "Internet Essentials - Level 1", image: img6},
    {title: "Essential Coding Skills - Level 2", image: img7},
    {title: "Essential Robotics Skills - Level 2", image: img8},
];

const brightMindsCourses = [
    {title: "Space Exploration", image: img1},
    {title: "Ocean Exploration", image: img2},
    {title: "Ecosystem", image: img3},
    {title: "Weather and Climate", image: img4},
    {title: "Human Body and Health", image: img5},
    {title: "Botany and Plant Growth", image: img6},
    {title: "Sustainable Cities", image: img7},
    {title: "Air and Atmospheric", image: img8},
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
        <div className="p-6 min-h-screen w-full text-white">
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={handleRegularCourses}
                    className={`px-6 py-2 rounded font-semibold shadow-md ${!isBrightMinds ? "bg-white text-black" : "bg-transparent text-gray-300"}`}
                >
                    Regular Course
                </button>
                <button
                    onClick={handleBrightMinds}
                    className={`px-6 py-2 rounded font-semibold shadow-md ${isBrightMinds ? "bg-white text-black" : "bg-transparent text-gray-300"}`}
                >
                    Bright Minds
                </button>
            </div>

            <h1 className="text-3xl font-bold mb-6 text-center">{isBrightMinds ? 'Bright Minds Courses' : 'Regular Courses'}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className={`rounded-lg overflow-hidden shadow-lg ${isBrightMinds ? "p-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" : "p-4 bg-white"}`}
                    >
                        <div
                            className={`h-40 w-full bg-cover bg-center ${isBrightMinds ? "opacity-80" : ""}`}
                            style={{backgroundImage: `url(${course.image})`}}
                        ></div>
                        <div className="p-4">
                            <h3 className={`text-lg font-semibold ${isBrightMinds ? "text-white" : "text-black"}`}>{course.title}</h3>
                            <button
                                className={`mt-4 flex items-center justify-center gap-2 ${isBrightMinds ? "bg-gray-800 hover:bg-gray-700" : "bg-blue-600 hover:bg-blue-700"} text-white px-4 py-2 rounded shadow-md w-full`}
                            >
                                Manage <ChevronRight size={16}/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center space-x-2 mt-8">
                <button className="border border-gray-500 px-3 py-2 rounded bg-gray-700 text-white hover:bg-gray-600">
                    <ChevronLeft size={16}/>
                </button>
                <button
                    className="border border-gray-500 bg-gray-700 px-3 py-2 rounded text-white hover:bg-gray-600">1
                </button>
                <button
                    className="border border-gray-500 bg-gray-800 px-3 py-2 rounded text-gray-300 hover:bg-gray-700">2
                </button>
                <button
                    className="border border-gray-500 bg-gray-800 px-3 py-2 rounded text-gray-300 hover:bg-gray-700">3
                </button>
                <span className="text-gray-400">...</span>
                <button
                    className="border border-gray-500 bg-gray-800 px-3 py-2 rounded text-gray-300 hover:bg-gray-700">100
                </button>
                <button className="border border-gray-500 px-3 py-2 rounded bg-gray-700 text-white hover:bg-gray-600">
                    <ChevronRight size={16}/>
                </button>
            </div>
        </div>
    );
}

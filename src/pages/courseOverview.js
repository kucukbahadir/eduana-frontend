import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
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
    {id: 1, title: "Essential Coding Skills - Level 1", image: img1},
    {id: 2, title: "Essential Robotics Skills - Level 1", image: img2},
    {id: 3, title: "Essential Fundamental Electronic Skills - Level 1", image: img3},
    {id: 4, title: "Navigating Computer Hardware - Level 1", image: img4},
    {id: 5, title: "Essential Artificial Intelligence Level 1", image: img5},
    {id: 6, title: "Internet Essentials - Level 1", image: img6},
    {id: 7, title: "Essential Coding Skills - Level 2", image: img7},
    {id: 8, title: "Essential Robotics Skills - Level 2", image: img8},
];

const brightMindsCourses = [
    {id: 9, title: "Space Exploration", image: img1},
    {id: 10, title: "Ocean Exploration", image: img2},
    {id: 11, title: "Ecosystem", image: img3},
    {id: 12, title: "Weather and Climate", image: img4},
    {id: 13, title: "Human Body and Health", image: img5},
    {id: 14, title: "Botany and Plant Growth", image: img6},
    {id: 15, title: "Sustainable Cities", image: img7},
    {id: 16, title: "Air and Atmospheric", image: img8},
];

export default function CourseOverview() {
    const [courses, setCourses] = useState(regularCourses);
    const [isBrightMinds, setIsBrightMinds] = useState(false);
    const navigate = useNavigate();

    const handleRegularCourses = () => {
        setCourses(regularCourses);
        setIsBrightMinds(false);
    };

    const handleBrightMinds = () => {
        setCourses(brightMindsCourses);
        setIsBrightMinds(true);
    };

    const handleManageClick = (id) => {
        navigate(`/manage/${id}`);
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
                {courses.map((course) => (
                    <div key={course.id}
                         className={`rounded-lg overflow-hidden shadow-lg ${isBrightMinds ? "p-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" : "p-4 bg-white"}`}>
                        <div
                            className={`h-40 w-full bg-cover bg-center ${isBrightMinds ? "opacity-80" : ""}`}
                            style={{backgroundImage: `url(${course.image})`}}
                        ></div>
                        <div className="p-4">
                            <h3 className={`text-lg font-semibold ${isBrightMinds ? "text-white" : "text-black"}`}>{course.title}</h3>
                            <button
                                onClick={() => handleManageClick(course.id)}
                                className={`mt-4 flex items-center justify-center gap-2 ${isBrightMinds ? "bg-gray-800 hover:bg-gray-700" : "bg-blue-600 hover:bg-blue-700"} text-white px-4 py-2 rounded shadow-md w-full`}
                            >
                                Manage <ChevronRight size={16}/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

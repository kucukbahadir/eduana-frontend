import React from "react";
import {useParams} from "react-router-dom";

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

export default function CourseDetail() {
    const {id} = useParams();
    const courseId = parseInt(id);

   
    const course = [...regularCourses, ...brightMindsCourses].find(course => course.id === courseId);

    if (!course) {
        return <div className="p-6 text-white text-center">Course not found</div>;
    }

    return (
        <div className="p-6 min-h-screen w-full text-white flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
            <img src={course.image} alt={course.title} className="w-1/2 rounded-lg shadow-lg"/>
        </div>
    );
}

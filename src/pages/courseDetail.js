import React from "react";
import {useParams} from "react-router-dom";
import {allCourses} from "../data/courseData"; // ✅ Import all courses from the data file

export default function CourseDetail() {
    const {id} = useParams();
    const courseId = parseInt(id);
    const course = allCourses.find(course => course.id === courseId);

    if (!course) {
        return <div className="p-6 text-white text-center">Course not found</div>;
    }

    return (
        <div className="p-6 min-h-screen w-full text-white flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <img src={course.image} alt={course.title} className="w-1/2 rounded-lg shadow-lg mb-4"/>
            <p className="text-lg text-gray-300 w-3/4 text-center">{course.description}</p>
        </div>
    );
}

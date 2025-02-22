import React from "react";
import {useParams} from "react-router";
import {allCourses} from "../data/courseData";
import Accordion from "../components/Accordion";

export default function CourseDetail() {
    const {id} = useParams();
    const courseId = parseInt(id, 10);

    if (isNaN(courseId)) {
        return <div className="p-6 text-white text-center">Invalid course ID</div>;
    }

    const course = allCourses.find(course => course.id === courseId);

    if (!course) {
        return <div className="p-6 text-white text-center">Course not found</div>;
    }

    return (
        <div className="w-full text-center">
            <div className="relative w-full h-[300px]">
                <img className="w-full h-full object-cover" src={course.image} alt={course.title}/>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <h2 className="text-4xl font-bold text-white">{course.title}</h2>
                </div>
            </div>
            <div className="pt-12 p-4 w-full text-white flex flex-col items-center space-y-3">
                <div className="flex justify-center items-center space-x-4 text-gray-400 mt-4">
            <span className="text-blue-500 font-bold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                     stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                Review Content
            </span>
                    <span>——</span>
                    <span>Set Up Materials</span>
                    <span>——</span>
                    <span>Plan Activity</span>
                    <span>——</span>
                    <span>Review</span>
                </div>
                <br/>
                <Accordion title="Learning Goals">
                    <p className="text-lg text-gray-300 w-3/4 text-center">
                        {course.description || "No learning goals provided."}
                    </p>
                </Accordion>
                <Accordion title="Keywords">
                    <p className="text-lg text-gray-300 w-3/4 text-center">
                        {course.description || "No keywords provided."}
                    </p>
                </Accordion>
                <Accordion title="Presentation">
                    <p className="text-lg text-gray-300 w-3/4 text-center">
                        {course.description || "No presentation details available."}
                    </p>
                </Accordion>
                <Accordion title="Kahoot Quiz">
                    <p className="text-lg text-gray-300 w-3/4 text-center">
                        {course.description || "No quiz available."}
                    </p>
                </Accordion>
                <div className="flex justify-center mx-auto mt-3">
                    <button type="button"
                            className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 px-3 hover:bg-blue-700">
                        <div className="flex items-center">
                            <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <p>Prev</p>
                        </div>
                    </button>
                    <button type="button"
                            className="bg-gray-800 text-white rounded-r-md py-2 px-3 border-l border-gray-200 hover:bg-blue-700">
                        <div className="flex items-center">
                            <span>Next</span>
                            <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

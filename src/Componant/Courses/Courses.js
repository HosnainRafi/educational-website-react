import React from 'react';
import Course from '../Course/Course';
import useCourses from '../Hooks/useCourses';
import './Courses.css'

const Courses = () => {

    const [fullCourses,setFullCourses] =useCourses();

    return (
        <div className="container">
            <h1 className= "text-center course-title">Courses</h1>
            <div className="row">
                {
                    fullCourses.map(course => <Course
                    course= {course}
                    key = {course.id}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;
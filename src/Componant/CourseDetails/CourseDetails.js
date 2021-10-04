import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CourseDetails = () => {
    const {courseId} = useParams();
    const [course,setCourse] = useState({});
    console.log(course);
    useEffect(() => {
        const url = `courses.json/${courseId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCourse(data))
    })
    return (
        <div>
            {
               
            }
        </div>
    );
};

export default CourseDetails;
import { useEffect, useState } from "react";

const useCourses = () => {
   const [fullCourses,setFullCourses] = useState([]);
   useEffect(() => {
     fetch('courses.json')
     .then(res => res.json())
     .then(data => setFullCourses(data))
   }, [])
   return [fullCourses,setFullCourses];
}

export default useCourses;
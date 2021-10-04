import { useEffect, useState } from "react";

const useHomeCourses = () => {
   const [courses,setCourses] = useState([]);
   useEffect(() => {
     fetch('home.JSON')
     .then(res => res.json())
     .then(data => setCourses(data))
   }, [])
   return [courses,setCourses];
}

export default useHomeCourses;
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import HomeCard from '../HomeCard/HomeCard';
import useCourses from '../Hooks/useCourses';
import useHomeCourses from '../Hooks/useHomeCourses';
import './home.css'

const Home = () => {
    const history = useHistory();

    const handleHistory = () => {
        history.push('/about');
    }
    const handleCourse = () =>{
        history.push('./courses')
    }

    const [fullCourses,setFullCourses] = useCourses();

    return (
        <div className="container-fluid">
            <div className="home-container container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="home-quote"><span className="home-style">Don't Stop</span> Until <br />
                            You Are Proud</h1>
                        <h2 className="small-quote">Whether You Think <br /> You Can or You Can't <br /> You Are Right</h2>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
                <button onClick={handleHistory} className="btn btn-danger about-btn">About Us</button>
            </div>
            <div className="container home-card-container">
                <div className="row g-4">
                    {
                        fullCourses.slice(0,4).map(course => <HomeCard
                            course={course}
                            key={course.id}
                        ></HomeCard>)

                    }
                    <div className="mx-auto text-white text-center">
                        <button onClick={handleCourse} className="btn btn-danger">See all Courses</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;
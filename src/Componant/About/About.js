import React from 'react';
import './About.css';
import img from '../../images/courses.jpg'

const About = () => {
    return (
        <div className="container about-container">
            <h1 className="text-center about-text">About us</h1>
            <div className="row g-4">
                <div className="col-md-6">
                    <h3 className="blog-style">Explore The Courses With Course Hero</h3>
                    <p>Course Hero partners with more than 200 leading universities to connect them with our best resources.It also bring flexible, affordable, job-relevant online learning to individuals and organization worldwide.We offer a range of learning opportunities from hand-on projects and courses to job ready candidates degree programs.</p>
                    <p></p>
                </div>
                <div className="col-md-6">
                    <img className=" img-fluid" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
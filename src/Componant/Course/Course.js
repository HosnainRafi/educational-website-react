import React from 'react';
import { useHistory } from 'react-router';
import './Course.css'

const Course = (props) => {
    const { name, description, img, instructor, price, discountPrice,id } = props.course;

    const history = useHistory();
    const handleDetails = () => {
        history.push(`/course/${id}`)
    }

    return (
        <div className="col-md-4 course-gap">
            <div className="card" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p><small>{instructor}</small></p>
                <div className="row">
                    <div className="col-md-8">
                        <small style={{color: "#eab830"}}><b>Price: ${discountPrice}.99</b></small>
                    </div>
                    <div className="col-md-4">
                        <small><del>${price}.99</del></small>
                    </div>
                </div>
                <p className="card-text">{description}</p>
                <button onClick={handleDetails} className="btn btn-warning text-white">See Details</button>
                </div>
            </div>
            
        </div>
    );
};

export default Course;
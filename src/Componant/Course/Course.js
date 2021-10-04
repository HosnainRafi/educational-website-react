import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, description, img, instructor, price, discountPrice } = props.course;

    return (
        <div className="col-md-4 course-gap">
            <div class="card" style={{width: "18rem"}}>
                <img src={img} class="card-img-top" alt="..."/>
                <div class ="card-body">
                <h5 class ="card-title">{name}</h5>
                <p><small>{instructor}</small></p>
                <div className="row">
                    <div className="col-md-8">
                        <small style={{color: "#eab830"}}><b>Price: ${discountPrice}.99</b></small>
                    </div>
                    <div className="col-md-4">
                        <small><del>${price}.99</del></small>
                    </div>
                </div>
                <p class ="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Course;
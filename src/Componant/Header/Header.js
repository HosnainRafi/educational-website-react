import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import img from '../../images/logo2.png'



const Header = () => {
    return (
        <div className= "header-container">
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor : "#e3f2fd"}}>
                <div className="container-fluid">
                    <NavLink to="/home" className="navbar-brand"><img src={img} alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/home" className="text-decoration-none navigation-item m-4" activeClassName="selected"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "tomato"
                                    }}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/courses" className="text-decoration-none navigation-item m-4" activeClassName="selected"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "tomato"
                                    }}>Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="text-decoration-none navigation-item m-4" activeClassName="selected"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "tomato"
                                    }}>About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="text-decoration-none navigation-item m-4" activeClassName="selected"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "tomato"
                                    }}>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import './ContactUs.css'
import img from '../../images/map.jpg'

const ContactUs = () => {
    return (
        <div className="container contact-container container-fluid">
            <div className="contact-info">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Contact Info:</h2>
                        <br />
                        <hr />
                        <h3>Postal Address:</h3>
                        <p>1st evenew, Banani , Dhaka ,Bangladesh</p>
                        <hr />
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Phone Number:</h3>
                                <p>0123456789</p>
                            </div>
                            <div className="col-md-6">
                                <h3>Email:</h3>
                                <p>rhosnain@gmail.com</p>
                            </div>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <h3>Facebook :</h3>
                                <p>www.faccebook.com/coursehero</p>
                            </div>
                            <div className="col-md-6">
                                <h3>Skype:</h3>
                                <p>www.skype.com/coursehero</p>
                            </div>
                            <hr />
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <h2 className="map">Location Info :</h2>
                        <br />
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
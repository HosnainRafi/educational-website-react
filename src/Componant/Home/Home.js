import React from 'react';
import { useHistory } from 'react-router';
import './home.css'

const Home = () => {
    const history = useHistory();

    const handleHistory = () => {
        history.push('/about');
    }

    return (
        <div>
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
            <div>
                
            </div>
        </div>

    );
};

export default Home;
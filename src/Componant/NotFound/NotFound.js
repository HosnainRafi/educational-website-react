import React from 'react';
import { useHistory } from 'react-router';
import img from '../../images/404-error.jpg'
import './NotFound.css'

const NotFound = () => {
    const history = useHistory();

    const handleHistory = () =>{
        history.push('/home')
    }
    return (
        <div className="mx-auto text-center">
            <img src={img} alt="" />
            <h1 className='not-found-text'>Page not Found</h1>
            <button onClick={handleHistory} className="btn btn-warning text-white m-4">Go Home</button>
        </div>
    );
};

export default NotFound;
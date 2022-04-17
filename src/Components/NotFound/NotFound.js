import React from 'react';
import './NotFound.css'
import picture from './image/notfound404.jpg'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={picture} alt="" />
        </div>
    );
};

export default NotFound;
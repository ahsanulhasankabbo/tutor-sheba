import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name , picture , price , about } = service;
    return (
        <div  className='service-card'>
            <div>
                {/* <img src={picture} alt="" /> */}
                <h4>{name}</h4>
                <p>{price}</p>
                <p><small>{about}</small></p>
            </div>
        </div>
    );
};

export default Service;
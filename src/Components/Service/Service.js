import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css'
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, picture, price, about } = service;
    return (
        <div className='service-section mt-5 container mx-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='service-image' variant="top" src={picture} /> 
                <Card.Body className='service-details'>
                    <Card.Title className='text-lg text-center font-bold'>{name}</Card.Title>
                    <p className='font-semibold'>Course Cost : ${price}</p>
                    <Card.Text> <small>{about}</small> </Card.Text>
                    <Link to='/checkout'><button className='service-button mt-3'>Checkout</button></Link>
                    {/* <button className='service-button mt-3'><Link to='/checkout'>Checkout</Link></button> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;
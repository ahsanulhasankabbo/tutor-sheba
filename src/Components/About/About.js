import React from 'react';
import './About.css'
import picture from './image/picture.png'

const About = () => {
    return (
        <div className='about'>
            <div className='personal-information'>
                <div>
                    <h1 className='text-2xl'>Personal information</h1>
                    <hr />
                    <div className='flex mt-3'>
                        <p className='mr-3'>Name : </p>
                        <p>Ahsanul Hasan Kabbo</p>
                    </div>
                    <div className='flex'>
                        <p className='mr-3'>Education : </p>
                        <p>Bangbandhu sheikh mujibur rahman science and technology university.</p>
                    </div>
                    <div className='flex'>
                        <p className='mr-3'>Department : </p>
                        <p>Electrical and Electronic Engineering</p>
                    </div>
                    <div className='flex'>
                        <p className='mr-3'>Nationality : </p>
                        <p>Bangladeshi</p>
                    </div>
                    <div className='flex'>
                        <p className='mr-3'>Birth Date : </p>
                        <p>27/10/99</p>
                    </div>
                    <div className='flex'>
                        <p className='mr-3'>Address : </p>
                        <p>Joypurhat,Bangladesh</p>
                    </div>
                </div>
                <img src={picture} alt="" />
            </div>
            <div className='goals-section'>
                <h1 className='text-2xl'>My goals in next 5months :</h1>
                <p>I want to be a full stack web developer.To achive my dream i enroll this course Programming hero.In 4months ago i dont even know about the basic of html or css.But in the few months i gain the basic knowledge about html,css,bootstrap,tailwind,javascript and react.Now my target is to be expert in reactjs.And also learn about node,next,and some database.After be expert in all this i want to be a full stack web developer in a maltinational company.</p>
            </div>
        </div>
    );
};

export default About;
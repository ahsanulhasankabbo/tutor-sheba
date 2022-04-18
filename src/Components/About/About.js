import React from 'react';
import './About.css'
import picture from './image/picture.png'

const About = () => {
    return (
        <div className='about'>
            <div className='personal-information'>
                <div className='personal-info'>
                    <h1 className='text-2xl'>Personal information</h1>
                    <hr className='my-3'/>
                    <p>Iam Ahsanul Hasan Kabbo, studing Bangabandhu Sheikh Mujibur Rahman Science and Technology University Department of Electrical and Electronic Engineering.My hometown is Joypurhat.</p>

                    <h1 className='text-2xl mt-8'>My Goals :</h1>
                    <hr className='my-3'/>
                    <p>I want to be a full stack web developer.I want to be expert in Reactjs. And i wanna also learn about Node, Next and some database.After be expert in all this i want to be a full stack web developer in a maltinational company.</p>
                    <h1 className='text-2xl mt-8'>My steps to become a web developer :</h1>
                    <hr className='my-3'/>
                    <p>
                        <li>Learn properly the Fontend and Backend skils</li>
                        <li>Practice with free tools and increase my knowlodge</li>
                        <li>Complete some big task projects</li>
                        <li>Give enough time to get my success</li>
                    </p>

                </div>
                <img src={picture} alt="" />
            </div>
        </div>
    );
};

export default About;
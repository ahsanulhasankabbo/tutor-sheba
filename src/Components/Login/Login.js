import React from 'react';
import './Login.css'
import google from './image/google.jpg'

const Login = () => {
    return (
        <div>
            <div className='input-field my-10'>
                <form action="">
                    <label htmlFor="Name">Name</label> <br />
                    <input className='p-2' type="text" placeholder='Your Name' /> <br />
                    <label htmlFor="email">Email</label> <br />
                    <input className='p-2' type="email" name="email" id="" placeholder='Email Address' /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input className='p-2' type="password" name="password" id="" placeholder='Set Password' /> <br />
                    <input className='p-2 w-20 submit' type="submit" value="Login" />
                </form>
                <div className='middle-break'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <button className='google'>
                    <img src={google} alt="" />
                    {/* <p>sign in with google</p> */}
                </button>
            </div>
        </div>
    );
};

export default Login;
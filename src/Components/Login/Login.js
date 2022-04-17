import React from 'react';
import './Login.css'
import google from './image/google.jpg'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className='input-field my-10'>
                <form>
                    <label htmlFor="email">Email</label> 
                    <input className='p-2' type="email" name="email" id="" placeholder='Email Address' required /> <br />
                    <label htmlFor="password">Password</label> 
                    <input className='p-2' type="password" name="password" id="" placeholder='Set Password' required/> <br />
                    <input className='p-2 w-20 submit' type="submit" value="Login" required/>
                    <p>New to tutor sheba? <Link className='text-orange-400' to='/signup'>Create new account</Link></p>
                </form>
                <div className='middle-break'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <button onClick={() => signInWithGoogle()} className='google'>
                    <img src={google} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Login;
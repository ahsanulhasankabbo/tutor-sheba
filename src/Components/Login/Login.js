import React, { useState } from 'react';
import './Login.css'
import google from './image/google.jpg'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        userEmail,
        loadingEmail,
        errorEmail,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if(userEmail){
        navigate(from, {replace: true});
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async() =>{
        await sendPasswordResetEmail(email);
          toast('Sent email');
    }

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        navigate(from, {replace: true});
    }
    return (
        <div className='login-container'>
            <div className='input-field my-10'>
                <form onSubmit={handleUserSignIn}>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} className='p-2' type="email" name="email" id="" placeholder='Email Address' required /> <br />
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} className='p-2' type="password" name="password" id="" placeholder='Set Password' required /> <br />
                    <p style={{ color: 'red' }}>{errorEmail?.message}</p>
                    <input className='p-2 w-20 submit' type="submit" value="Login" required />
                    <p>New to tutor sheba? <Link className='text-orange-400' to='/signup'>Create new account</Link></p>
                    <p>Forget password? <button onClick={resetPassword}className='text-orange-400' >Reset</button></p>
                </form>
                <div className='middle-break'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <button onClick={() => signInWithGoogle()} className='google'>
                    <img src={google} alt="" />
                    <p className='ml-3'>sign in with google</p>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
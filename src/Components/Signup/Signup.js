import React, { useState } from 'react';
import google from './image/google.jpg'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link , useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [errorMassage , setErrorMassage] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        userEmail,
        loadingEmail,
        errorEmail,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});

    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }
    if(userEmail){
        navigate('/home');
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setErrorMassage('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setErrorMassage('Password must be 6 characters or longer');
            return;
        }
        
        createUserWithEmailAndPassword(email, password);
    }


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className='input-field my-10'>
                <form onSubmit={handleCreateUser}>
                    <label htmlFor="email">Email</label> 
                    <input onBlur={handleEmailBlur} className='p-2' type="email" name="email" id="" placeholder='Email Address' required/> <br />
                    <label htmlFor="password">Password</label> 
                    <input onBlur={handlePasswordBlur} className='p-2' type="password" name="password" id="" placeholder='Set Password' required/> <br />
                    <label htmlFor="password">Confirm Password</label> 
                    <input onBlur={handleConfirmPasswordBlur} className='p-2' type="password" name="password" id="" placeholder='Set Password' required/> <br />
                    <p style={{color:'red'}}>{errorMassage}</p>
                    <input className='p-2 w-20 submit' type="submit" value="Signup" required/>
                    <p>Already have an account? <Link className='text-orange-400' to='/login'>Login</Link></p>
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
        </div>
    );
};

export default Signup;
import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className='input-field'>
                <form action="">
                    <label className='' htmlFor="Name">Name</label> <br />
                    <input type="text" placeholder='Your Name'/> <br />
                    <input type="email" name="email" id="" placeholder='Email Address' /> <br />
                    <input type="password" name="password" id="" placeholder='Set Password'/> <br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;
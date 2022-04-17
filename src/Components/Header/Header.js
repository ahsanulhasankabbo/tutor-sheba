import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='header px-24 h-20 bg-slate-700 text-purple-100 pt-6'>
            <div>
                <h1 className='text-3xl font-semibold'>Tutor Sheba</h1>
            </div>
            <nav className='header-manu'>
                <Link className='text-xl ml-3' to='/home'>Home</Link>
                <Link className='text-xl ml-3' to='/checkout'>Checkout</Link>
                <Link className='text-xl ml-3' to='/blogs'>Blogs</Link>
                <Link className='text-xl ml-3' to='/about'>About</Link>
                {
                    user ?
                        <Link onClick={handleSignOut} className='text-xl ml-3' to='/about'>Signout</Link>
                        : <Link className='text-xl ml-3' to='/login'>Login</Link>
                }

            </nav>
        </div>
    );
};

export default Header;
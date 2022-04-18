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
        <div className='header px-24 bg-slate-700 text-purple-100 pt-6'>
            <div>
                <h1 className='text-3xl font-semibold header-title'>Tutor Sheba</h1>
            </div>
            <nav className='header-manu'>
                <Link className='text-xl ml-3 nav-item' to='/home'>Home</Link>
                <Link className='text-xl ml-3 nav-item' to='/checkout'>Checkout</Link>
                <Link className='text-xl ml-3 nav-item' to='/blogs'>Blogs</Link>
                <Link className='text-xl ml-3 nav-item' to='/about'>About</Link>
                {
                    user ?
                        <button onClick={handleSignOut} className='text-xl ml-3 nav-item'>Logout</button>
                        : <Link className='text-xl ml-3 nav-item' to='/login'>Login</Link>
                }

            </nav>
        </div>
    );
};

export default Header;
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div className='text-center h-20 bg-slate-700 text-purple-100 pt-6'>
            <nav>
                <Link className='text-xl ml-3' to='/home'>Home</Link>
                <Link className='text-xl ml-3' to='/checkout'>Checkout</Link>
                <Link className='text-xl ml-3' to='/blogs'>Blogs</Link>
                <Link className='text-xl ml-3' to='/about'>About</Link>
                {
                    user ?
                    <button onClick={handleSignOut}>sign out</button>
                    : <Link className='text-xl ml-3' to='/login'>Login</Link>
                }
                
            </nav>
        </div>
    );
};

export default Header;
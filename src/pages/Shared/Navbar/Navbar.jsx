import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOption = <>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/menu" >Our Menu</Link></li>
        <li><Link to="/order/salad" >Our Shop</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Food Canvas</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <button onClick={handleLogOut} className="btn btn-active btn-ghost">Logout</button>
                        </>
                        :
                        <>
                            <p className='mr-3'><Link to="/login" >Login</Link></p>
                            <p><Link to="/signup" >Sign Up</Link></p>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* dashboard sidebar */}
            <div className="w-68 min-h-screen bg-orange-500">
                <ul className="menu">
                    <li><NavLink to="/">User Home</NavLink></li>
                    <li><NavLink to="/dashboard/cart">My Cart</NavLink></li>
                    <li><NavLink to="/dashboard/review">Review</NavLink></li>
                    <li><NavLink to="/dashboard/reservation">Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/bookings">My Bookings</NavLink></li>
                    <hr className='mb-2' />
                    <li><NavLink to="/order/salad">Menu</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    //TODO: GET IS ADMIN VALUE FROM THE DB
    const [isAdmin] = useAdmin()
    return (
        <div className='flex'>
            {/* dashboard sidebar */}
            <div className="w-68 min-h-screen bg-orange-500">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/adminHome">Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addItems">Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageItems">Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageBookings">Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allUsers">All Users</NavLink></li>

                            </>
                            :
                            <>
                                
                                <li><NavLink to="/dashboard/cart">My Cart</NavLink></li>
                                <li><NavLink to="/dashboard/review">Review</NavLink></li>
                                <li><NavLink to="/dashboard/reservation">Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/bookings">My Bookings</NavLink></li>
                            </>
                    }
                    <hr className='mb-2' />
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/order/salad">Menu</NavLink></li>
                    <li><NavLink to="/dashboard/contact">Contact</NavLink></li>
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
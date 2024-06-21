import React from 'react';
import { NavLink } from 'react-router-dom';

const TouristSidebar = () => {
    return (
       
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/profile'> My Profile</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'> My Bookings</NavLink></li>
                    <li><NavLink to='/dashboard/wishlist'> My Wishlist</NavLink></li>
                    <button className='btn bg-green-400'>Request to Admin</button>

                    <div className="divider"></div>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/allPackages'>All Packages</NavLink></li>
                    <li><NavLink to='/allStory'>All Stories</NavLink></li>
                </ul>
       
    );
};

export default TouristSidebar;
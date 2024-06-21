import React from 'react';
import { NavLink } from 'react-router-dom';

const GuideSidebar = () => {
    return (
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><NavLink to='/dashboard/guideProfile'> My Profile</NavLink></li>
            <li><NavLink to='/dashboard/bookings'> My Assigned Tours</NavLink></li>


            <div className="divider"></div>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allPackages'>All Packages</NavLink></li>
            <li><NavLink to='/allStory'>All Stories</NavLink></li>
        </ul>
    );
};

export default GuideSidebar;
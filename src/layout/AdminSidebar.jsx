import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><NavLink to='/dashboard/adminProfile'> My Profile</NavLink></li>
            <li><NavLink to='/dashboard/addPackage'> Add Packages</NavLink></li>
            <li><NavLink to='/dashboard/manageUser'> Manage Users</NavLink></li>


            <div className="divider"></div>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allPackages'>All Packages</NavLink></li>
            <li><NavLink to='/allStory'>All Stories</NavLink></li>
        </ul>
    );
};

export default AdminSidebar;
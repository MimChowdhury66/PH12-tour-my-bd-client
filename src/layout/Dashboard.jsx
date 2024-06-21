import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        // <div className='flex'>
        //     <div className='w-72 min-h-screen bg-[#D1A054]'>
        //         <ul className="menu grid gap-3">




        //             <li><NavLink to='/dashboard/profile'> My Profile</NavLink></li>
        //             <li><NavLink to='/dashboard/bookings'> My Bookings</NavLink></li>
        //             <li><NavLink to='/dashboard/wishlist'> My Wishlist</NavLink></li>
        //             <button className='btn '>Request to Admin</button>





        //             <div className="divider"></div>
        //             <li><NavLink to='/'> Home</NavLink></li>
        //         </ul>
        //     </div>
        //     <div className='flex-1 p-8'>
        //         <Outlet></Outlet>
        //     </div>
        // </div>


        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
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

            </div>
        </div>
    );
};

export default Dashboard;
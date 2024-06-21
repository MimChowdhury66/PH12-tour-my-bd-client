import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useRole from '../hooks/useRole';
import { AuthContext } from '../AuthProvider/AuthProvider';
import TouristSidebar from './TouristSidebar';
import GuideSidebar from './GuideSidebar';
import AdminSidebar from './AdminSidebar';
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {

    const { user, loading } = useContext(AuthContext);
    const { role, isPending } = useRole();
    if (isPending || loading) {
        return <div className='flex justify-center mt-5'><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span></div>
    }
    return (



        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center p-4  ">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden "><GiHamburgerMenu />
                </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    Sidebar content here
                    <li><NavLink to='/dashboard/profile'> My Profile</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'> My Bookings</NavLink></li>
                    <li><NavLink to='/dashboard/wishlist'> My Wishlist</NavLink></li>
                    <button className='btn bg-green-400'>Request to Admin</button>

                    <div className="divider"></div>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/allPackages'>All Packages</NavLink></li>
                    <li><NavLink to='/allStory'>All Stories</NavLink></li>
                </ul> */}
                {
                    user && role === 'Tourist' && <TouristSidebar></TouristSidebar>
                }
                {
                    user && role === 'guide' && <GuideSidebar></GuideSidebar>
                }
                {
                    user && role === 'admin' && <AdminSidebar></AdminSidebar>
                }



            </div>
        </div>
    );
};

export default Dashboard;
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const TouristSidebar = () => {
    const { user } = useContext(AuthContext);

    const handleRequest = request => {

        const makeRequest = {
            photoUrl: user.photoURL, email: user.email, name: user.displayName
        }
        // console.log(cartItem)
        axios.post('http://localhost:5000/users', makeRequest)
            .then(res => {
                // console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({

                        icon: "success",
                        title: 'Request Added',
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })




    }
    return (

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><NavLink to='/dashboard/profile'> My Profile</NavLink></li>
            <li><NavLink to='/dashboard/bookings'> My Bookings</NavLink></li>
            <li><NavLink to='/dashboard/wishlist'> My Wishlist</NavLink></li>
            <button
                onClick={() => handleRequest()}
                className='btn bg-green-400'>Request to Admin</button>

            <div className="divider"></div>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allPackages'>All Packages</NavLink></li>
            <li><NavLink to='/allStory'>All Stories</NavLink></li>
        </ul>

    );
};

export default TouristSidebar;
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const AdminProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 '>Admin's Profile</h1>
            </div>
            <div className="hero w-full  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user.photoURL} className="lg:w-[400px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="lg:text-5xl font-bold">{user.displayName}</h1>
                        <p className="lg:py-6">{user.email}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
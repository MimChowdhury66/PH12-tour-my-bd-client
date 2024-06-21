import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 '>User Profile</h1>
            </div>

            <div className="hero w-full  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={ user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{user.displayName }</h1>
                        <p className="py-6">{user.email }</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
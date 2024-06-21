import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const UserProfile = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
            <h1>this is user profile</h1>
        </div>
    );
};

export default UserProfile;
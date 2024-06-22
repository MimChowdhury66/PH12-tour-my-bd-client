import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useRole = () => {
    const { user } = useContext(AuthContext);
    const { data: role = '' ,isPending} = useQuery({
        queryKey: ['role'],
        queryFn: async () => {
            const res = await axios.get(`https://tour-my-bangladesh-server.vercel.app/role/${user.email}`)
            // console.log(res.data)
            return res.data;

        }

    });

    return {role,isPending}
};

export default useRole;
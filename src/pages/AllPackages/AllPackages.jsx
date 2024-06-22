import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import PackageCard from '../PackageCard/PackageCard';

const AllPackages = () => {
    const { data: packages = [] } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axios.get('https://tour-my-bangladesh-server.vercel.app/package')
            // console.log(res.data)
            return res.data;

        }

    });
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 '>All Packages</h1>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4  '>
                {
                    packages.map(item => <PackageCard item={item}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default AllPackages;
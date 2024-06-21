import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import PackageCard from '../PackageCard/PackageCard';

const TourTypeDetails = () => {
    const { tourType } = useParams();
    // console.log(tourType)
    const { data: packages = [] } = useQuery({
        queryKey: ['tourTypeDetails'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/package/${tourType}`)
            console.log(res.data)
            return res.data;

        }

    });
    return (
        <div>
            <div className="container flex flex-col items-center mx-auto mb-10 mt-10">
                <h1 className="text-xl lg:text-4xl font-semibold leading-none text-center">--Tour Type Details-- </h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4  '>
                {
                    packages.map(item => <PackageCard item={item}></PackageCard>)
                }
            </div>

        </div>
    );
};

export default TourTypeDetails;
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const PackageDetails = () => {
    const { id } = useParams();
    const { refetch, data: packages = [] } = useQuery({
        queryKey: ['packageDetails'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/package/${id}`)
            // console.log(res.data)
            return res.data;

        }

    });
    return (
        <div>
            <div className="container flex flex-col items-center mx-auto mb-10 mt-10">
                <h1 className=" lg:text-4xl font-semibold leading-none text-center">Explore Top Destinations of <br /><span className='text-xl text-green-400'>{packages.tripTitle}</span> </h1>
            </div>
            {/* gallery section */}
            <section className=" dark:bg-gray-100">
                <div className="container flex flex-col justify-center  mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img className="object-cover dark:bg-gray-500 aspect-square" src={packages.photoUrl} />
                        <img className="object-cover  dark:bg-gray-500 aspect-square" src={packages.photoUrlTwo} />
                        <img className="object-cover  dark:bg-gray-500 aspect-square" src={packages.photoUrlThree} />
                        <img className="object-cover  dark:bg-gray-500 aspect-square" src={packages.photoUrlFour} />
                    </div>
                </div>
            </section>

            {/* about the tour section */}
            <div className="container flex flex-col  mb-10 mt-10">
                <h1 className=" lg:text-4xl text-xl font-semibold leading-none text-start"> Tour Information </h1>
            </div>
            <div className='grid gap-4'>
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={packages.photoUrlThree} className=" rounded-lg " />
                        <div>
                            <h1 className="lg:text-5xl font-bold">
                                Best Time of {packages.tripTitle}</h1>
                            <p className="py-6">The best time to visit {packages.tripTitle} for holidays depends on the type of experience you seek. The tourism season in {packages.tripTitle} varies across regions due to its diverse climate. The peak tourism season in {packages.tripTitle} starts from September to June. For wildlife enthusiasts, winter is ideal as national parks are open, and wildlife sightings are abundant.September to April can be considered an ideal time to explore {packages.tripTitle} for tourism holidays.</p>

                        </div>
                    </div>
                </div>
                <div className="hero bg-base-200">
                    <div className="hero-content  flex-col lg:flex-row-reverse">
                        <img src={packages.travelPhoto} className=" rounded-lg " />
                        <div>
                            <h1 className="lg:text-5xl font-bold">Travel Tips</h1>
                            <p className="py-6">When visiting {packages.tripTitle}, it's essential to check out important travel tips to ensure a smooth and enjoyable trip. Follow recommended guidelines for packing, cultural respect, local transportation, and staying safe. These tips will help you make the most of your {packages.tripTitle} tour and have a memorable experience.</p>

                        </div>
                    </div>
                </div>
            </div>


            {/* tour plan */}

            <div className="container flex flex-col  mb-5 mt-10">
                <h1 className=" lg:text-4xl text-xl font-semibold leading-none text-start"> Tour Plan</h1>
            </div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">

                    <div className="divide-y dark:divide-gray-300">
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">Day 01</h3>
                            <p className="md:pl-0 md:col-span-7">{packages.tourPlanOne}</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">Day 02</h3>
                            <p className="md:pl-0 md:col-span-7"> {packages.tourPlanTwo}</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">Day 03</h3>
                            <p className="md:pl-0 md:col-span-7">{packages.tourPlanThree}</p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default PackageDetails;
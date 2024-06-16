import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const TourGuideProfile = () => {
    const { id } = useParams();
    const { data: guide = [] } = useQuery({
        queryKey: ['guide'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/guide/${id}`)
            // console.log(res.data)
            return res.data;

        }

    });
    return (
        <div>
            <div className="container flex flex-col items-center mx-auto mb-10 mt-10">
                <h1 className=" lg:text-4xl font-semibold leading-none text-center">Tour Guide Profile Page </h1>
            </div>


            <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={guide.profilePicture} />
                        <h1 className="lg:text-5xl font-bold">{guide.name}</h1>
                        <div>

                            <p className="pt-6 font-bold underline text-center">Contact Details</p>
                            <p className="text-center">Phone: {guide.phone}</p>
                            <p className="text-center">Address: {guide.address}</p>
                            <p className="pt-6 font-bold underline text-center">Education</p>
                            <p className="text-center"> {guide.education}</p>
                            <p className="pt-6 font-bold underline text-center">Skills</p>
                            <p className="text-center"> {guide.skillOne}</p>
                            <p className="text-center"> {guide.skillTwo}</p>
                            <p className="text-center"> {guide.skillThree}</p>
                            <p className="pt-6 font-bold underline text-center">WorkExperience</p>
                            <p className="text-center">Position: {guide.position}</p>
                            <p className="text-center">Company: {guide.company}</p>
                            <p className="text-center"> Duration: {guide.duration}</p>


                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TourGuideProfile;
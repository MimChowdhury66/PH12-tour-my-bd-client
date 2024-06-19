import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaShareAlt } from "react-icons/fa";
import { FacebookShareButton } from 'react-share';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const StoryDetail = () => {
    const { user } = useContext(AuthContext);
    const currentPageUrl = window.location.href;
    // console.log(currentPageUrl)
    const { id } = useParams();
    // console.log(id)
    const { data: story = [], isPending } = useQuery({
        queryKey: ['storyDetail'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/story/${id}`)
            // console.log(res.data)

            return res.data;

        }

    });


    if (isPending) {
        return <div className='flex justify-center mt-5'><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span></div>
    }



    return (
        <div>

            <div className="container flex flex-col items-center mx-auto mb-10 mt-10">
                <h1 className="text-xl lg:text-4xl font-semibold leading-none text-center">--Story Details--  </h1>
            </div>


            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold text-green-400">{story.spot}</h1>
                            <p className="py-6">``{story.reviewText}``</p>
                            <p className="">Review Given By: {story.reviewerName}</p>
                            <p className="">{story.reviewerEmail}</p>
                            {
                                user ?
                                    <FacebookShareButton url={currentPageUrl} >
                                        <button className="btn btn-success text-white mt-5"><FaShareAlt />
                                            Share</button>
                                    </FacebookShareButton>
                                    :
                                    <Link to='/login' state={location?.pathname || '/'}><button className="btn lg:text-xl text-white  bg-red-400 mt-5">To share your story , LOGIN First</button></Link>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryDetail;
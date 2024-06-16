import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import StoryCard from '../StoryCard/StoryCard';
import { Link } from 'react-router-dom';

const Story = () => {
    const { data: story = [] } = useQuery({
        queryKey: ['story'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/story')
            // console.log(res.data)
            return res.data;

        }

    });
    return (
        <div>
            <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                <h1 className="p-4 text-4xl font-semibold leading-none text-center">What our Tourists are saying about their trip</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4  '>
                {
                    story.slice(0, 4).map(item => <StoryCard item={item}></StoryCard>)
                }

            </div>
            <Link to='/allStory'><button className="btn btn-success mt-5 text-white mx-auto flex ">All Stories</button></Link>
        </div>
    );
};

export default Story;
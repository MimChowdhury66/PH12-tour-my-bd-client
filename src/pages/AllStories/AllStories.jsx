import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import StoryCard from '../StoryCard/StoryCard';

const AllStories = () => {
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
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 '>All Stories</h1>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4  '>
                {
                    story.map(item => <StoryCard item={item}></StoryCard>)
                }

            </div>
        </div>
    );
};

export default AllStories;
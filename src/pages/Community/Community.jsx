import React from 'react';
import travel from '../../../public/community.png'
import banner from '../../../public/community-banner.jpg';
import tour from '../../../public/tour.png'
import connect from '../../../public/connect.png'
import exclusive from '../../../public/exclusive.png'
import event from '../../../public/event.png'
const Community = () => {
    return (
        <div>

            <div className="hero min-h-screen hover:scale-95 transition duration-500 cursor-pointer" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-55"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" ">
                        <img src={travel} alt="" />
                        <p className="mb-5 lg:text-5xl">TRAVEL IS ALL ABOUT MEETING PEOPLE</p>
                        <p className="mb-5 ">If you're thinking of travelling and want to meet people who are in the same <br /> position as you, jump onto the Australia Travels Facebook Group.</p>
                        <button className="btn btn-primary">Join Our Group</button>
                    </div>
                </div>
            </div>


            <div className='mt-10 mb-10'>
                <div className='text-center'>
                    <h1 className='lg:text-4xl font-bold'>It's All About The Welcome to <span className='text-green-400'>Tour My</span> <span className='text-red-700'>Bangladesh </span> Community</h1>
                    <p className='mb-5'>You have had an amazing time on tour, but you want to connect with other Welcome to Travellers? Have unique <br /> experiences? See different parts of the Bangladesh? All this with likeminded travellers…</p>
                    <p>Below are the upcoming events and exclusive community tours for Welcome to Travellers.</p>
                </div>
            </div>
            <div className='bg-slate-200  border mx-auto grid lg:grid-cols-4 justify-center items-center p-10 gap-5'>
                <div className=' text-center'>
                    <img className='w-[110px] mx-auto rounded-full mt-2' src={tour} alt="" />
                    <p className='font-bold mt-2'>Events And Tours</p>
                    <p>All year round to help you plan your year</p>
                </div>
                <div className=' text-center'>
                    <img className='w-[110px]  mx-auto rounded-full mt-2' src={connect} alt="" />
                    <p className='font-bold mt-2'>Connect</p>
                    <p>With Welcome to Travellers from other tour groups</p>
                </div>
                <div className=' text-center'>
                    <img className='w-[110px]  mx-auto rounded-full mt-2' src={exclusive} alt="" />
                    <p className='font-bold mt-2'>Exclusive</p>
                    <p>Tours will be exclusive to WtTers</p>
                </div>
                <div className=' text-center '>
                    <img className='w-[110px] mx-auto rounded-full mt-2' src={event} alt="" />
                    <p className='font-bold mt-2'>Free Events</p>
                    <p>We will run free events throughout the year</p>
                </div>
            </div>
        </div>
    );
};

export default Community;
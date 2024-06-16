import React from 'react';
import banner from '../../../public/tour-type-banner.jpg'
const TourType = () => {
    return (
        <div className=''>
             {/* <h1 className='text-center text-2xl  font-bold mb-6 mt-10'>Tour Type</h1>
            <div className='grid lg:flex gap-5 justify-center'>
            <button className="btn glass">Glass button</button>
            <button className="btn glass">Glass button</button>
            <button className="btn glass">Glass button</button>
            <button className="btn glass">Glass button</button>
            <button className="btn glass">Glass button</button>
            </div>
             */}

<div className="hero mt-10 lg:h-[300px]" style={{backgroundImage: `url(${banner})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <h1 className='text-center text-5xl  font-bold mb-6 mt-10'>Tour Type</h1>
            <div className='grid md:flex lg:flex gap-5 justify-center'>
            <button className="btn glass text-white w-[100px] rounded-full">Nature</button>
            <button className="btn glass text-white w-[100px]">Hill</button>
            <button className="btn glass text-white w-[100px] rounded-full">Historical</button>
            <button className="btn glass text-white w-[100px]">Adventure</button>
            <button className="btn glass text-white w-[100px] rounded-full">Cultural</button>
            <button className="btn glass text-white w-[100px]">Beach</button>
            </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default TourType;
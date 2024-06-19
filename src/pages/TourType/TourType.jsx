import React from 'react';
import banner from '../../../public/tour-type-banner.jpg'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
const TourType = () => {

  const { data: packages = [] } = useQuery({
    queryKey: ['tourType'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/package')
      // console.log(res.data)
      return res.data;

    }

  });

  return (
    <div className=''>


      <div className="hero mt-10 lg:h-[300px]" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className='text-center text-5xl  font-bold mb-6 mt-10'>Tour Type  </h1>
            <div className='grid md:flex lg:flex gap-5 justify-center'>
              <Link to='/tourTypeDetails/Nature'><button className="btn glass text-white w-[100px] rounded-full">Nature </button></Link>
              <Link to='/tourTypeDetails/Hill'><button className="btn glass text-white w-[100px]">Hill</button></Link>
              <Link to='/tourTypeDetails/Historical'> <button className="btn glass text-white w-[100px] rounded-full">Historical</button></Link>
              <Link to='/tourTypeDetails/Adventure'><button className="btn glass text-white w-[100px]">Adventure</button></Link>
              <Link to='/tourTypeDetails/Cultural'><button className="btn glass text-white w-[100px] rounded-full">Cultural</button></Link>
              <Link to='/tourTypeDetails/Beach'><button className="btn glass text-white w-[100px]">Beach</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourType;
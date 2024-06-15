import React from 'react';
import img1 from '../../../public/banner1.jpg'
import img2 from '../../../public/banner2.jpg'
import img3 from '../../../public/banner3.jpg'
import img4 from '../../../public/banner4.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[400px]">
                <img src={img1} className="w-full" />

                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/2 ">
                    <div className='grid -mt-20'>
                        <h1 className='text-white lg:text-5xl font-bold text-center'>Lalakhal Tour</h1>

                        <p className='text-white text-xl font-bold text-center'>3 Nights 2 Days</p>
                        <Link className='' to='/allPackages'><button className='btn  w-[200px] mx-auto lg:ml-12'>See More Packages</button></Link>

                    </div>
                </div>
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[400px]">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/2 ">
                    <div className='grid -mt-20'>
                        <h1 className='text-white lg:text-5xl font-bold text-center'>Sixty Dome Mosque</h1>

                        <p className='text-white text-xl font-bold text-center'>2 Nights 2 Days</p>
                        <Link className='' to='/allPackages'><button className='btn  w-[200px] mx-auto lg:ml-32'>See More Packages</button></Link>
                    </div>
                </div>
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[400px]">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/2 ">
                    <div className='grid -mt-20'>
                        <h1 className='text-white lg:text-5xl font-bold text-center'>Rangamati Hanging Bridge</h1>

                        <p className='text-white text-xl font-bold text-center'>3 Nights 2 Days</p>
                        <Link className='' to='/allPackages'><button className='btn  w-[200px] mx-auto lg:ml-52'>See More Packages</button></Link>
                    </div>
                </div>
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[400px]">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/2 ">
                    <div className='grid -mt-20'>
                        <h1 className='text-white lg:text-5xl font-bold text-center'>Cox's Bazar Sea Beach</h1>

                        <p className='text-white text-xl font-bold text-center'>3 Nights 4 Days</p>
                        <Link to='/allPackages'><button className='btn  w-[200px] mx-auto lg:ml-36'>See More Packages</button></Link>
                    </div>
                </div>
                <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
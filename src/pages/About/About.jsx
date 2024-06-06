import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import bg1 from '../../../public/about.jpg';
import bg2 from '../../../public/about2.jpg';
import bg3 from '../../../public/about3.jpg';
import bg4 from '../../../public/about4.jpg';
const About = () => {
    return (
        < div className='mb-10' >
            <div className=' lg:flex items-center'>
                <div className='lg:w-1/2'>
                    <Swiper navigation={true} autoplay={{ delay: 5000 }} modules={[Navigation, Autoplay]} className="mySwiper">

                        <SwiperSlide>
                            <div className="hero h-[500px] " style={{ backgroundImage: `url(${bg1})` }}>

                            </div>

                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="hero h-[500px]  " style={{ backgroundImage: `url(${bg2})` }}>


                            </div>

                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className=''>
                    <div className=" text-center mt-5 ">
                        <h1 className="mb-5 lg:text-xl font-bold ">
                            Founded in the year 2024 as TourMyBangladesh.com, an online travel platform, the company boosted as a private limited in the year 2013 and has emerged as the “Best Upcoming Inbound Tour Operators in Bangladesh. It has been awarded in the category of “Excellence in the Tourism Industry” by World Tourism Brand Academy.
                        </h1>

                    </div>
                </div>
            </div>





            <div className='mt-10  font-bold'>
                <h1></h1>
                <section className="dark:bg-gray-100 dark:text-gray-800">
                    <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Company <span className='text-green-400'>Profile</span></h2>
                            
                        </div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Why Us?</h3>
                                <p className="mt-3 text-lg dark:text-gray-600">Tour My Bangladesh Pvt. Ltd. is an award winning travel organization and excels with quality services from its experienced staffs. Over the years the company has received positive feedbacks from its existing clients and hence one can expect a cordial reception..</p>
                                <div className="mt-12 space-y-12">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 dark:text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Our Motto:</h4>
                                            <p className="mt-2 dark:text-gray-600">Customer satisfaction: It’s the prime motto of our business, which has helped us to build a good network with travellers from the farthest corners of the world. The company today holds more than 100,000 satisfied travellers and is still framing the travel diaries of fresh clients.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 dark:text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Quality services</h4>
                                            <p className="mt-2 dark:text-gray-600">Customer satisfaction can only be achieved by quality and time to time services. Knock us at any hour and from anywhere in the world, we are available. The company tries to give the ultimate satisfaction and luxury depending upon the traveller’s need.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 dark:text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Its portal and services</h4>
                                            <p className="mt-2 dark:text-gray-600">The travel portal also includes a wide range of information on hotels and resorts in Bangladesh, from budget to heritage and luxury, as well as it scrolls down to wildlife safari tours, beach holidays, hill station tours, and adventure tours that include trekking, white water river rafting, peak climbing, mountaineering, mountain biking and motor biking. Moreover, keeping in mind the need of leisure travellers, who seek to capture the rich heritage of Bangladesh, the portal also, offers various heritage, cultural and pilgrimage.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="mt-10 lg:mt-0">
                                <img src={bg3} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                            </div>
                        </div>
                        <div>
                            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                <div className="lg:col-start-2">
                                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Authorization</h3>
                                    <p className="mt-3 text-lg dark:text-gray-600">Tour My Bangladesh Pvt. Ltd. is one of the leading tour operators and travel agents. The company also works in association with prime national agencies in the tourism industry such as Bangladeshi Association of Tour Operators (BATO) and Bangladeshi Mountaineering Foundation. These memberships are a proof of the credibility of our services in the business. </p>
                                    <div className="mt-12 space-y-12">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 dark:text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Department of Tourism</h4>
                                                <p className="mt-2 dark:text-gray-600">It is the axis of tourism in Bangladesh that formulates the rules and regulations and directs various central and state travel agencies and private sector tour operators to develop and promote tourism in our country.</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 dark:text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Our Clients</h4>
                                                <p className="mt-2 dark:text-gray-600">We are here to render the best services to our clients who are part of our goal. Our clients, over the years, multiplied from small enterprises to Fortune 500 companies that include both the private and public sector undertakings and thus leading us to spread all over the nation.</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 dark:text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Testimonials</h4>
                                                <p className="mt-2 dark:text-gray-600">Travellers’ feedbacks are our assets. It helps us to gain our confidence level and improve our services to meet every client needs. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                    <img src={bg4} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div >
    );
};

export default About;
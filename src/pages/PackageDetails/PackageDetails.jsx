import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import { Controller, useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

const PackageDetails = () => {

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const { refetch, data: packages = [] } = useQuery({
        queryKey: ['packageDetails'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/package/${id}`)
            // console.log(res.data)
            return res.data;

        }

    });

    const { data: guides = [] } = useQuery({
        queryKey: ['guidesDetail'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/guide')
            // console.log(res.data)
            return res.data;

        }

    });



    const {
        control,
        setValue,
        register,
        handleSubmit,
        reset

    } = useForm();
    const [date, setDate] = React.useState(new Date(Date.now()));


    const onSubmit = data => {
        // console.log(data);
        const { Email, PackageName, PhotoURL, Price, TourDate, TourGuide, UserName } = data;
        const newPost = { Email, PackageName, PhotoURL, Price, TourDate, TourGuide, UserName };
        // console.log(newPost);
        axios.post('http://localhost:5000/booking', newPost)
            .then(res => {
                // console.log(res.data)
                if (res.data.insertedId) {
                    reset()
                    Swal.fire({

                        icon: "success",
                        title: 'Review Added',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    document.getElementById('my_modal_1').showModal()
                }
            })
    }




    const handleChange = (dateChange) => {
        setValue("TourDate", dateChange, {
            shouldDirty: true
        });
        setDate(dateChange);
    };
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



            {/* tour guide */}
            <div className="container flex flex-col  mb-5 mt-10">
                <h1 className=" lg:text-4xl text-xl font-semibold leading-none text-start"> Tour Guide</h1>

            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4  '>
                {
                    guides.map(item =>
                        <Link to={`/tourGuideProfile/${item._id}`}>
                            <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                                <img src={item.profilePicture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold tracking-wide">{item.name}</h2>
                                        <p className="dark:text-gray-800">{item.phone}</p>
                                    </div>
                                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-default-600 dark:text-gray-50">Read more</button>
                                </div>
                            </div>
                        </Link>


                    )
                }
            </div>



            {/* booking form */}
            <div className="container flex flex-col  mb-5 mt-10">
                <h1 className=" lg:text-4xl text-xl font-semibold leading-none text-start"> Book Your Tour Today</h1>

            </div>
            {/* form */}

            {
                user &&
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" ">
                    <div className=" grid gap-3 w-full justify-center mb-3">

                        <div className="grid lg:flex gap-3 w-full">
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Package Name
                                    <input type="text" readOnly defaultValue={packages.tripTitle} name="packageName" className="grow w-full" placeholder="Package name"

                                        {...register("PackageName")}
                                    />
                                </label>
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Price
                                    <input type="text" readOnly defaultValue={packages.price} name="price" className="grow w-full" placeholder="Price"

                                        {...register("Price")}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="grid lg:flex gap-3 w-full">
                            <div className="form-control lg:w-1/2 ">
                                <label className="input input-bordered flex items-center gap-2">
                                    Tour Date

                                    <FaCalendarAlt />
                                    <Controller
                                        name="TourDate"
                                        control={control}
                                        // defaultValue={date}
                                        render={() => (
                                            <DatePicker
                                                selected={date}
                                                placeholderText="Select date"
                                                onChange={handleChange}
                                            />
                                        )}
                                    />


                                    {/* <Controller
                                        control={control}
                                        name='TourDate'
                                        render={({ field }) => (
                                            <DatePicker
                                                placeholderText='Select date'
                                                onChange={(date) => field.onChange(date)}
                                                selected={field.value}
                                            />
                                        )}

                                    /> */}





                                </label>
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Tour Guide

                                    <select

                                        className="item"
                                        name="tourGuide"
                                        style={{ width: "200px" }}
                                        {...register("TourGuide")}
                                    >

                                        {
                                            guides.map(item => <option >{item.name}</option>)

                                        }



                                    </select>

                                </label>
                            </div>
                        </div>


                        <div className="grid lg:flex gap-3 w-full">
                            <div className="form-control lg:w-1/2 ">
                                <label className="input input-bordered flex items-center gap-2">
                                    User Email
                                    <input type="text" readOnly defaultValue={user.email}
                                        name="email" className="grow w-full" placeholder="Email"

                                        {...register("Email")}
                                    />
                                </label>
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    User Name
                                    <input type="text" readOnly defaultValue={user.displayName} name="user" className="grow w-full" placeholder="User Name"

                                        {...register("UserName")}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="form-control ">
                            <label className="input input-bordered flex items-center gap-2">
                                User Photo URL                            <input type="text" readOnly defaultValue={user.photoURL} name="photo" className="grow w-full" placeholder="User Photo URL"


                                    {...register("PhotoURL")}
                                />
                            </label>
                        </div>

                    </div>
                    <div className=" flex justify-center w-full">

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {/* <button className="btn" onClick={handleModal}>open modal</button> */}
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">

                                <p className="py-4">Confirm Your Booking</p>
                                <Link to='/'><a className='text-green-400' href="">See Your bookings here--My Booking Page</a></Link>

                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>


                        <input type="submit" value="Book Now" className="btn  w-1/2  text-white bg-green-400 " />
                    </div>
                </form>
            }



        </div>
    );
};

export default PackageDetails;
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

const GuideProfile = () => {
    const { user } = useContext(AuthContext);
    const {

        register,
        handleSubmit,
        reset

    } = useForm();
    const onSubmit = data => {
        console.log(data);
        const { profilePicture, email, name, phone, address, education, skillOne, skillTwo, skillThree, position, company, duration, positionTwo, companyTwo, durationTwo } = data;
        const newPost = { profilePicture, email, name, phone, address, education, skillOne, skillTwo, skillThree, position, company, duration, positionTwo, companyTwo, durationTwo };
        console.log(newPost);
        axios.post('http://localhost:5000/guide', newPost)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    reset()
                    Swal.fire({

                        icon: "success",
                        title: 'Profile Added',
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 '>Guide's Profile</h1>
            </div>



            <div className="hero w-full  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="lg:text-5xl font-bold">{user.displayName}</h1>
                        <p className="lg:py-6">{user.email}</p>

                    </div>
                </div>
            </div>

            {/* profile adding form */}
            <div className="container flex flex-col  mb-5 mt-10">
                <h1 className=" lg:text-4xl text-xl font-semibold leading-none text-start"> Add Your Profile Here</h1>

            </div>

            {/* form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" ">
                <div className=" grid gap-3 w-full justify-center mb-3">
                    <div className="form-control ">
                        <label className="input input-bordered flex items-center gap-2">
                            Photo URL                            <input type="text" readOnly defaultValue={user.photoURL} name="photo" className="grow w-full" placeholder="Photo URL"
                                {...register("profilePicture")}
                            />
                        </label>
                    </div>
                    <div className="grid lg:flex gap-3 w-full">
                        <div className="form-control lg:w-1/2 ">
                            <label className="input input-bordered flex items-center gap-2">
                                User Email
                                <input type="text" readOnly defaultValue={user.email}
                                    name="email" className="grow w-full" placeholder="Email"
                                    {...register("email")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="input input-bordered flex items-center gap-2">
                                User Name
                                <input type="text" readOnly defaultValue={user.displayName} name="user" className="grow w-full" placeholder="User Name"
                                    {...register("name")}
                                />
                            </label>
                        </div>
                    </div>

                    <div className="grid lg:flex gap-3 w-full">
                        <div className="form-control lg:w-1/2">
                            <label className="input input-bordered flex items-center gap-2">
                                Phone
                                <input type="text" name="phone" className="grow w-full" placeholder="Phone"
                                    {...register("phone")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="input input-bordered flex items-center gap-2">
                                Address
                                <input type="text" name="country" className="grow w-full" placeholder="Address"
                                    {...register("address")}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="grid lg:flex gap-3 w-full">
                        <div className="form-control lg:w-1/2 ">
                            <label className="input input-bordered flex items-center gap-2">
                                Education
                                <input type="text" name="education" className="grow w-full" placeholder="Education"
                                    {...register("education")}
                                />
                            </label>
                        </div>

                    </div>
                    <h1>Skills *</h1>
                    <div className="grid lg:flex gap-3 w-full">
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Skill One
                                <input type="text" name="skillOne" className="grow w-full" placeholder="Skill One"
                                    {...register("skillOne")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Skill Two
                                <input type="text" name="skillTwo" className="grow w-full" placeholder="Skill Two"
                                    {...register("skillTwo")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Skill Three                         <input type="text" name="skillThree" className="grow w-full" placeholder="Skill Three"
                                    {...register("skillThree")}
                                />
                            </label>
                        </div>
                    </div>
                    <h1>Experience *</h1>
                    <div className="grid lg:flex gap-3 w-full">
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Position
                                <input type="text" name="position" className="grow w-full" placeholder="Position"
                                    {...register("position")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Company
                                <input type="text" name="company" className="grow w-full" placeholder="Company"
                                    {...register("company")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Duration                       <input type="text" name="duration" className="grow w-full" placeholder="Duration"
                                    {...register("duration")}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="grid lg:flex gap-3 w-full">
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Position Two
                                <input type="text" name="positionTwo" className="grow w-full" placeholder="Position Two"
                                    {...register("positionTwo")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Company Two
                                <input type="text" name="companyTwo" className="grow w-full" placeholder="Company Two"
                                    {...register("companyTwo")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Duration Two                       <input type="text" name="durationTwo" className="grow w-full" placeholder="Duration Two"
                                    {...register("durationTwo")}
                                />
                            </label>
                        </div>
                    </div>



                </div>
                <div className=" flex justify-center w-full">
                    <input type="submit" value="Add Profile" className="btn  w-1/2  text-white bg-green-400 " />
                </div>
            </form>


        </div>
    );
};

export default GuideProfile;
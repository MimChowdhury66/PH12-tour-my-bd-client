import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const {

        register,
        handleSubmit,
        reset

    } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const { spot, reviewerEmail, reviewerName, reviewText } = data;
        const newPost = { spot, reviewerEmail, reviewerName, reviewText };
        console.log(newPost);
        axios.post('http://localhost:5000/story', newPost)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    reset()
                    Swal.fire({

                        icon: "success",
                        title: 'Review Added',
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }

    return (
        <div>
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 '>User Profile</h1>
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


            {/* add story */}
            <div className="container flex flex-col  mb-5 mt-10">
                <h1 className=" lg:text-4xl text-xl font-semibold leading-none text-start"> Add Your Story Here</h1>

            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" ">
                <div className=" grid gap-3 w-full justify-center mb-3">



                    <div className="form-control ">
                        <label className="input input-bordered flex items-center gap-2">
                            Spot Name                          <input type="text" name="photo" className="grow w-full" placeholder="Spot Name"


                                {...register("spot")}
                            />
                        </label>
                    </div>

                    <div className="grid lg:flex gap-3 w-full">
                        <div className="form-control lg:w-1/2 ">
                            <label className="input input-bordered flex items-center gap-2">
                                User Email
                                <input type="text" readOnly defaultValue={user.email}
                                    name="email" className="grow w-full" placeholder="Email"

                                    {...register("reviewerEmail")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="input input-bordered flex items-center gap-2">
                                User Name
                                <input type="text" readOnly defaultValue={user.displayName} name="user" className="grow w-full" placeholder="User Name"

                                    {...register("reviewerName")}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="form-control ">
                        <label className="input input-bordered flex items-center gap-2">
                            Add Story                           <input type="text" name="story" className="grow w-full" placeholder="User Photo URL"


                                {...register("reviewText")}
                            />
                        </label>
                    </div>

                </div>
                <div className=" flex justify-center w-full">


                    <input type="submit" value="Add Your Story" className="btn  w-1/2  text-white bg-green-400 " />
                </div>
            </form>
        </div>
    );
};

export default UserProfile;
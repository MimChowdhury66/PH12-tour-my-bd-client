import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddPackages = () => {
    const {

        register,
        handleSubmit,
        reset

    } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const { photoUrl, tripTitle,price ,TourType,travelPhoto ,photoUrlFour,photoUrlThree,photoUrlTwo,tourPlanOne,tourPlanTwo,tourPlanThree} = data;
        const newPost = { photoUrl, tripTitle,price,TourType,travelPhoto,photoUrlFour,photoUrlThree,photoUrlTwo,tourPlanOne,tourPlanTwo,tourPlanThree};
        // console.log(newPost);
        axios.post('http://localhost:5000/package', newPost)
            .then(res => {
                // console.log(res.data)
                if (res.data.insertedId) {
                    reset()
                    Swal.fire({

                        icon: "success",
                        title: 'Package Added',
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 '>Add Package</h1>
            </div>


            {/* add package form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" ">
                <div className=" grid gap-3 w-full justify-center mb-3">
                    <div className="form-control ">
                        <label className="input input-bordered flex items-center gap-2">
                            Photo URL                            <input type="text" name="photo" className="grow w-full" placeholder="Photo URL"
                                {...register("photoUrl")}
                            />
                        </label>
                    </div>
                    <div className="grid lg:flex gap-3 w-full">
                        <div className="form-control lg:w-1/2">
                            <label className="input input-bordered flex items-center gap-2">
                                Trip Title
                                <input type="text" name="tripTitle" className="grow w-full" placeholder="Trip Title"
                                    {...register("tripTitle")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="input input-bordered flex items-center gap-2">
                                Price
                                <input type="text" name="price" className="grow w-full" placeholder="Price"
                                    {...register("price")}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="grid lg:flex gap-3 w-full">
                        <div className="form-control lg:w-1/2 ">
                            <label className="input input-bordered flex items-center gap-2">
                                TourType
                                <input type="text" name="TourType" className="grow w-full" placeholder="TourType"
                                    {...register("TourType")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="input input-bordered flex items-center gap-2">
                                Travel Photo Url
                                <input type="text" name="travelPhoto" className="grow w-full" placeholder="Travel Photo Url"
                                    {...register("travelPhoto")}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="grid lg:flex gap-3 w-full">
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Photo Url Four
                                <input type="text" name="photoUrlFour" className="grow w-full" placeholder="Photo Url Four"
                                    {...register("photoUrlFour")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Photo Url Three
                                <input type="text" name="photoUrlThree" className="grow w-full" placeholder="Photo Url Three"
                                    {...register("photoUrlThree")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Photo Url Two                    <input type="text" name="photoUrlTwo" className="grow w-full" placeholder="Photo Url Two"
                                    {...register("photoUrlTwo")}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="grid lg:flex gap-3 w-full">
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Tour Plan Day One
                                <input type="text" name="tourPlanOne" className="grow w-full" placeholder="Tour Plan Day One"
                                    {...register("tourPlanOne")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Tour Plan Day Two
                                <input type="text" name="tourPlanTwo" className="grow w-full" placeholder=" Tour Plan Day Two"
                                    {...register("tourPlanTwo")}
                                />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/3">
                            <label className="input input-bordered flex items-center gap-2">
                                Tour Plan Day Three                  <input type="text" name="tourPlanThree" className="grow w-full" placeholder=" Tour Plan Day Three   "
                                    {...register("tourPlanThree")}
                                />
                            </label>
                        </div>
                    </div>



                </div>
                <div className=" flex justify-center w-full">
                    <input type="submit" value="Add Package" className="btn  w-1/2  text-white bg-green-400 " />
                </div>
            </form>
        </div>
    );
};

export default AddPackages;
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const TourGuideProfile = () => {
    const { user } = useContext(AuthContext);

    const { id } = useParams();

    const { refetch: guideRefetch, data: guide = [] } = useQuery({
        queryKey: ['guide'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/guide/${id}`)
            // console.log(res.data)
            return res.data;

        }

    });
    const { refetch, data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/review/${id}`)
            console.log(res.data)
            return res.data;

        }

    });

    const {
        register,
        handleSubmit,

    } = useForm();

    const onSubmit = data => {
        if (user) {
            // console.log(data)
            const { email } = user;
            const { rating, makeComment } = data;
            const { _id } = guide;
            const newPost = { rating, makeComment, userEmail: email, guideId: _id };
            console.log(newPost);
            axios.post('http://localhost:5000/review', newPost)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({

                            icon: "success",
                            title: 'Review Added',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Login first to add item into the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, confirm it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }


    }
    return (
        <div>
            <div className="container flex flex-col items-center mx-auto mb-10 mt-10">
                <h1 className=" lg:text-4xl font-semibold leading-none text-center">Tour Guide Profile Page </h1>
            </div>


            <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={guide.profilePicture} />
                        <div className='grid text-center'>
                            <h1 className="lg:text-5xl font-bold">{guide.name}</h1>

                            <h1 className="lg:text-xl ">{guide.email}</h1>
                        </div>
                        <div>

                            <p className="pt-6 font-bold underline text-center">Contact Details</p>
                            <p className="text-center">Phone: {guide.phone}</p>
                            <p className="text-center">Address: {guide.address}</p>
                            <p className="pt-6 font-bold underline text-center">Education</p>
                            <p className="text-center"> {guide.education}</p>
                            <p className="pt-6 font-bold underline text-center">Skills</p>
                            <p className="text-center"> {guide.skillOne}</p>
                            <p className="text-center"> {guide.skillTwo}</p>
                            <p className="text-center"> {guide.skillThree}</p>
                            <p className="pt-6 font-bold underline text-center">WorkExperience</p>
                            <p className="text-center">Position: {guide.position}</p>
                            <p className="text-center">Company: {guide.company}</p>
                            <p className="text-center"> Duration: {guide.duration}</p>


                        </div>
                    </div>
                </div>
            </div>
            {/* reviews */}
            <div>
                <div className="container flex flex-col items-center mx-auto mb-10 mt-10">
                    <h1 className=" lg:text-4xl font-semibold leading-none text-center">All Reviews  </h1>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table text-center mt-5 mb-5">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>#</th>
                                    <th>Ratings</th>
                                    <th>Comments</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    reviews.map((item, index) =>
                                        // console.log(item);
                                        <tr>

                                            <th>{index + 1}</th>

                                            <td>{item.rating}</td>
                                            <td>{item.makeComment}</td>

                                        </tr>
                                    )
                                }


                            </tbody>


                        </table>
                    </div>
                </div>
            </div>

            {/* add comment section */}
            <div>
                <div className="container flex flex-col items-center mx-auto mb-10 mt-10">
                    <h1 className=" lg:text-4xl font-semibold leading-none text-center">Add Review  </h1>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" ">
                    <div className=" grid gap-3 w-full justify-center mb-3">


                        <div className="grid  gap-3 w-full">
                            <div className="form-control  ">
                                <label className="input input-bordered flex items-center gap-2">
                                    Rating
                                    <input required type="text" name="rating" className="grow w-full" placeholder="Rating" {...register("rating")} />
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="input input-bordered flex items-center gap-2">
                                    Make Comment
                                    <input required type="text" name="makeComment" className="grow w-full" placeholder="  Make Comment" {...register("makeComment")} />
                                </label>
                            </div>
                        </div>




                    </div>
                    <div className=" flex justify-center w-full">
                        <input type="submit" value="Add Review" className="btn  w-1/2  text-white bg-green-400 " />
                    </div>
                </form>




            </div>

        </div>
    );
};

export default TourGuideProfile;
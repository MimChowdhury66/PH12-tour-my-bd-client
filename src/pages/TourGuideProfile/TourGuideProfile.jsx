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
    const { refetch, data: guide = [] } = useQuery({
        queryKey: ['guide'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/guide/${id}`)
            // console.log(res.data)
            return res.data;

        }

    });


    const {
        register,
        handleSubmit,

    } = useForm();

    const onSubmit = data => {

        console.log(data)
        // const { userEmail: email, displayName, photoURL } = user;
        const { rating, makeComment } = data;
        const { name, email, profilePicture, phone, address, education, skillOne, skillTwo, skillThree, position, company, duration, positionTwo, companyTwo, durationTwo } = guide;
        const newPost = { rating, makeComment, name, email, profilePicture, phone, address, education, skillOne, skillTwo, skillThree, position, company, duration, positionTwo, companyTwo, durationTwo };
        console.log(newPost);
        axios.post('http://localhost:5000/guide', newPost)
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

                                {/* {
                                            guides.map((item, index) =>
                                                // console.log(item);
                                                <tr>

                                                    <th>{index + 1}</th>
                                                    
                                                    <td>{item.name}</td>
                                                    <td>{item.phone}</td>
                                                    
                                                </tr>
                                            )
                                        } */}


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
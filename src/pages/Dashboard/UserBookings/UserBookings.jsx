import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const UserBookings = () => {

    const { user } = useContext(AuthContext);


    const { data: bookings = [] } = useQuery({
        queryKey: ['getBookings'],
        queryFn: async () => {
            const res = await axios.get(`https://tour-my-bangladesh-server.vercel.app/booking/${user.email}`)
            // console.log(res.data)
            return res.data;

        }

    });
    return (
        <div className='full'>
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 '>My Bookings</h1>
            </div>

            <div className='full'>
            <div className="overflow-x-auto">
                <table className="table  text-center mt-5">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Package Name</th>
                            <th>Tour Guide Name</th>
                            <th>Tour Date</th>
                            <th>Tour Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((item, index) =>
                                // console.log(item);
                                <tr>

                                    <th>{index + 1}</th>
                                    <td>{item.PackageName}</td>
                                    <td>{item.TourGuide}</td>
                                    <td>{item.TourDate}</td>
                                    <td>{item.Price}</td>
                                    <td></td>
                                    <td className="flex gap-2 m-2">
                                        <button className="btn text-black mx-auto  ">Pay</button>
                                        <button className="btn text-black mx-auto  ">Cancel</button>

                                        {/* <Link to={`/tourGuideProfile/${item._id}`}><button
                                                            // onClick={() => handleDelete(item._id)}
                                                            className="btn text-black mx-auto  ">Details</button></Link> */}
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>


                </table>
            </div>
            </div>


        </div>
    );
};

export default UserBookings;
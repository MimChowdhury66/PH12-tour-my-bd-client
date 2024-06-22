import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import PackageCard from '../../PackageCard/PackageCard';
import axios from 'axios';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from 'sweetalert2';

const UserWishlist = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: wishlist = [] } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await axios.get(`https://tour-my-bangladesh-server.vercel.app/wishlist/${user.email}`)
            // console.log(res.data)
            return res.data;

        }

    });


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://tour-my-bangladesh-server.vercel.app/wishlistDelete/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                        refetch()
                    })

            }
        });
    }

    return (
        <div>
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 '>My Wishlist</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center mt-5">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>#</th>
                                <th>Image</th>
                                <th>Tour Type</th>
                                <th>Trip Title</th>
                                <th>price</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                wishlist.map((item, index) =>
                                    // console.log(item);
                                    <tr>

                                        <th>{index + 1}</th>
                                        <td><div className="mask mask-squircle w-12 h-12 mx-auto">
                                            <img src={item.photoUrl} alt="Avatar Tailwind CSS Component" />
                                        </div></td>
                                        <td>{item.TourType}</td>
                                        <td>{item.tripTitle}</td>
                                        <td>{item.price}</td>
                                        <td className="flex gap-2 m-2">

                                            <button
                                                onClick={() => handleDelete(item.packageId)}
                                                className="btn text-red-400 mx-auto  "><RiDeleteBin6Fill />
                                            </button>

                                            <Link to={`/packageDetails/${item.packageId}`}><button

                                                className="btn text-black mx-auto  ">View Details</button></Link>
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

export default UserWishlist;
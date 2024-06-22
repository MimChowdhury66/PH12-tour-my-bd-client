import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaTrash, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
const ManageUser = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['requestToAdmin'],
        queryFn: async () => {
            const res = await axios.get('https://tour-my-bangladesh-server.vercel.app/users')
            // console.log(res.data)
            return res.data;

        }

    });

    const handleAdmin = (user) => {

        axios.patch(`https://tour-my-bangladesh-server.vercel.app/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is already Admin `,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })




    }
    const handleGuide = (user) => {

        axios.patch(`https://tour-my-bangladesh-server.vercel.app/users/guide/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is Guide now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is already Guide `,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })




    }


    return (
        <div>
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 '>Requested Users {users.length} </h1>
            </div>

            <div className='join'>
                <div>
                    <input className='input input-bordered join-item'
                        placeholder='Search User name'
                    // value={search}
                    // onChange={handleSearchChange}
                    />

                </div>
                <div className='indicator'>
                    <button className='btn bg-blue-400 join-item'
                    // onClick={handleSearch}
                    >Search</button>
                </div>

            </div>

            {/* user form */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th> Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, index) =>
                                    // console.log(item);
                                    <tr>

                                        <th>{index + 1}</th>

                                        <td>{user.name} </td>
                                        <td>{user.email}</td>
                                        <td>{user.role === 'admin' ? 'admin' : user.role === 'guide' ? 'guide' : 'user'}</td>
                                        <td>
                                            {/* {user.role === 'admin' ? 'Admin' : <button
                                                onClick={() => handleMakeAdmin(user._id)}
                                                className="btn text-black  "><FaUser className='text-[#D1A054]'></FaUser></button>} */}
                                            <button

                                                onClick={() => handleAdmin(user)}

                                                className="btn text-black  ">Make Admin</button>

                                            <button
                                                onClick={() => handleGuide(user)}
                                                className="btn text-black  ">Make Tour Guide
                                            </button>
                                        </td>

                                        <td className="flex gap-2 m-2">


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

export default ManageUser;
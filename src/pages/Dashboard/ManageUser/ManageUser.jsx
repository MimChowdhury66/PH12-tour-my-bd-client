import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaTrash, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
const ManageUser = () => {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const { data: users = [] } = useQuery({
        queryKey: ['requestToAdmin', search, sort],
        queryFn: async () => {
            const res = await axios.get(`https://tour-my-bangladesh-server.vercel.app/users?search=${search}&sort=${sort}`)
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

    const handleSearch = (event) => {
        event.preventDefault();
        const search = event.target.search.value;
        setSearch(search);
    };

    return (
        <div className='w-full'>
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 '>Requested Users {users.length} </h1>
            </div>

            <form
                onSubmit={handleSearch}
                className="flex flex-col my-3 md:flex-row gap-3"
            >
                <div className="flex">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search for by email you like"
                        className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-green-400 focus:outline-none focus:border-green-300"
                    />
                    <button
                        type="submit"
                        className="bg-green-300 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
                    >
                        Search

                    </button>
                </div>
                <select
                    onChange={(e) => setSort(e.target.value)}
                    id="roleType"
                    name="roleType"
                    className="w-full h-10 border-2 border-green-300 focus:outline-none focus:border-green-300 text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                >
                    <option value="All" selected="">
                        Filter By Role
                    </option>
                    <option value="user">User</option>
                    <option value="guide">Guide</option>
                    <option value="admin">Admin</option>
                </select>
            </form>

            {/* user form */}
            <div className='w-full'>
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
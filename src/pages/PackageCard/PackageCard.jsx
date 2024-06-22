import axios from 'axios';
import React, { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PackageCard = ({ item }) => {
    const { _id, TourType, tripTitle, price, photoUrl } = item;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);


    const handleWishlist = packages => {
        if (user && user.email) {
            const wishlist = {
                TourType, tripTitle, price, photoUrl,
                packageId: _id, email: user.email
            }
            // console.log(cartItem)
            axios.post('https://tour-my-bangladesh-server.vercel.app/wishlist', wishlist)
                .then(res => {
                    // console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({

                            icon: "success",
                            title: `${tripTitle} added to Your wishlist`,
                            showConfirmButton: false,
                            timer: 1500
                        });

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
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">


                <img src={photoUrl} alt="Shoes" className="rounded-xl relative" />
                <button onClick={() => handleWishlist(item)} className='btn bg-red-400 absolute bottom-1/2'> <FaHeart /></button>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Trip-Title: {tripTitle} </h2>
                <p>Tour-Type: {TourType}</p>
                <p>Price: ${price}</p>

                <div className="card-actions">
                    <Link to={`/packageDetails/${_id}`}><button className="btn bg-green-400">View Package</button></Link>

                </div>
            </div>
        </div>
    );
};

export default PackageCard;
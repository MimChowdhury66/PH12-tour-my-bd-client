import React from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PackageCard = ({ item }) => {
    const { _id, TourType, tripTitle, price, photoUrl } = item;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">


                <img src={photoUrl} alt="Shoes" className="rounded-xl relative" />
                <button className='btn bg-red-400 absolute bottom-1/2'> <FaHeart /></button>
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
import React from 'react';

const PackageCard = ({ item }) => {
    const {tourType,tripTitle,price,photoUrl } = item;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photoUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Trip-Title: {tripTitle }</h2>
                <p>Tour-Type: { tourType}</p>
                <p>Price: ${ price}</p>
                <div className="card-actions">
                    <button className="btn bg-green-400">View Package</button>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
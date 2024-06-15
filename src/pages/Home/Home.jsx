import React from 'react';
import Banner from '../Banner/Banner';
import Tourism from '../Tourism/Tourism';
import TourType from '../TourType/TourType';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tourism></Tourism>
            <TourType></TourType>
        </div>
    );
};

export default Home;
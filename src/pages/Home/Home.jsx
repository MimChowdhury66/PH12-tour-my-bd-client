import React from 'react';
import Banner from '../Banner/Banner';
import Tourism from '../Tourism/Tourism';
import TourType from '../TourType/TourType';
import Story from '../Story/Story';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tourism></Tourism>
            <TourType></TourType>
            <Story></Story>
        </div>
    );
};

export default Home;
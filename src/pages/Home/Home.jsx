import React from 'react';
import Banner from '../Banner/Banner';
import Tourism from '../Tourism/Tourism';
import TourType from '../TourType/TourType';
import Story from '../Story/Story';
import { motion, useScroll, useSpring } from "framer-motion";
import './Motion.css'
const Home = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <div>
            <motion.div className="progress-bar my-14 z-40" style={{ scaleX }} />
            <Banner></Banner>
            <Tourism></Tourism>
            <TourType></TourType>
            <Story></Story>
        </div>
    );
};

export default Home;
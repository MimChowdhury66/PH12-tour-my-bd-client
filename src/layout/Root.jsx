import React from 'react';
import Header from '../pages/Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Root;
import React from 'react';
import bg from '../../../public/contact.jpg'
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div>
            <div className="hero min-h-[400px]" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">

                    </div>
                </div>
            </div>
            <div className='mt-5 text-center'>
                <h1 className="mb-5 lg:text-5xl font-bold">Contact Us</h1>

                <p className='text-center'><span className='text-xl text-red-700'>Corporate Office</span> <br />

                    Tour My Bangladesh Pvt. Ltd: <br />
                    C - 81C, Sector - 8, <br />
                    Dhanmondi - 201301, UP, Bangladesh <br />
                    Tel: +91-120-4052615-99 (85 hunting lines are available) <br />
                    Mob: +91-9212777223/24 <br />
                    Fax: +91-120-4052699 <br />
                    Email: info@tourmybangladesh.com <br />
                    Skype : tourmybangladesh</p>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';
import logo from '../../../public/logo.png'
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-slate-800 text-gray-800 mt-5">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
                <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-default-600">
                        <img className='w-[50px]' src={logo} alt="" /><a className="lg:text-2xl font-bold text-blue-400"> </a>
                    </div>
                    <span className="self-center lg:text-2xl text-green-400 font-bold">Tour <span className='text-red-700'>My Bangladesh</span></span>
                </a>
            </div>
            <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                <div className="space-y-3">
                    <h3 className="tracking-wide uppercase text-white">COMPANY</h3>
                    <ul className="space-y-1">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-green-400' : 'font-bold text-white'}>Home</NavLink></li>
                            <li><NavLink to="/community" className={({ isActive }) => isActive ? 'font-bold text-green-400' : 'font-bold text-white'}>Community</NavLink></li>
                            <li><NavLink to="/blogs" className={({ isActive }) => isActive ? 'font-bold text-green-400' : 'font-bold text-white'}>Blogs
                                </NavLink></li>
                                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold text-white'}>About Us</NavLink></li>
                                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold text-white'}>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="space-y-3 text-white">
                    <h3 className="tracking-wide uppercase text-white">LEGAL POLICY</h3>
                    <ul className="space-y-1">
                        <li>
                            <a rel="noopener noreferrer" href="#">Privacy</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Terms of Service</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3 text-white">
                    <h3 className="uppercase text-white">Others</h3>
                    <ul className="space-y-1">
                        <li>
                            <a rel="noopener noreferrer" href="#">Public API</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Documentation</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Guides</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3 text-white">
                    <div className="uppercase text-white">Social media</div>
                    <div className="flex justify-start space-x-3">
                        <a rel="noopener noreferrer" href="https://www.facebook.com/rajkonna.m2m?mibextid=ZbWKwL" title="Facebook" className="flex items-center p-1 text-2xl ">
                            <FaFacebook />
                        </a>
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mim-chowdhury-304384196/" title="Twitter" className="flex items-center p-1 text-2xl ">
                            <FaLinkedin />
                        </a>

                    </div>
                </div>
            </div>
        </div>
        <div className="py-6 text-sm text-center text-white">CopyRight©2024, Tour My Bangladesh Pvt. Ltd</div>
    </footer>
    );
};

export default Footer;
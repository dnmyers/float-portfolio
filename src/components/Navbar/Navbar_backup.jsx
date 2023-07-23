/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion } from 'framer-motion';

import NavItem from './NavItem';

const Navbar = (props) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const navLinks = props.navLinks || {};

    return (
        <nav className="bg-neutral-3 border-b w-full md:static md:text-sm md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <img
                            src="/images/dnm2.png"
                            width={120}
                            height={50}
                            alt="DNM logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-blue-2" onClick={() => setShowSidebar(!showSidebar)}>
                            {
                                showSidebar ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 text-blue-1 md:block md:pb-0 md:mt-0 ${showSidebar ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navLinks.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-blue-1 hover:animate-pulse shadow-xl">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
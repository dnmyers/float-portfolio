import { Link } from "react-router-dom";
import { MarkGithubIcon } from "@primer/octicons-react";
import { motion } from 'framer-motion';

const Footer = () => {
    const footerNavs = [
        {
            href: "/",
            name: "Home",
        },
        {
            href: "/projects",
            name: "Projects",
        },
        {
            href: "/about",
            name: "About",
        },
        {
            href: "/contact",
            name: "Contact",
        },
    ];

    return (
        <div className="bg-gray-900">
        <footer className='text-gray-500 container px-4 py-5 mx-auto md:px-8'>
            <div className='max-w-lg sm:mx-auto sm:text-center'>
                <motion.div
                    initial={{
                        scale: 0,
                        opacity: 0,
                        y: 50
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.3
                        }
                    }}
                    whileHover={{
                        scale: 1.1
                    }}
                    whileTap={{
                        scale: 0.9
                    }}
                >
                    <Link to='/'>
                        <img src='/images/logo2.svg' className='w-32 sm:mx-auto' />
                    </Link>
                </motion.div>
                <p className='leading-relaxed mt-2 text-[15px]'>
                    Thank you for taking the time to check out my website! I
                    look forward to hearing from you and hope to work with you
                    soon!
                </p>
            </div>
            <ul className='items-center text-neutral-500 justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0'>
                {footerNavs.map((item, i) => (
                    <li key={i}>
                        <Link to={item.href} key={i}>
                            <motion.div
                                whileHover={{
                                    scale: 1.1,
                                    color: 'yellow'
                                }}
                                whileTap={{
                                    scale: 0.9
                                }}
                            >
                                {item.name}
                            </motion.div>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='mt-8 items-center justify-between sm:flex'>
                <div className='mt-4 sm:mt-0'>
                    &copy; 2023 - Daniel Myers - All rights reserved.
                </div>
                <div className='mt-6 sm:mt-0'>
                    <ul className='flex items-center space-x-4'>
                        {/* <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
                            <a href='javascript:void()'>
                                <svg
                                    className='svg-icon w-6 h-6 text-blue-400'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fill='none'
                                        d='M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266'
                                    ></path>
                                </svg>
                            </a>
                        </li> */}

                        {/* <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
                            <a href='javascript:void()'>
                                <svg viewBox='0 0 24 24' width='24' height='24'>
                                    <path
                                        fill='#0077B5'
                                        d='M20.5,0H3.5C1.6,0,0,1.6,0,3.5v17c0,1.9,1.6,3.5,3.5,3.5h17c1.9,0,3.5-1.6,3.5-3.5v-17C24,1.6,22.4,0,20.5,0zM7.5,20H4.5V9h3V20zM6,8.3c-1,0-1.7-0.8-1.7-1.7c0-1,0.8-1.7,1.7-1.7s1.7,0.8,1.7,1.7C7.7,7.5,7,8.3,6,8.3zM20,20h-3.1v-5.3c0-1.3-0.5-2.2-1.7-2.2c-0.9,0-1.4,0.6-1.6,1.2c-0.1,0.3-0.1,0.7-0.1,1.1V20h-3.1V9h3v1.5c0.5-0.8,1.4-1.9,3.4-1.9c2.5,0,4.4,1.6,4.4,5.1V20z'
                                    />
                                </svg>
                            </a>
                        </li> */}

                        <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                whileTap={{
                                    scale: 0.9
                                }}
                            >
                                <a 
                                    href='https://www.linkedin.com/in/danielnmyers/'
                                    title="LinkedIn"    
                                >
                                    <svg viewBox='0 0 24 24' width='24' height='24'>
                                        <path
                                            fill='#0077B5'
                                            d='M20.5,0H3.5C1.6,0,0,1.6,0,3.5v17c0,1.9,1.6,3.5,3.5,3.5h17c1.9,0,3.5-1.6,3.5-3.5v-17C24,1.6,22.4,0,20.5,0zM7.5,20H4.5V9h3V20zM6,8.3c-1,0-1.7-0.8-1.7-1.7c0-1,0.8-1.7,1.7-1.7s1.7,0.8,1.7,1.7C7.7,7.5,7,8.3,6,8.3zM20,20h-3.1v-5.3c0-1.3-0.5-2.2-1.7-2.2c-0.9,0-1.4,0.6-1.6,1.2c-0.1,0.3-0.1,0.7-0.1,1.1V20h-3.1V9h3v1.5c0.5-0.8,1.4-1.9,3.4-1.9c2.5,0,4.4,1.6,4.4,5.1V20z'
                                        />
                                    </svg>
                                </a>
                            </motion.div>
                        </li>

                        <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                whileTap={{
                                    scale: 0.9
                                }}
                            >
                                <a
                                    href='https://github.com/dnmyers'
                                    title="Githhub"
                                >
                                    <MarkGithubIcon size={20} />
                                </a>
                            </motion.div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div
                className='absolute inset-0 max-w-md mx-auto h-72 blur-[118px] z-0'
                style={{
                    background:
                        "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
                }}
            ></div> */}
            <style>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
        </div>
    );
};

export default Footer;

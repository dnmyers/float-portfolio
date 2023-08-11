import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from "framer-motion";

import { heroImage } from './heroImage';

const Hero = () => {
    // Hero animations
    const HeroVariants = {
        hidden: {
            opacity: 0,
            translateY: 300,
        },
        visible: {
            opacity: 1,
            translateY: 0,
            transition: {
                ease: "easeOut",
                duration: 1,
            },
        },
    };

    // Button animations
    const ButtonVariants = {
        initial: {
            // backgroundColor: "rgb(0, 208, 251)",
            // color: "rgb(0, 0, 0)",
            scale: 0,
            opacity: 0,
            y: 50
        },
        animate: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            }
        },
        hover: {
            scale: 1.1,
            backgroundColor: "rgb(32, 1, 255)",
            color: "white",
            transition: {
                ease: "easeOut",
                duration: 0.3,
            },
        },
        tap: {
            scale: 0.9,
            transition: {
                ease: "easeOut",
                duration: 0.3,
            },
        },
    };

    // Name bounce animation
    const translateY = useMotionValue(0);
    const opacity = useTransform(translateY, [300, 0], [0, 1]);

    const firstNameLetters = "Daniel".split("");
    const middleInitial = "N.".split("");
    const lastNameLetters = "Myers".split("");

    const letterVariants = {
        bounce: {
            scale: 1.1,
            translateY: [0, -10, 10, 0],
            color: "yellow",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className='bg-gray-900 relative'>
            <section className='relative container mx-auto max-w-screen-xl px-4 items-center lg:flex pt-16 lg:pt-0 md:px-8 lg:flex-grow z-50'>
                <motion.div
                    variants={HeroVariants}
                    initial='hidden'
                    animate='visible'
                    style={{ opacity, translateY }}
                    className='space-y-4 flex-1 md:text-center lg:text-left lg:px-8 z-10'
                >
                    <h1 className='text-white font-bold text-3xl sm:max-lg:text-center pb-2 md:text-4xl xl:text-5xl'>
                        Hi, I&apos;m
                        <span className='text-blue-1 whitespace-nowrap'>
                            &nbsp;
                            {firstNameLetters.map((letter, index) => (
                                <motion.span
                                    style={{ display: "inline-block" }}
                                    key={index}
                                    variants={letterVariants}
                                    whileHover='bounce'
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            &nbsp;
                            {middleInitial.map((letter, index) => (
                                <motion.span
                                    style={{ display: "inline-block" }}
                                    key={index}
                                    variants={letterVariants}
                                    whileHover='bounce'
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            &nbsp;
                            {lastNameLetters.map((letter, index) => (
                                <motion.span
                                    style={{ display: "inline-block" }}
                                    key={index}
                                    variants={letterVariants}
                                    whileHover='bounce'
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </span>
                    </h1>
                    <h2 className="font-semibold text-2xl text-blue-300 sm:max-lg:text-center">Applications Developer</h2>
                    <p className='text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 sm:max-md:text-center'>
                        Welcome to my portfolio website! I create innovative and{" "}
                        efficient solutions to real-world problems. Let&apos;s{" "}
                        build something amazing together!
                    </p>
                    <div className='pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
                    <Link to="/projects">
                            <motion.div
                                variants={ButtonVariants}
                                initial="initial"
                                animate="animate"
                                whileHover='hover'
                                whileTap='tap'
                                className='px-7 py-3 w-full bg-blue-1 text-black font-medium text-center shadow-2xl hover:text-white rounded-md block sm:w-auto z-10'
                            >
                                    View My Projects
                            </motion.div>
                        </Link>
                        <Link to="/about">
                            <motion.div
                                variants={ButtonVariants}
                                initial="initial"
                                animate="animate"
                                whileHover='hover'
                                whileTap='tap'
                                className='mt-5 md:mt-0 px-7 py-3 w-full bg-gray-700 text-white font-medium text-center shadow-2xl hover:text-white rounded-md block sm:w-auto z-10'
                            >
                                    About Me
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    className='flex-1 text-center md:mt-4 lg:mt-0 lg:ml-3 lg:pr-2 sm:max-md:pl-14'
                    initial={{
                        x: 150,
                        opacity: 0,
                        scale: 0
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        x: 0,
                        transition: {
                            ease: "circOut",
                            duration: 1,
                        },
                    }}
                    style={{ opacity }}
                >
                    {heroImage}
                </motion.div>
            </section>
            {/* <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div> */}
            <div
                className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]'
                style={{
                    background:
                        "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                    zIndex: 0
                }}
            ></div>
        </div>
    );
};

export default Hero;

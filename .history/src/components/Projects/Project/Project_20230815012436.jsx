/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { MarkGithubIcon } from "@primer/octicons-react";

const Project = ({ project, index }) => {
    const delay = index * 0.3;

    const ProjectVariants = {
        show: {
            opacity: 1,
            translateY: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                mass: 4,
                ease: "circOut",
                duration: 0.5,
                delay: delay,
            },
        },
        hidden: {
            opacity: 0,
            translateY: 300,
        },
    };

    return (
        <motion.div
            animate='show'
            initial='hidden'
            variants={ProjectVariants}
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.95,
            }}
            className='project max-w-lg mx-auto mt-4 shadow-lg border rounded-md hover:shadow-xl'
            key={project.title}
        >
            <a href={project.href} target='_blank' rel='noreferrer'>
                <img
                    src={project.img}
                    loading='lazy'
                    alt={project.title}
                    className='w-full h-52 rounded-t-md'
                />
                <div className="flex flex-col justify-between">
                    <div className='pt-2 ml-4 mr-4'>
                        <h3 className='text-xl text-gray-900'>{project.title}</h3>
                        <p className='text-gray-400 text-sm mt-1 h-72'>{project.desc}</p>
                    </div>
                    <motion.div
                        whileHover={{
                            scale: 1.1
                        }}
                        whileTap={{
                            scale: 0.95
                        }}
                        className="flex items-center justify-center w-full"
                    >
                        <a
                            href={project.github}
                            target='_blank'
                            rel='noreferrer'
                            title='Project Github Link'
                            className="border rounded-xl p-3 w-full h-full"

                        >
                            <MarkGithubIcon size={24} /> Github
                        </a>
                    </motion.div>
                </div>
            </a>
        </motion.div>
    );
};

export default Project;

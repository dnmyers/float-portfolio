/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const Project = ({ project, index }) => {
    const delay = index * 0.3;

    const ProjectVariants = {
        show: {
            opacity: 1,
            translateY: 0,
            transition: {
                type: 'spring',
                stiffness: 70,
                mass: 4,
                ease: 'circOut',
                duration: 0.5,
                delay: delay
            }
        },
        hidden: {
            opacity: 0,
            translateY: 300
        }
    };

    return (
        <motion.div
            animate="show"
            initial="hidden"
            variants={ProjectVariants}
            whileHover={{ 
                scale: 1.05
            }}
            whileTap={{ 
                scale: 0.95 
            }}
            className='project max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-xl'
            key={project.title}
        >
            <a href={project.href} target="_blank" rel="noreferrer">
                <img
                    src={project.img}
                    loading='lazy'
                    alt={project.title}
                    className='w-full h-52 rounded-t-md'
                />
                {/* <div className='flex project-center mt-2 pt-3 ml-4 mr-2'>
                    <div className='flex-none w-10 h-10 rounded-full'>
                        <img
                            src={project.authorLogo}
                            className='w-full h-full rounded-full'
                            alt={project.authorName}
                        />
                    </div>
                    <div className='ml-3'>
                        <span className='block text-gray-900'>
                            {project.authorName}
                        </span>
                        <span className='block text-gray-400 text-sm'>
                            {project.date}
                        </span>
                    </div>
                </div> */}
                <div className='pt-3 ml-4 mr-2 mb-3'>
                    <h3 className='text-xl text-gray-900'>
                        {project.title}
                    </h3>
                    <p className='text-gray-400 text-sm mt-1'>
                        {project.desc}
                    </p>
                </div>
            </a>
        </motion.div>
    );
};

export default Project;

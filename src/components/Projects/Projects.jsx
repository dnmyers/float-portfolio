/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Project from './Project/Project';

const ProjectsVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 1
        }
    }
};

const Projects = ({ projectsList }) => {  
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView) {
           controls.start('show');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            variants={ProjectsVariants}
            initial="hidden"
            animate={controls}
            className='mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:gap-5'
        >
            <AnimatePresence>
            {
                projectsList.map((project, i) => (
                    <Project project={project} key={i} index={i} />
                ))
            }
            </AnimatePresence>
        </motion.div>
    );
}

export default Projects;
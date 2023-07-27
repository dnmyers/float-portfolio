/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

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
    return (
        <motion.div
            variants={ProjectsVariants}
            initial="hidden"
            animate="show"
            className='mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:gap-5'
        >
            {
                projectsList.map((project, i) => (
                    <Project project={project} key={i} index={i} />
                ))
            }
        </motion.div>
    );
}

export default Projects;
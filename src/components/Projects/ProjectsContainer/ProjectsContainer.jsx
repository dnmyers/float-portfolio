import { motion } from 'framer-motion';

import Projects from '../Projects';
import ProjectsHeader from "../ProjectsHeader/ProjectsHeader";

import projectsList from "../projectsList";

const ProjectsContainer = () => {
    const HeaderVariants = {
        show: {
            opacity: 1,
            translateY: 0,
            transition: {
                type: 'tween',
                ease: 'circIn',
                duration: 0.5,
            }
        },
        hidden: {
            opacity: 0,
            translateY: 300
        }
    };

    return (
        <section 
            className='container mt-12 mx-auto px-4 py-8 max-w-screen-xl md:mt-0 md:px-8' 
            id="projects"
        >
            <motion.div
                variants={HeaderVariants}
                initial="hidden"
                animate="show"
            >
                <ProjectsHeader />
            </motion.div>
            <motion.div 
                initial={{ 
                    opacity: 0
                }}
                animate={{ 
                    opacity: 1, 
                    transition: {
                        delay: 0.5
                    }
                }}
            >
                <Projects projectsList={projectsList} />
            </motion.div>
        </section>
    );
};

export default ProjectsContainer;

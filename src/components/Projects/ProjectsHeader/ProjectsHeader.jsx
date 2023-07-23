import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectsHeaderVariants = {
    visible: {
        opacity: 1,
        translateY: 0,
        transition: {
            type: 'tween',
            ease: 'easeIn',
            duration: 0.5,
        }
    },
    hidden: {
        opacity: 0,
        translateY: 300
    }
}

const ProjectsHeader = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

  return (
        <motion.div 
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={ProjectsHeaderVariants}
            className="text-center"
        >
            <h1 className="text-3xl text-gray-800 font-bold">
                Projects
            </h1>
            <p className="mt-3 text-gray-500">
                These are some of my personal projects.  Some of them I completed for skill paths and classes, and some of them I built for fun.
            </p>
        </motion.div>
    );
}

export default ProjectsHeader;
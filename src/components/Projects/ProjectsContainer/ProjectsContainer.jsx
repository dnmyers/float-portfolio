import Projects from '../Projects';
import ProjectsHeader from "../ProjectsHeader/ProjectsHeader";

import projectsList from "../projectsList";

const ProjectsContainer = () => {
    return (
        <section 
            className='mt-12 mx-auto px-4 py-8 max-w-screen-xl md:px-8' 
            id="projects"
        >
            <ProjectsHeader />
            <Projects projectsList={projectsList} />
        </section>
    );
};

export default ProjectsContainer;

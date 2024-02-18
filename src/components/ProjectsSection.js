import React from "react";
import ProjectCard from './ProjectCard';

const ProjectsSection = (props) => {
    const { projects } = props.lang;
    console.log(projects)

    return (
        <div className="col-md-12 px-5 d-flex flex-column justify-content-center mt-5">
            <h4 className="col-md-12 text-center mb-5 dark-text">Projets</h4>
            <div className="col-md-12 d-flex justify-content-around">
                {projects.map((project, index) => (
                    <ProjectCard key={index} content={project} />
                ))}
            </div>
        </div>
    );
}

export default ProjectsSection;
import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    return (
        //Looping thru all projects. if we have projects then map the projects otherwise don't do anything
        <div className="section project-list">
            
            { projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                )
            } )}
        </div>
    )
}

export default ProjectList;
import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../projectData';

const Project: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const project = projectsData[projectId as keyof typeof projectsData];

    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.image} alt={`${project.title} Screenshot`} style={{ maxWidth: '100%', height: 'auto' }} />
            <p>
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                    View Live Demo
                </a>
            </p>
        </div>
    );
};

export default Project;

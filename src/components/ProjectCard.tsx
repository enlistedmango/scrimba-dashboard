import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    liveDemoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, liveDemoLink }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
                View Live Demo
            </a>
        </div>
    );
};

export default ProjectCard;

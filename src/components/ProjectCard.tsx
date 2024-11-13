// src/components/ProjectCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={link}>View Project</Link>
        </div>
    );
};

export default ProjectCard;

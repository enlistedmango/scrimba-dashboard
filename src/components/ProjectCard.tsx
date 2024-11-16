import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    liveDemoLink: string;
    technologies?: string[];
    category?: string;
    features?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    liveDemoLink,
    technologies,
    category,
    features,
}) => {
    return (
        <div className="project-card">
            <div className="project-header">
                <h3>{title}</h3>
                {category && <span className="category-tag">{category}</span>}
            </div>
            <p>{description}</p>
            {technologies && (
                <div className="tech-stack">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
            {features && (
                <ul className="feature-list">
                    {features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
            )}
            <a
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer">
                View Live Demo
            </a>
        </div>
    );
};

export default ProjectCard;

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../projectData';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Scrimba Projects Dashboard</h1>
            <div className="project-list">
                {Object.entries(projectsData).map(([id, project]) => (
                    <ProjectCard
                        key={id}
                        title={project.title}
                        description={project.description}
                        liveDemoLink={project.liveDemoLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

// src/pages/Dashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../projectData'; // Import the centralized project data

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>My Scrimba Dashboard</h1>
            <div className="project-list">
                {Object.entries(projectsData).map(([id, project]) => (
                    <Link to={`/projects/${id}`} key={id}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            link={`/projects/${id}`}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

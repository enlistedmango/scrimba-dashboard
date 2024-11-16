import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../projectData";

const Dashboard: React.FC = () => {
    const [theme, setTheme] = React.useState(() => {
        const saved = localStorage.getItem("theme");
        return saved || "dark";
    });

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    React.useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Project Portfolio</h1>
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}>
                    {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>
            <div className="project-list">
                {Object.entries(projectsData).map(([id, project]) => (
                    <ProjectCard
                        key={id}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

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
                <h1>Scrimba Project Portfolio</h1>
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}>
                    {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>

            <div className="dashboard-intro">
                <p>
                    Welcome to my project portfolio! This dashboard showcases the projects I've
                    built while learning through
                    <a
                        href="https://scrimba.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        {" "}
                        Scrimba
                    </a>
                    's interactive coding platform.
                </p>
                <p>
                    Scrimba is an innovative coding education platform that combines video tutorials
                    with interactive coding environments, allowing learners to pause the video at
                    any time and edit the code directly in the browser.
                </p>
                <p>
                    Each project below represents a key learning milestone, demonstrating different
                    aspects of web development from basic HTML and CSS to more complex JavaScript
                    functionality.
                </p>
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

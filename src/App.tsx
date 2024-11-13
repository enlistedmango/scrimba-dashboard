// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import './App.css'; // Import App.css if you have specific styles

const App: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    };

    return (
        <Router>
            <div className="app-container">
                <button className="toggle-theme" onClick={toggleTheme}>
                    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/projects/:projectId" element={<Project />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

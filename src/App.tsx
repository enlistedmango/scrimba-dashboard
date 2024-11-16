import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const App: React.FC = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route
                        path="/"
                        element={<Dashboard />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

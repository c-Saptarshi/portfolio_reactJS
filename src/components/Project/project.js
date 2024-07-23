import React from 'react';
import './project.css';

const Project = () => {
    return (
        <div className="projects-section">
            <h1 className="projects">Projects</h1>
            <div className="projects-container">
                <div className="project-card">
                    <h2>Money Tracking Application</h2>
                    <p>An Simple Money Tracker Application Using MERN Stack</p>
                    <a href="https://github.com/c-Saptarshi/money_tracker_apk" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
                <div className="project-card">
                    <h2>Password Generator</h2>
                    <p>A simple Password Generator using basic ReactJS Concepts</p>
                    <a href="https://github.com/c-Saptarshi/Password-Generator-using-React-JS" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default Project;

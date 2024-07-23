import React from 'react'
import './about.css';

const About = () => {
    return (
        <div className='skills-section'>
            <h2 className='skills'>Skills</h2>
            <div className="container">
                <div className="category">
                    <h2>Programming Languages</h2>
                    <div className="skill">C & C++ <span>Intermediate</span></div>
                    <div className="skill">Python <span>Basic</span></div>
                </div>
                <div className="category">
                    <h2>Concepts</h2>
                    <div className="skill">DSA <span>Basic</span></div>
                    <div className="skill">OOPS <span>Basic</span></div>
                    <div className="skill">Database Management System <span>Basic</span></div>
                </div>
                <div className="category">
                    <h2>Frontend Development</h2>
                    <div className="skill">HTML <span>Intermediate</span></div>
                    <div className="skill">CSS <span>Basic</span></div>
                    <div className="skill">JavaScript <span>Basic</span></div>
                    <div className="skill">React <span>Basic</span></div>
                    <div className="skill">Tailwind <span>Basic</span></div>
                </div>
                <div className="category">
                    <h2>Backend Development</h2>
                    <div className="skill">Node JS <span>Basic</span></div>
                    <div className="skill">MongoDB<span>Basic</span></div>
                </div>
            </div>
        </div>
    );
};

export default About

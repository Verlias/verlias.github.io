import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "Vue.js",
    "Node.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "ASP.NET",
    "Spring Boot",
    "Flask",
    "Python",
    "Go",
    "C#",
    "C/C++",
    "Java",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Gitlab",
    "Jenkins",
    "Jira",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Python",
    "PyTorch",
    "TensorFlow",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>I have built a diverse array of Full-Stack applications from scratch using modern technologies such as React, Vue, Node, and more.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I have extensive experience building and deploying DevOps testing environments, continuous integration/continuous delivery (CI/CD) pipelines, and deployment automation to support successful Go-Live events.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning </h3>
                    <p>I have professional experience building enterprise grade Machine Learning Models to empower intelligent decision making and prediction.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
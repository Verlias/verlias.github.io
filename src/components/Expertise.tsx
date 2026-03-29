import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faBrain, faCode } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Expertise.scss';

const labelsInfra = [
    "Kubernetes",
    "Docker",
    "AWS",
    "Linux",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
    "Grafana",
    "Prometheus",
    "Terraform",
    "Concourse",
];

const labelsML = [
    "PyTorch",
    "TensorFlow",
    "Scikit-Learn",
    "Python",
    "Pandas",
    "NumPy",
];

const labelsFullStack = [
    "Python",
    "Go",
    "C#",
    ".NET Framework",
    "React.js",
    "Node.js",
    "Java",
    "C/C++",
    "Spring Boot",
    "Flask",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
];

function Expertise() {
    return (
    <div className="expertise-section" id="expertise">
        <div className="expertise-header">
            <div className="section-label">Skills</div>
            <h1 className="section-title">Expertise</h1>
            <p className="section-subtitle">Core competencies across infrastructure, ML, and software engineering</p>
        </div>
        <div className="expertise-grid">
            {/* 1. Infrastructure & Observability */}
            <div className="expertise-card glass-card">
                <span className="card-number">01</span>
                <div className="expertise-icon-wrapper">
                    <FontAwesomeIcon icon={faServer} />
                </div>
                <h3>Infrastructure & Observability</h3>
                <p>Building and monitoring production infrastructure with deep expertise in CI/CD pipelines, container orchestration, and observability platforms for real-time data monitoring and alerting.</p>
                <div className="expertise-tags">
                    <span className="tag-label">Tech stack</span>
                    <div className="tags-wrap">
                        {labelsInfra.map((label, index) => (
                            <span key={index} className="skill-tag">{label}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Machine Learning */}
            <div className="expertise-card glass-card">
                <span className="card-number">02</span>
                <div className="expertise-icon-wrapper cyan">
                    <FontAwesomeIcon icon={faBrain} />
                </div>
                <h3>Machine Learning</h3>
                <p>Passionate about applying ML to real-world problems — from neural network architectures for multi-robot systems to training models for financial prediction and sentiment analysis.</p>
                <div className="expertise-tags">
                    <span className="tag-label">Tech stack</span>
                    <div className="tags-wrap">
                        {labelsML.map((label, index) => (
                            <span key={index} className="skill-tag cyan">{label}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Full Stack Development */}
            <div className="expertise-card glass-card">
                <span className="card-number">03</span>
                <div className="expertise-icon-wrapper violet">
                    <FontAwesomeIcon icon={faCode} />
                </div>
                <h3>Full Stack Development</h3>
                <p>Building end-to-end applications with modern frameworks and languages — from React frontends and Go microservices to Python backends and relational databases.</p>
                <div className="expertise-tags">
                    <span className="tag-label">Tech stack</span>
                    <div className="tags-wrap">
                        {labelsFullStack.map((label, index) => (
                            <span key={index} className="skill-tag violet">{label}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Timeline.scss'

interface Experience {
    company: string;
    role: string;
    description: string;
    location: string;
    date: string;
    color: 'indigo' | 'cyan';
}

const experiences: Experience[] = [
    {
        company: "Susquehanna International Group",
        role: "Software Engineer Intern",
        description: "Trading Post-Execution · Infrastructure",
        location: "Philadelphia, PA",
        date: "March 2026 — Present",
        color: "cyan"
    },
    {
        company: "Comcast",
        role: "Software Engineer Intern",
        description: "Next Generation Access Networks · Infrastructure",
        location: "Philadelphia, PA",
        date: "March 2025 — March 2026",
        color: "indigo"
    },
    {
        company: "Zhou Robotics Lab",
        role: "Machine Learning Researcher",
        description: "Small Language Model Fine-Tuning · Multi-Agent Flocking Systems",
        location: "Philadelphia, PA",
        date: "May 2024 — Present",
        color: "cyan"
    }
];

function Timeline() {
  return (
    <div className="timeline-section" id="history">
      <div className="timeline-header">
        <div className="section-label">Career</div>
        <h1 className="section-title">Experience</h1>
        <p className="section-subtitle">Where I've built, shipped, and learned</p>
      </div>
      <div className="timeline-track">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
            <div key={index} className={`timeline-card glass-card`}>
                <div className="timeline-dot-wrapper">
                    <div className={`timeline-dot ${exp.color}`}>
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                </div>
                <div className="timeline-card-header">
                    <div className="timeline-card-meta">
                        <span className={`timeline-date ${exp.color}`}>{exp.date}</span>
                        <span className="timeline-location">{exp.location}</span>
                    </div>
                    <h2>{exp.company}</h2>
                    <h3>{exp.role}</h3>
                    <p className="timeline-description">{exp.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
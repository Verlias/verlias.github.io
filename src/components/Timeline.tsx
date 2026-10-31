import React from "react";
import '../assets/styles/Timeline.scss'

interface Experience {
    company: string;
    role: string;
    description: string;
    location: string;
    date: string;
}

const experiences: Experience[] = [
    {
        company: "Susquehanna International Group",
        role: "Software Engineer Intern",
        description: "Trading Post-Execution · Infrastructure",
        location: "Philadelphia, PA",
        date: "March 2026 — Present",
    },
    {
        company: "Comcast",
        role: "Software Engineer Intern",
        description: "Network Orchestration and Monitoring Deployment (NOMAD) · Infrastructure",
        location: "Philadelphia, PA",
        date: "March 2025 — March 2026",
    },
    {
        company: "Zhou Robotics Lab",
        role: "Machine Learning Researcher",
        description: "Small Language Model Fine-Tuning · Multi-Agent Flocking Systems",
        location: "Philadelphia, PA",
        date: "May 2024 — April 2025",
    }
];

function Timeline() {
  return (
    <section className="timeline-section terminal-section" id="experience" aria-labelledby="experience-heading">
      <header className="terminal-section-heading">
        <p><span>logan@portfolio</span>:~$ git log --experience</p>
        <h2 id="experience-heading">Experience</h2>
      </header>
      <div className="experience-list">
        {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.date}`} className="experience-row">
                <p className="experience-date"><span>*</span> {exp.date}</p>
                <div className="experience-role">
                    <h3>{exp.company}</h3>
                    <p>{exp.role}</p>
                </div>
                <div className="experience-detail">
                    <p>{exp.description}</p>
                    <p>{exp.location}</p>
                </div>
            </article>
        ))}
      </div>
    </section>
  );
}

export default Timeline;

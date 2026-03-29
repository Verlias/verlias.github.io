import React from "react";
import DrexelMaps from '../assets/images/DrexelMaps.png';
import MelodyMatch from '../assets/images/MelodyMatch.png';
import Financy from '../assets/images/Financy.png';
import STGNN from '../assets/images/STGNN.png';
import Prospera from '../assets/images/Prospera.png';
import '../assets/styles/Project.scss';

interface ProjectData {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
    highlight?: string;
}

const projects: ProjectData[] = [
    {
        title: "LPAC-STGNN",
        description: "Engineered a Learnable Perception-Action-Communication architecture for multi-robotic coverage control, integrating a Spatio-Temporal Graph Neural Network with attention mechanisms and low-bandwidth communication modules.",
        image: STGNN,
        link: "https://github.com/Zhourobotics",
        tags: ["PyTorch", "Python", "GNN", "Multi-Agent Systems"],
        highlight: "Zhou Robotics Lab"
    },
    {
        title: "Prospera",
        description: "AI-powered budgeting app that analyzes spending patterns and provides personalized recommendations, integrating real-time financial data with a secure chatbot for quick financial insights.",
        image: Prospera,
        link: "https://github.com/Verlias/PennApps2025-Prospera",
        tags: ["React", "Python", "OpenAI", "Finance"],
        highlight: "Top 10 Best Design — PennApps"
    },
    {
        title: "Drexel Maps",
        description: "MERN stack web app helping students locate classes with A* pathfinding, detailed floor plans, and efficient routing across campus buildings.",
        image: DrexelMaps,
        link: "https://github.com/Verlias/DrexelMaps",
        tags: ["React", "Node.js", "MongoDB", "A* Algorithm"]
    },
    {
        title: "Melody Match",
        description: "Music recommendation engine combining genre filtering and audio analysis techniques using Python's scikit-learn, Flask, and React.",
        image: MelodyMatch,
        link: "https://github.com/Verlias/MelodyMatch-Codefest2024",
        tags: ["Python", "Scikit-Learn", "Flask", "React"],
        highlight: "CodeFest 2024"
    },
    {
        title: "Financy",
        description: "Web application bridging the gap in financial education for adolescents with practical tools and resources for essential financial skills.",
        image: Financy,
        link: "https://github.com/Verlias/Financy",
        tags: ["MongoDB", "Express", "React", "Node.js"]
    },
];

function ProjectCard({ project }: { project: ProjectData }) {
    return (
        <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer" 
            className="project-card glass-card"
        >
            <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-image-overlay"></div>
            </div>
            <div className="project-content">
                {project.highlight && (
                    <span className="project-highlight">{project.highlight}</span>
                )}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="skill-tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="project-link-indicator">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </a>
    );
}

function Project() {
    const [featured, ...rest] = projects;
    
    return(
    <div className="projects-section" id="projects">
        <div className="projects-header">
            <div className="section-label">Work</div>
            <h1 className="section-title">Featured Projects</h1>
            <p className="section-subtitle">Things I've built and contributed to</p>
        </div>
        
        {/* Spotlight: Featured project */}
        <div className="project-spotlight">
            <ProjectCard project={featured} />
        </div>

        {/* Remaining projects grid */}
        <div className="projects-grid">
            {rest.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </div>
    );
}

export default Project;
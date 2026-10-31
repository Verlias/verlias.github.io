import React from "react";
import '../assets/styles/Project.scss';

interface ProjectData {
    title: string;
    description: string;
    link?: string;
    tags: string[];
}

const projects: ProjectData[] = [
    {
        title: "Distributed GPU Inference Orchestrator",
        description: "Go control plane that routes inference requests to live vLLM workers using Redis-backed discovery, short-lived leases, and workload telemetry.",
        link: "https://github.com/Verlias/distributed-gpu-inference-orchestrator",
        tags: ["Go", "Redis", "vLLM", "Docker", "GPU Infrastructure"],
    },
    {
        title: "High-Performance GEMM",
        description: "Implemented contiguous-memory C++ matrix multiplication engine with cache-blocking and loop reordering to optimize CPU performance.",
        link: "https://github.com/Verlias/matmul",
        tags: ["C++", "HPC", "Performance Optimization"],
    },
    {
        title: "Homelab",
        description: "Designed multi-node Kubernetes cluster with automated Linux node provisioning using Ansible and Helm. Implemented automated workload recovery workflows.",
        tags: ["Kubernetes", "Ansible", "Helm", "Infrastructure"]
    },
    {
        title: "Prospera",
        description: "AI-powered budgeting app that analyzes spending patterns and provides personalized recommendations, integrating real-time financial data with a secure chatbot for quick financial insights.",
        link: "https://github.com/Verlias/PennApps2025-Prospera",
        tags: ["React", "Python", "OpenAI", "Finance"],
    },
];

function ProjectRow({ project }: { project: ProjectData }) {
    const content = (
        <>
            <div className="project-row-name">
                <h3>{project.title}</h3>
            </div>
            <p className="project-row-description">{project.description}</p>
            <p className="project-row-stack">{project.tags.join(", ")}</p>
            <span className="project-row-action">{project.link ? 'open' : 'local'}</span>
        </>
    );

    if (project.link) {
        return (
            <a className="project-row" href={project.link} target="_blank" rel="noreferrer">
                {content}
            </a>
        );
    }

    return (
        <article className="project-row">{content}</article>
    );
}

function Project() {
    return(
    <section className="projects-section terminal-section" id="projects" aria-labelledby="projects-heading">
        <header className="terminal-section-heading">
            <p><span>logan@portfolio</span>:~/projects$ ls -la</p>
            <h2 id="projects-heading">Projects</h2>
        </header>
        <div className="project-columns" aria-hidden="true">
            <span>name</span><span>description</span><span>stack</span><span>status</span>
        </div>
        <div className="project-list">
            {projects.map((project) => (
                <ProjectRow key={project.title} project={project} />
            ))}
        </div>
    </section>
    );
}

export default Project;

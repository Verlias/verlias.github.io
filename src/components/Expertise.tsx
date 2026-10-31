import React from "react";
import '../assets/styles/Expertise.scss';
import pfp from '../assets/images/PFP.png';

const capabilities = [
    {
        title: "Infrastructure and observability",
        description: "Production systems, delivery pipelines, container platforms, and the telemetry needed to understand them.",
        tools: "Kubernetes, Docker, AWS, Linux, Terraform, Grafana, Prometheus"
    },
    {
        title: "Inference and machine learning systems",
        description: "Model-serving infrastructure and applied machine learning, with attention to throughput, reliability, and operator feedback.",
        tools: "vLLM, PyTorch, TensorFlow, scikit-learn, Python"
    },
    {
        title: "Backend engineering",
        description: "Services and APIs that connect infrastructure to useful products, from systems code to relational data.",
        tools: "Go, Python, C++, Java, .NET, PostgreSQL, MongoDB"
    },
];

function About() {
    return (
    <section className="about-section terminal-section" id="about" aria-labelledby="about-heading">
        <header className="terminal-section-heading">
            <p><span>logan@portfolio</span>:~$ cat about.md</p>
            <h2 id="about-heading">About</h2>
        </header>
        <div className="about-layout">
            <figure className="about-portrait">
                <img src={pfp} alt="Logan Voravong wearing a suit and tie" />
                <figcaption>logan.jpg · Philadelphia, PA</figcaption>
            </figure>
            <div className="about-copy">
                <p>
                    I’m a fourth-year Computer Science student at Drexel University with 1.5+
                    years of software engineering experience and a strong background in distributed
                    systems, observability, and AI infrastructure.
                </p>
            </div>
        </div>
        <div className="capabilities-heading">
            <p><span>logan@portfolio</span>:~$ inspect --capabilities</p>
            <h3>Capabilities</h3>
        </div>
        <div className="capabilities-list">
            {capabilities.map((capability) => (
                <article className="capability-row" key={capability.title}>
                    <h4>{capability.title}</h4>
                    <p>{capability.description}</p>
                    <p className="capability-tools">{capability.tools}</p>
                </article>
            ))}
        </div>
    </section>
    );
}

export default About;

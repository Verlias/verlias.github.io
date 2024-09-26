import React from "react";
import DrexelMaps from '../assets/images/DrexelMaps.png';
import MelodyMatch from '../assets/images/MelodyMatch.png';
import Financy from '../assets/images/Financy.png';
import STGNN from '../assets/images/STGNN.png';
import Prospera from '../assets/images/Prospera.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Verlias/PennApps2025-Prospera" target="_blank" rel="noreferrer"><img src={Prospera} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Verlias/PennApps2025-Prospera" target="_blank" rel="noreferrer"><h2>PennApps: Prospera</h2></a>
                <p><b>Achieved Top 10 in Best Design</b> at the <b>University of Pennsylvania Hackathon: PennApps</b></p>
                <p>Prospera is an AI-powered budgeting app that helps users manage their finances by analyzing spending patterns and providing personalized recommendations. It integrates real-time financial data and features a secure chatbot for quick financial insights.</p>            </div>
            <div className="project">
                <a href="https://github.com/Verlias/DrexelMaps" target="_blank" rel="noreferrer"><img src={DrexelMaps} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Verlias/DrexelMaps" target="_blank" rel="noreferrer"><h2>Drexel Maps</h2></a>
                <p>Drexel Maps is a web application built using the MERN stack (MongoDB, Express.js, React, and Node.js) aimed at helping students locate their classes. It leverages the A* algorithm to provide users with efficient routes, detailed floor plans of buildings, and directions to get to their destination.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Verlias/MelodyMatch-Codefest2024" target="_blank" rel="noreferrer"><img src={MelodyMatch} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Verlias/MelodyMatch-Codefest2024" target="_blank" rel="noreferrer"><h2>CodeFest 2024: Melody Match</h2></a>
                <p>MelodyMatch combines genre filtering and audio analysis techniques to offer personalized music recommendations, implemented with Python's scikit-learn, Flask, and React.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Verlias/Financy" target="_blank" rel="noreferrer"><img src={Financy} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Verlias/Financy" target="_blank" rel="noreferrer"><h2>Financy</h2></a>
                <p>Financy is a Web Application aimed to bridge the gap in financial education for adolescents by providing practical tools and resources to empower them with essential financial skills beyond traditional classroom learning. Built on a MERN Stack.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Zhourobotics" target="_blank" rel="noreferrer"><img src={STGNN} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Zhourobotics" target="_blank" rel="noreferrer"><h2>Zhou Robotics: LPAC-STGNN</h2></a>
                <p>Engineered an Learnable Perception-Action-Communication architecture for multi-robotic coverage control, integrating a Spatio-Temporal Graph Neural Network with attention mechanisms and low-bandwidth communication modules, enhancing overall efficiency.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;
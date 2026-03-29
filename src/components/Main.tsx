import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import pfp from '../assets/images/PFP.png';

function Main() {
  return (
    <div className="hero-section" id="hero">
      <div className="hero-bg">
        <div className="hero-gradient-orb hero-orb-1"></div>
        <div className="hero-gradient-orb hero-orb-2"></div>
        <div className="hero-gradient-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>
      <div className="hero-content">
        <div className="hero-image-wrapper">
          <div className="hero-image-ring">
            <img src={pfp} alt="Logan Voravong" />
          </div>
        </div>
        <h1 className="hero-name">
          Logan <span className="gradient-text">Voravong</span>
        </h1>
        <p className="hero-title">Software Engineer</p>
        <p className="hero-subtitle">
          Passionate about building impactful software and solving complex problems.
        </p>
        <div className="hero-actions">
          <a href="https://github.com/Verlias" target="_blank" rel="noreferrer" className="hero-social" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/loganvoravong/" target="_blank" rel="noreferrer" className="hero-social" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="#projects" className="hero-cta">
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </div>
  );
}

export default Main;
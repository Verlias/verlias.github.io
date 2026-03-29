import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-gradient-line"></div>
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-name">
            Logan<span className="gradient-text"> Voravong</span>
          </span>
          <p className="footer-tagline">Software Engineer</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Verlias" target="_blank" rel="noreferrer" className="footer-link" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/loganvoravong/" target="_blank" rel="noreferrer" className="footer-link" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="mailto:loganvoravong@gmail.com" className="footer-link" aria-label="Email">
            <EmailIcon />
          </a>
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()} Logan Voravong</p>
      </div>
    </footer>
  );
}

export default Footer;
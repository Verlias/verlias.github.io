import React from "react";
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-content">
        <p className="footer-command"><span>logan@portfolio</span>:~$ open contact</p>
        <div className="footer-invitation">
          <h2>Contact</h2>
          <a href="https://www.linkedin.com/in/loganvoravong/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Verlias" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/loganvoravong/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className="footer-copyright">session closed · © {new Date().getFullYear()} Logan Voravong · Philadelphia, PA</p>
      </div>
    </footer>
  );
}

export default Footer;

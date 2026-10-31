import React from "react";
import '../assets/styles/Main.scss';

function Main() {
  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-heading">
      <div className="terminal-window-bar" aria-hidden="true">
        <div className="window-controls"><span></span><span></span><span></span></div>
        <span>logan@portfolio:~</span>
        <span>zsh</span>
      </div>
      <div className="hero-copy terminal-body">
        <p className="terminal-command"><span>logan@portfolio</span>:~$ whoami</p>
        <h1 id="hero-heading">Logan Voravong</h1>
        <p className="hero-role">SWE Intern @ SIG · CS @ Drexel</p>
        <div className="hero-links" aria-label="Profile links">
          <a href="#experience">experience/</a>
          <a href="#projects">projects/</a>
          <a href="https://github.com/Verlias" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/loganvoravong/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className="hero-ready" aria-label="Ready for next command"><span>logan@portfolio</span>:~$ <i></i></p>
      </div>
    </section>
  );
}

export default Main;

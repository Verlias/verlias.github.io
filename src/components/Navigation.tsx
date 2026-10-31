import React, { useEffect, useState } from "react";
const navItems = [['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects']];

function Navigation() {

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="site-mark" href="#hero" aria-label="Logan Voravong, back to top"><span>~/</span>logan</a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="nav-links"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
        <div className={`nav-links ${mobileOpen ? 'is-open' : ''}`} id="nav-links">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>{label}</a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;

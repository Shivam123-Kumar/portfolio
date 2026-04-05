import React, { useState } from "react";
import "./Navbar.css";

const navItems = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Certification",
  "Contact",
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <span className="logo">Shivam Kumar.</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-right desktop-menu">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li
                key={item}
                className={`nav-item ${active === item ? "active" : ""}`}
                onMouseEnter={() => setActive(item)}
                onMouseLeave={() => setActive("")}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
            <li className="nav-item">
              <a href="/Shivam_Kumar_Resume.pdf" className="resume-btn" download>
                Resume
              </a>
            </li>
          </ul>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-controls">
          <button
            className="theme-toggle mobile-theme"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          
          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="/Shivam_Kumar_Resume.pdf" 
              className="mobile-resume-btn" 
              download 
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

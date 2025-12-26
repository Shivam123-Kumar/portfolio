import React from "react";
import { useState } from "react";
import "./Navbar.css";

const navItems = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Certification",
  "Resume",
  "Contact",
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [active, setActive] = useState("");

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-left">
        <span className="logo">Shivam Kumar</span>
      </div>

      <div className="navbar-right">
        <ul className="nav-links">
          {navItems.map((item) =>
            item === "Resume" ? (
              <li key={item} className="nav-item">
                <a href="/Shivam_Kumar_Resume.pdf" download>
                  Resume
                </a>
              </li>
            ) : (
              <li
                key={item}
                className={`nav-item ${active === item ? "active" : ""}`}
                onMouseEnter={() => setActive(item)}
                onMouseLeave={() => setActive("")}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            )
          )}
        </ul>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

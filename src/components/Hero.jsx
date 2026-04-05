import React from "react";
import "./Hero.css";
import profileImg from "../assets/hero/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={profileImg} alt="Shivam Kumar" />
        </div>
        <h1>
          Hi, I'm <span>Shivam Kumar</span>
        </h1>
        <h2>Software Development Engineer</h2>
        <p>
          I build scalable web applications, robust backend systems, and AI-powered solutions. Passionate about solving complex problems with high-performance code.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

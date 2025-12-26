import React from "react";
import "./Hero.css";
import profileImg from "../assets/hero/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        {/* Profile Image */}
        <div className="hero-image">
          <img src={profileImg} alt="Shivam Kumar" />
        </div>

        <h1>
          Hi, I’m <span>Shivam Kumar</span>
        </h1>

        <h2>Software Development Engineer</h2>

        <p>
          Final-year B.Tech student at NIT Andhra Pradesh with strong foundations
          in Data Structures, Algorithms, and Full-Stack Development. Passionate
          about building scalable, efficient, and user-centric applications.
        </p>

        <div className="hero-buttons">
          <a
            href="/Shivam_Kumar_Resume.pdf"
            className="btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>

          <a href="#projects" className="btn secondary">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

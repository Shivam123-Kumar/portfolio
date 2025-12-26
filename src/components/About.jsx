import "./About.css";
import React from "react";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p className="about-intro">
          I am a final-year B.Tech student at <strong>NIT Andhra Pradesh</strong>
          with a strong passion for Software Development and problem-solving.
          I enjoy building scalable web applications and working on real-world
          problems using clean and efficient code.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>🎓 Education</h3>
            <p>
              B.Tech in Computer Science <br />
              National Institute of Technology, Andhra Pradesh
            </p>
          </div>

          <div className="about-card">
            <h3>💻 Core Strengths</h3>
            <p>
              Data Structures & Algorithms, Full-Stack Development (React, Node),
              DBMS, OS, OOPS, and strong analytical thinking.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Career Goal</h3>
            <p>
              To work as a Software Development Engineer where I can design
              efficient systems, write high-quality code, and continuously grow
              as an engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

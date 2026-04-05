import "./About.css";
import React from "react";
import leetcodeImg from "../assets/leetcode.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <p className="about-intro">
          I am a final-year B.Tech student at <strong>NIT Andhra Pradesh</strong>{" "}
          with a strong passion for Software Development and problem-solving.
          I enjoy building scalable web applications and working on real-world
          problems using clean and efficient code.
        </p>

        <div className="about-grid">
          <div className="about-card card-base">
            <h3>🎓 Education</h3>
            <p>
              B.Tech in Electrical and Electronics Engineering <br />
              National Institute of Technology, Andhra Pradesh
            </p>
          </div>

          <div className="about-card card-base">
            <h3>💻 Core Strengths</h3>
            <p>
              Data Structures & Algorithms, Full-Stack Development (React, Node),
              DBMS, OS, OOPS, and strong analytical thinking.
            </p>
          </div>

          <div className="about-card card-base">
            <h3>🚀 Career Goal</h3>
            <p>
              To work as a Software Development Engineer where I can design
              efficient systems, write high-quality code, and continuously grow
              as an engineer.
            </p>
          </div>

          <div className="about-card card-base">
            <h3>🏆 Competitive Programming</h3>
            <p>
              I actively solve algorithmic challenges to master data structures. 
              Consistently sharpening my problem-solving and optimization skills.
            </p>
            <div className="leetcode-container">
              <img src={leetcodeImg} alt="LeetCode Logo" className="leetcode-img" />
              <a 
                href="https://leetcode.com/u/shivamkumardlnn/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary leetcode-btn"
              >
                View LeetCode Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

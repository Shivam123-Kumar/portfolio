import React from "react";
import "./Experience.css";
import swechaLogo from "../assets/experience/swecha.png";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          <div className="experience-card card-base">
            <div className="experience-header">
              <div className="exp-logo-wrapper">
                <img src={swechaLogo} alt="Swecha Telangana" />
              </div>
              <div className="exp-title-wrapper">
                <h3>AI Developer Intern</h3>
                <span className="org">Swecha Telangana</span>
                <span className="duration">May 2025 – August 2025</span>
              </div>
            </div>

            <ul className="exp-details">
              <li>
                Worked on <strong>Swecha Voice</strong>, a Telugu voice-enabled
                dialogue system using Large Language Models (LLMs).
              </li>
              <li>
                Built and evaluated NLP pipelines for low-resource Indian
                languages.
              </li>
              <li>
                Designed prompt workflows and tested LLM responses for accuracy
                and relevance.
              </li>
              <li>
                Collaborated with researchers and developers on open-source AI
                initiatives.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

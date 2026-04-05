import "./Skills.css";
import skills from "../data/skills";
import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card card-base" key={skill.name}>
              <div className="skill-icon-wrapper">
                <img src={skill.image} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

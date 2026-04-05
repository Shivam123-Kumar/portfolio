import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card card-base">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="overlay-content">
            <span className="overlay-tech">Tech Stack</span>
            <p className="overlay-tech-desc">{project.tech}</p>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

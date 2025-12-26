import React from "react";
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <span className="tech">{project.tech}</span>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

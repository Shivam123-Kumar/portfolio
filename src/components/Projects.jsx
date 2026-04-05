import React from "react";
import "./Projects.css";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

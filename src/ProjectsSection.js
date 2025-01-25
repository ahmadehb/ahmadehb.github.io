import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectsSection.css';

function ProjectsSection({ id, title, projects }) {
  const navigate = useNavigate();

  return (
    <section id={id} className="projects-section">
      <h2>{title}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <img src={project.image} alt={project.title} className="project-card-image" />
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

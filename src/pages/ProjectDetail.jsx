import { Link, useParams } from 'react-router-dom';
import projects from '../data/projects';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="project-detail section page-enter">
        <div className="container">
          <h2>Project not found</h2>
          <Link to="/projects" className="btn">
            &larr; Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail section page-enter">
      <div className="container">
        <Link to="/projects" className="back-link">
          &larr; Back to Projects
        </Link>
        <h2>{project.title}</h2>
        <ul className="project-tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn">
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-solid">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;

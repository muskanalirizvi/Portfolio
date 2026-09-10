import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-links">
        <Link to={`/projects/${project.id}`} className="btn">
          Details
        </Link>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub &rarr;
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;

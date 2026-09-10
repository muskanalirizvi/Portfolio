import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import './Projects.css';

const categoryOrder = [
  'Generative AI',
  'Agentic AI',
  'Deep Learning',
  'Machine Learning',
  'Data Analytics',
];

function groupByCategory(items) {
  const groups = new Map();

  items.forEach((project) => {
    const category = project.category || 'Other';
    if (!groups.has(category)) {
      groups.set(category, []);
    }
    groups.get(category).push(project);
  });

  const orderedCategories = [
    ...categoryOrder.filter((category) => groups.has(category)),
    ...[...groups.keys()].filter((category) => !categoryOrder.includes(category)),
  ];

  return orderedCategories.map((category) => ({
    category,
    items: groups.get(category),
  }));
}

function Projects() {
  const groupedProjects = groupByCategory(projects);

  return (
    <section className="projects section page-enter">
      <div className="container">
        <h2>Projects</h2>
        <p className="projects-intro">
          A selection of things I've built, grouped by area.
        </p>

        {groupedProjects.map((group) => (
          <div className="project-group" key={group.category}>
            <h3 className="project-group-title">{group.category}</h3>
            <div className="projects-grid stagger">
              {group.items.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

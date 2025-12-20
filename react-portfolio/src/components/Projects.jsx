import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">{project.tech}</p>

            <div className="project-links">
              <a href={project.live} target="_blank">Live</a>
              <a href={project.github} target="_blank">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

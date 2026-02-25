
const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio website showcasing projects, skills, and contact information.",
    image: "/images/portfolio.png",
    skills: ["HTML", "CSS", "JavaScript", "React", "SCSS"],
    live: "https://your-live-demo-link.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-commerce App",
    description:
      "A full-featured e-commerce application with product listing, cart, and state management using Redux.",
    image: "/images/ecommerce.png",
    skills: ["React", "Redux", "Tailwind CSS", "JavaScript"],
    live: "https://your-ecommerce-demo.com",
    github: "https://github.com/yourusername/ecommerce-app",
  },
  {
    title: "Dashboard UI",
    description:
      "A responsive admin dashboard with reusable components and clean UI built using React and SCSS.",
    image: "/images/dashboard.png",
    skills: ["React", "SCSS", "JavaScript"],
    live: "https://your-dashboard-demo.com",
    github: "https://github.com/yourusername/dashboard-ui",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h1 className="projects-title">My Projects</h1>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-card-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="project-card-skills">
                  {project.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}
                </div>

                <div className="project-card-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
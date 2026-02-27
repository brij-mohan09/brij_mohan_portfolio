
const projectsData = [
  {
  title: "Personal Portfolio Website",
  description:
    "A modern and responsive personal portfolio website showcasing projects, skills, and experience, with smooth navigation using React Router and a functional contact form powered by EmailJS.",
  image: "/images/personal_portfolio.png",
  skills: ["HTML", "SCSS", "React", "React Router", "EmailJS", "JavaScript"],
  live: "https://brij-mohan-portfolio.vercel.app/",
  github: "https://github.com/brij-mohan09/brij_mohan_portfolio",
},
  {
  title: "Weather App",
  description:
    "A responsive weather application that displays real-time weather data, including temperature, conditions, and location-based forecasts using a public weather API.",
  image: "/images/weather_app.png",
  skills: ["HTML", "CSS", "JavaScript", "API Integration"],
  live: "https://weather-app-sigma-cyan-30.vercel.app/",
  github: "https://github.com/brij-mohan09/weather_app",
},
  {
  title: "Task Manager App",
  description:
    "A task management application that allows users to add, edit, delete, and track tasks with a clean and responsive interface built using React.",
  image: "/images/task_manager.png",
  skills: ["HTML", "CSS", "React", "JavaScript"],
  live: "https://react-task-manager-pied.vercel.app/",
  github: "https://github.com/brij-mohan09/react_task_manager",
}
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
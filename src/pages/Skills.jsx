
import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaPython, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

const skillsData = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    concepts: ["Semantic HTML", "Forms", "Accessibility", "SEO"]
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    concepts: ["Flexbox", "Grid", "Animations", "Responsive Design"]
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    concepts: ["ES6+", "Async/Await", "DOM", "Closures"]
  },
  {
    name: "React",
    icon: <FaReact />,
    concepts: ["Hooks", "Context", "Components", "Lifecycle"]
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    concepts: ["Store", "Reducers", "Actions", "Middleware"]
  },
  {
    name: "SCSS",
    icon: <FaSass />,
    concepts: ["Variables", "Mixins", "Nesting"]
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    concepts: ["Utility Classes", "Responsive", "Dark Mode"]
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    concepts: ["Commits", "Branches", "Rebase", "Merge"]
  },
  {
    name: "Python",
    icon: <FaPython />,
    concepts: ["OOP", "Data Structures", "Async", "Scripting"]
  }
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
    // setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="skills-section">
      <div className="container">
      <h1 className="skills-title">My Skills</h1>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index}
              className={`skill-card ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
              >
            <div className="skill-card-circle">
              <div className="skill-card-inner">
                <span className="skill-card-icon">{skill.icon}</span>
              </div>
            </div>
            <h3 className="skill-card-name">{skill.name}</h3>

            <div className="skill-tooltip">
                <ul>
                  {skill.concepts.map((concept, i) => (
                    <li key={i}>{concept}</li>
                  ))}
                </ul>
              </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
export default Skills;

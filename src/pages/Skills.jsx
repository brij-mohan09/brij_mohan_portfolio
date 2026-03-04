
import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaPython, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

const skillsData = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    concepts: ["HTML5", "Semantic HTML", "Forms & Validation", "Tables & Structured Data", "Multimedia Elements", "Responsive Images (picture, srcset)", "Meta Tags & SEO Basics", "Accessibility (ARIA, alt, labels)", "Data Attributes", "Embedded Content (iframe)"]
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    concepts: ["Flexbox", "Grid Layout", "Responsive Design", "Media Queries", "Positioning", "Box Model", "CSS Variables", "Pseudo-classes & Pseudo-elements", "Transitions & Animations", "Basic Layout Architecture"]
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    concepts: ["ES6+ Syntax", "DOM Manipulation", "Event Handling", "Functions & Closures", "Arrays & Objects Methods", "Promises", "Async/Await", "Fetch API", "Error Handling", "Local Storage"]
  },
  {
    name: "React",
    icon: <FaReact />,
    concepts: ["Functional Components", "Props & State", "React Hooks (useState, useEffect)", "Conditional Rendering", "Lists & Keys", "Event Handling", "Component Composition", "React Router", "API Integration", "Basic Performance Optimization"]
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    concepts: ["State Management Basics", "Redux Store", "Actions", "Reducers", "Dispatch", "Redux Toolkit Basics"]
  },
  {
    name: "SCSS",
    icon: <FaSass />,
    concepts: ["Variables", "Nesting", "Mixins", "Partials", "Importing SCSS Files"]
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    concepts: ["Utility-First Styling", "Spacing Utilities", "Typography Utilities", "Flexbox Utilities", "Responsive Utilities", "Basic Layout Styling"]
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    concepts: ["Version Control Workflow", "Branching & Merging", "Pull Requests", "Conflict Resolution", "Git Rebase", "Git Stash", "Commit Best Practices", "Collaboration Workflow"]
  },
  {
    name: "Python",
    icon: <FaPython />,
    concepts: ["Python Syntax", "Variables & Data Types", "Conditional Statements", "Loops", "Functions", "Lists & Dictionaries", "Basic File Handling", "Simple Modules"]
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

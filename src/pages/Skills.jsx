
import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaPython, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiTypescript, SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

const skillsData = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    concepts: [
      "Semantic HTML5 structure",
      "Forms & input validation",
      "Tables & structured content",
      "Multimedia elements (audio, video)",
      "Responsive images (picture, srcset)",
      "SEO basics with meta tags",
      "Accessibility basics (ARIA, alt)"
    ]
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    concepts: [
      "Flexbox layout",
      "CSS Grid layout",
      "Responsive design with media queries",
      "Box model and positioning",
      "CSS variables",
      "Pseudo-classes & pseudo-elements",
      "Transitions and basic animations"
    ]
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    concepts: [
      "ES6+ syntax",
      "DOM manipulation",
      "Event handling",
      "Functions and closures",
      "Array & object methods",
      "Promises and async/await",
      "API calls using Fetch"
    ]
  },
  {
    name: "React",
    icon: <FaReact />,
    concepts: [
      "Functional components",
      "Props and state",
      "React Hooks (useState, useEffect)",
      "Conditional rendering",
      "Lists and keys",
      "Event handling in components",
      "API integration in React"
    ]
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    concepts: [
      "Redux state management basics",
      "Redux store",
      "Actions",
      "Reducers",
      "Dispatching actions",
      "Redux Toolkit basics"
    ]
  },
  // {
  //   name: "Node.js",
  //   icon: <FaNodeJs />,
  //   concepts: [
  //     "Node.js runtime and event-driven architecture",
  //     "Modules and require/import usage",
  //     "Working with npm and package management",
  //     "Creating basic HTTP servers",
  //     "File system module basics",
  //     "Environment variables and configuration",
  //     "Basic asynchronous programming (callbacks, promises)"
  //   ]
  // },
  // {
  //   name: "Express.js",
  //   icon: <SiExpress />,
  //   concepts: [
  //     "Creating an Express server",
  //     "Routing (GET, POST, PUT, DELETE)",
  //     "Middleware basics",
  //     "Handling request and response objects",
  //     "Building simple REST APIs",
  //     "Basic error handling",
  //     "Organizing routes and controllers"
  //   ]
  // },
  // {
  //   name: "MongoDB",
  //   icon: <SiMongodb />,
  //   concepts: [
  //     "NoSQL database fundamentals",
  //     "Documents and collections",
  //     "Basic CRUD operations",
  //     "Using MongoDB with Node.js",
  //     "Simple queries and filtering",
  //     "Schema basics with Mongoose",
  //     "Connecting applications to MongoDB"
  //   ]
  // },
  {
    name: "SCSS",
    icon: <FaSass />,
    concepts: [
      "SCSS variables",
      "Nesting styles",
      "Mixins for reusable styles",
      "Partials for modular styles",
      "Importing SCSS files",
      "Organizing scalable stylesheets"
    ]
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    concepts: [
      "Utility-first CSS approach",
      "Spacing utilities",
      "Typography utilities",
      "Flexbox utilities",
      "Responsive utilities",
      "Rapid UI styling with classes"
    ]
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    concepts: [
      "Version control workflow",
      "Branching and merging",
      "Pull requests",
      "Resolving merge conflicts",
      "Git rebase basics",
      "Commit message best practices"
    ]
  },
  {
    name: "Python",
    icon: <FaPython />,
    concepts: [
      "Python syntax basics",
      "Variables and data types",
      "Conditional statements",
      "Loops and iteration",
      "Functions",
      "Lists and dictionaries",
      "Basic file handling"
    ]
  },
  // {
  //   name: "TypeScript",
  //   icon: <SiTypescript />,
  //   concepts: [
  //     "Static typing fundamentals",
  //     "Basic types (string, number, boolean)",
  //     "Interfaces and type aliases",
  //     "Typing functions and parameters",
  //     "Working with arrays and objects",
  //     "Type inference basics",
  //     "Using TypeScript with JavaScript projects"
  //   ]
  // },
  // {
  //   name: "SQL",
  //   icon: <PiFileSql />,
  //   concepts: [
  //     "Basic SQL syntax",
  //     "SELECT, INSERT, UPDATE, DELETE queries",
  //     "Filtering data using WHERE",
  //     "Sorting results with ORDER BY",
  //     "Grouping data using GROUP BY",
  //     "Basic JOIN operations",
  //     "Working with database tables"
  //   ]
  // },
  // {
  //   name: "MySQL",
  //   icon: <SiMysql />,
  //   concepts: [
  //     "Relational database fundamentals",
  //     "Tables, rows, and columns",
  //     "Basic CRUD operations",
  //     "Primary keys and relationships",
  //     "Connecting MySQL with backend apps",
  //     "Basic query writing",
  //     "Database schema design basics"
  //   ]
  // },
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

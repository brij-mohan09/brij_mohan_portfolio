import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

const skillsData = [
  { name: "HTML", percent: 90, icon: <FaHtml5 /> },
  { name: "CSS", percent: 85, icon: <FaCss3Alt /> },
  { name: "JavaScript", percent: 80, icon: <FaJsSquare /> },
  { name: "React", percent: 85, icon: <FaReact /> },
  { name: "Redux", percent: 75, icon: <SiRedux /> },
  { name: "SCSS", percent: 80, icon: <FaSass /> },
  { name: "Tailwind", percent: 85, icon: <SiTailwindcss /> },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
      <h1 className="skills-title">My Skills</h1>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div
              className="skill-card-circle"
              style={{
                background: `conic-gradient(
                  #00c6ff ${skill.percent * 3.6}deg,
                  rgba(255,255,255,0.15) 0deg
                  )`,
                }}
                >
              <div className="skill-card-inner">
                <span className="skill-card-icon">{skill.icon}</span>
                <span className="skill-card-percent">
                  {skill.percent}%
                </span>
              </div>
            </div>

            <h3 className="skill-card-name">{skill.name}</h3>
          </div>
        ))}
      </div>
        </div>
    </section>
  );
};

export default Skills;
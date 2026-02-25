
const About = () => {
  return (
    <section className="about-section">
      <div className="about-container container">

        {/* ABOUT INTRO */}
        <div className="about-intro">
          <h1>About Me</h1>
          <p>
            I’m a passionate <span>Full-Stack Developer</span> who loves building
            scalable web applications, clean UI, and performant systems.
          </p>
        </div>

        {/* SKILLS */}
        <div className="about-card">
          <h2>Skills</h2>
          <div className="about-skills-card">
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>TypeScript</span>
            <span>SCSS</span>
            <span>Git</span>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="about-card">
          <h2>Project Experience</h2>
          <ul>
            <li>Built scalable React dashboards with REST APIs</li>
            <li>Implemented authentication & authorization systems</li>
            <li>Optimized performance and SEO for production apps</li>
          </ul>
        </div>

        {/* FREELANCING */}
        <div className="about-card">
          <h2>Freelance Projects</h2>
          <ul>
            <li>Portfolio websites for startups & individuals</li>
            <li>Admin panels and CMS dashboards</li>
            <li>E-commerce UI & backend integration</li>
          </ul>
        </div>

        {/* ACADEMIC */}
        <div className="about-card">
          <h2>Academic Background</h2>
          <p>Bachelor’s Degree in Computer Science</p>
          <p>Strong foundation in Data Structures, Algorithms, and OOP</p>
        </div>

        {/* RESUME */}
        <div className="about-resume">
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </div>

        {/* TESTIMONIALS */}
        <div className="about-card testimonials">
          <h2>Testimonials</h2>
          <blockquote>
            “Delivered an excellent product on time with clean architecture.”
            <span>— Client A</span>
          </blockquote>
          <blockquote>
            “Very professional and highly skilled developer.”
            <span>— Client B</span>
          </blockquote>
        </div>

      </div>
    </section>
  );
};

export default About;
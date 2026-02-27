
const About = () => {
  return (
    <section className="about-section">
      <div className="about-container container">

        {/* ABOUT INTRO */}
        <div className="about-intro">
          <h1>About Me</h1>
          <p>I’m a passionate <span>Frontend Developer</span> who loves building scalable web applications, clean UI, and performant systems.</p>
        </div>

        {/* SKILLS */}
        <div className="about-card">
          <h2>Skills</h2>
          <div className="about-skills-card">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Redux</span>
            <span>React Router</span>
            <span>Python</span>
            <span>SCSS</span>
            <span>Tailwind CSS</span>
            <span>Git</span>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="about-card">
          <h2>About Me</h2>
          <ul>
            <li><p>I specialize in building responsive, accessible, and performance-optimized user interfaces using modern frontend technologies. My focus is on translating design concepts into clean, maintainable code that delivers real business value.</p></li>
            <li><p>With a strong eye for UI/UX and a passion for continuous learning, I aim to create web applications that are not only visually appealing but also intuitive, scalable, and future-ready.</p></li>
            <li><p><strong>Component-driven development, Pixel-perfect UI & UX implementation, Performance & SEO-friendly frontend, Clean architecture & reusable code</strong></p></li>
          </ul>
        </div>

        {/* experience */}
        {/* <div className="about-card">
          <h2>Project Experience</h2>
          <ul>
            <li><p>Built scalable React dashboards with REST APIs</p></li>
            <li><p>Implemented authentication & authorization systems</p></li>
            <li><p>Optimized performance and SEO for production apps</p></li>
          </ul>
        </div> */}

        <div className="about-card">
          <h2>Skills & Learning Experience</h2>
          <ul>
            <li><p>Developed responsive user interfaces using HTML, CSS, and JavaScript</p></li>
            <li><p>Built single-page applications with React and component-based architecture</p></li>
            <li><p>Managed application state using Redux for predictable data flow</p></li>
            <li><p>Implemented client-side routing using React Router</p></li>
            <li><p>Styled applications using SCSS with reusable and modular styles</p></li>
            <li><p>Practiced modern JavaScript (ES6+) concepts and best coding practices</p></li>
          </ul>
        </div>

        {/* FREELANCING */}
        {/* <div className="about-card">
          <h2>Freelance Projects</h2>
          <ul>
            <li><p>Portfolio websites for startups & individuals</p></li>
            <li><p>Admin panels and CMS dashboards</p></li>
            <li><p>E-commerce UI & backend integration</p></li>
          </ul>
        </div> */}

        {/* ACADEMIC */}
        <div className="about-card">
          <h2>Academic Background</h2>
          <ul>
            <li><p>Bachelor’s Degree in Computer Science</p></li>
            <li><p></p></li>
          </ul>
          
          {/* <p>Strong foundation in Data Structures, Algorithms, and OOP</p> */}
        </div>

        {/* TESTIMONIALS */}
        {/* <div className="about-card testimonials">
          <h2>Testimonials</h2>
          <blockquote>
            “Delivered an excellent product on time with clean architecture.”
            <span>— Client A</span>
          </blockquote>
          <blockquote>
            “Very professional and highly skilled developer.”
            <span>— Client B</span>
          </blockquote>
        </div> */}

      </div>
    </section>
  );
};

export default About;
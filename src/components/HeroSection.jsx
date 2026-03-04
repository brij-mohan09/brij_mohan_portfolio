import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-profile">
            <div className="hero-profile-circle">
              <div className="hero-profile-inner">
                <img src="/images/DSC_0772.JPG" alt="Brij Mohan" className="hero-profile-img"/>
              </div>
            </div>
          </div>

          <h1>Hi, I’m <span>Brij Mohan.</span></h1>
          <p>Frontend Developer crafting modern web experiences</p>
          <p>I build <strong>clean, scalable frontend interfaces</strong> focused on performance, accessibility, and real-world usability.</p>
          <p>From concept to production, I turn ideas into <strong> fast, intuitive, and reliable web experiences</strong>.</p>

          <div className="hero-actions">
            <NavLink to="/projects" className="btn btn-primary">
              View Projects
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline">
              Contact Me
            </NavLink>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/coding.gif" alt="Developer Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
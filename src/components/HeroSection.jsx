import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <h1>
            Hi, I’m <span>Brij Mohan</span>
          </h1>
          <p>Frontend Developer crafting modern web experiences</p>

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
          <img src="/images/dev_img.webp" alt="Developer Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
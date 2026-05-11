import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="copyright">
            <p>&copy; Copyright Reserved 2026 | <span><NavLink to="/">Brij Mohan</NavLink></span></p>
          </div>

          <div className="social-link">
            <a href="https://www.linkedin.com/in/brijmohan-dev/" target="_blank" className="icons"><FaLinkedinIn /></a>
            <a href="https://github.com/brij-mohan09" target="_blank" className="icons"><FaGithub /></a>
            <a href="https://wa.me/917545099366" target="_blank" rel="noopener noreferrer" className="icons"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
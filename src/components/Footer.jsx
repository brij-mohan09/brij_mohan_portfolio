import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="copyright">
            <p>&copy; Copyright Reserved 2026 | <span>Brij Mohan</span></p>
        </div>
        <div className="social-link">
            <FaLinkedinIn />
            <FaGithub />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container navbar">
        <div className="logo">
            <NavLink to="/" ><h2>&lt; brij. /&gt;</h2></NavLink>
        </div>

        <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className={`nav ${menuOpen ? "open" : ""}`}>
            <ul>
                <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
                <li><NavLink to="/resume" onClick={() => setMenuOpen(false)}>Resume</NavLink></li>
                <li><NavLink to="/skills" onClick={() => setMenuOpen(false)}>Skills</NavLink></li>
                <li><NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
                <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
            </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
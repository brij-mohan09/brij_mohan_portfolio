
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(false);
  }, [location]);

  return (
    <header className="header">
      <div className="container navbar">
        <div className="logo">
          <NavLink to="/">&lt;BM/&gt;</NavLink>
        </div>

        <nav className="nav">
          <ul className={show ? "nav-menu-mobile" : "nav-menu-web"}>
            {["/", "/about", "/resume", "/skills", "/projects", "/contact"].map(
              (path, i) => (
                <li key={i}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    {path === "/" ? "Home" : path.slice(1)}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <button
            className={`hamburger ${show ? "open" : ""}`}
            onClick={() => setShow((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);

    // Check if at the top of the page
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${
        showNavbar ? "show" : "hide"
      } ${isTop ? "transparent" : "solid"} ${isExpanded ? "expanded" : ""}`}
    >
      <div className="container-fluid">
        <p className="navbar-brand d-none d-lg-block ms-auto">
          <img src="/image/logo.png" alt="logo" className="logo" />
        </p>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isExpanded ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto nav-list">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/explore"
                className="nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactus"
                className="nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

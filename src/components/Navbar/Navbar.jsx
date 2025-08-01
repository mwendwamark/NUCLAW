import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { AlignRight, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <React.Fragment>
      <header>
        <nav className={`main_navbar ${scrolled ? "scroll_navbar" : ""}`}>
          <div className="main_navbar-container container">
            {/* LOGO SECTION */}
            <NavLink to="/" className="main_navbar-logo">
              <h1>Nuclaw®</h1>
            </NavLink>

            {/* MENU SECTION */}
            <ul className={`main_navbar-menu ${menuOpen ? "active" : ""}`}>
              <li>
                <NavLink to="/" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={closeMenu}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" onClick={closeMenu}>
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/attorneys" onClick={closeMenu}>
                  Attorneys
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
              
              {/* Mobile Right Section - Only shows in mobile menu */}
              <div className="mobile-right-section">
                <a 
                  href="tel:+254712345678" 
                  className="mobile-phone" 
                  onClick={closeMenu}
                >
                  +254-712-345-678
                </a>
                <NavLink
                  to="/get-in-touch"
                  className="mobile-cta"
                  onClick={closeMenu}
                >
                  Get in Touch
                </NavLink>
              </div>
            </ul>

            <div className="main_navbar-right">
              <ul className="main_navbar-right-list">
                {/* <li>
                  <a href="tel:+254712345678" className="_text-light _underline" onClick={closeMenu}>
                    +254-712-345-678
                  </a>
                </li> */}
                <li>
                  <NavLink
                    to="/get-in-touch"
                    className="btn btn_primary"
                    onClick={closeMenu}
                  >
                    Get in Touch
                  </NavLink>
                </li>
              </ul>

              <div className="main_navbar-menu-icon" onClick={toggleMenu}>
                {menuOpen ? (
                  <X size={24} className="close_menu" />
                ) : (
                  <AlignRight size={24} />
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="nav-bar-name-background" href="#">
        Sam Sherrill
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="index.html">
            About Me <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="portfolio.html">
            Portfolio
          </a>
          <a className="nav-item nav-link" href="contact.html">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
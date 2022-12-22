import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <a href="/">
            <img src={require("../static/images/Senior Photo_Square.jpg")} alt="Spencer" class="spencer-image"/>
        </a>
        <a className="navbar-left" href="/">Spencer Stice</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/#/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#/classes">Classes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#/experience">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

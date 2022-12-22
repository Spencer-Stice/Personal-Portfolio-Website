import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <a href="/">
            <img src={require("../static/images/Senior Photo_Square.jpg")} alt="Spencer" class="spencer-image"/>
        </a>
        <a className="navbar-left" href="/Personal-Portfolio-Website/#/">Spencer Stice</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/Personal-Portfolio-Website/#/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Personal-Portfolio-Website/#/classes">Classes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Personal-Portfolio-Website/#/experience">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Personal-Portfolio-Website/#/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

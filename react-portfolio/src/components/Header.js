// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import '../App.css'; // Import App.css for global styles

function Header() {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">
              <button className="nav-button">Home</button> {/* Button to Home page */}
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <button className="nav-button">Projects</button> {/* Button to Projects page */}
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className="nav-button">About</button> {/* Button to About page */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


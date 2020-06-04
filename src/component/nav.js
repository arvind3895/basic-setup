import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./nav.css";

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <nav className="nav-bar">
          <ul className="nav-items-list">
            <li className="nav-items">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-items">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-items">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Router>
    );
  }
}
export default Nav;

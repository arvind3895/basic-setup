import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </Router>
    );
  }
}
export default Nav;

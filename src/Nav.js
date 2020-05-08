import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <li>
          <Link to="/">explore</Link>
        </li>
        <li>
          <Link to="/MyProfile">Myprofile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Nav() {
  return (
    <fieldset>
      <legend>welcome</legend>
      <nav>
        <img src="https://caocap.app/images/logo.svg" width="100px" />
        <ul className="nav-links">
          <li>
            <Link to="/">explore</Link>
          </li>
          <li>
            <Link to="/MyProfile">Myprofile</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/Builder">Builder</Link>
          </li>
        </ul>
      </nav>
    </fieldset>
  );
}

export default Nav;

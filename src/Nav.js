import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./images/logo.png";
function Nav() {
  return (
    <fieldset>
      <nav>
        <img src={logo} width="100px" />
        <p>coacap</p>
        <ul className="nav-links"></ul>
        <input type="serch"></input>
        <button>sign up</button>
      </nav>
      {/*
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
        */}
    </fieldset>
  );
}

export default Nav;

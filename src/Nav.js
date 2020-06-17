import React from "react";
import { Link } from "react-router-dom";
import "./css/App.css";
import logo from "./images/logo-100.png";
function Nav() {
  return (
    <nav>
      <img src={logo} width="100px" />
      <p>coacap</p>
      <ul className="nav-links"></ul>
      <ul className="nav-down"></ul>
      <input type="search" placeholder="Search ...."></input>
      <button id="signup">sign up</button>
      <button id="signin">sign in</button>
    </nav>
  );
}

export default Nav;

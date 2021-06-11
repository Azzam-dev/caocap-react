import React from "react";
import { Link } from "react-router-dom";
import "./css/App.css";
import logo from "./images/logo-100.png";
function Nav() {
  return (
    <nav>
      <img alt="logo" src={logo} width="100px" />
      <p>coacap</p>
      <ul className="nav-links"></ul>
      <ul className="nav-down"></ul>
      <input type="search" placeholder="Search ...."></input>
      <button id="signup">signup</button>
      <button id="login"><Link to="/login" > login </Link></button>
      
    </nav>
  );
}

export default Nav;

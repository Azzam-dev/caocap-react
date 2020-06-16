import React from "react";
import { Link } from "react-router-dom";
import "./css/App.css";
import Search from "./Search";
import logo from "./images/logo-100.png";
function Nav() {
  return (
    <nav>
      <img src={logo} width="100px" />
      <p>coacap</p>
      <ul className="nav-links"></ul>
      <input type="search" placeholder="Search ...."></input>
      <button>sign up</button>
      <button>sign in</button>
    </nav>
  );
}

export default Nav;

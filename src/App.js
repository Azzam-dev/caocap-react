import React from "react";
import logo from "./images/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>CAOCAP WEB-APP</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Empower To Become Powerful.
        </a>
      </header>
    </div>
  );
}

export default App;

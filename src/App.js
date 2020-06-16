import React from "react";
import "./css/App.css";
import Builder from "./Builder";
import "./css/style.css";
import Chat from "./Chat";
import Explore from "./Explore";
import Nav from "./Nav";
import MyProfile from "./MyProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Explore} />
          <Route path="/Builder" component={Builder} />
          <Route path="/Chat" component={Chat} />
          <Route path="/MyProfile" component={MyProfile} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;

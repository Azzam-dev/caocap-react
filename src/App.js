import React from "react";
import "./css/App.css";
import Builder from "./Builder";
import Chat from "./Chat";
import Explore from "./Explore";
import Nav from "./Nav";
import { AuthProvider } from "./context/authContext"
import MyProfile from "./MyProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import NewLogin from "./components/NewLogin";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <AuthProvider>
        <Switch>
          <Route exact path="/" component={Explore} />
          <Route path="/Builder" component={Builder} />
          <Route path="/login" component={Login} />
          <Route path="/Chat" component={Chat} />
          <Route path="/MyProfile" component={MyProfile} />
          <Route path="/NewLogin" component={NewLogin} />
        </Switch>
        </AuthProvider>
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

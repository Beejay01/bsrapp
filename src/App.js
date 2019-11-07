import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateClient from "./components/create-client.component";
import EditClient from "./components/edit-client.component";
import ClientsList from "./components/clients-list.component";

import logo from "./logo.png";
import Login from "./components/log-in.component";
import Dashboard from"./components/dashboard.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img src={logo} width="50" height="50" alt="CodingTheSmartWay.com" />
            <Link to="/" className="navbar-brand"> BSR School App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Student's List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">New Student</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/login" className="nav-link">Log In</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={ClientsList} />
          <Route path="/edit/:id" component={EditClient} />
          <Route path="/create" component={CreateClient} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />


        </div>
      </Router>
    );
  }
}

export default App;
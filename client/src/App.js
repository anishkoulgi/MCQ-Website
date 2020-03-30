import React, { Component } from "react";
import "./App.css";
import { Login } from "./components/login";
import Signup from "./components/signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

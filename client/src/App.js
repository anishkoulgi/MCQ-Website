import React, { Component } from "react";
import "./App.css";
import { Login } from "./components/login";
import Signup from "./components/signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/Navbar/SideDrawer";
import UserContextProvider from "./contexts/UserContext";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  sideDrawerClose = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
    }
    return (
      <div className="App" style={{ height: "100%" }}>
        <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        <div onClick={this.sideDrawerClose}>
          <Router>
            <Switch>
              <UserContextProvider>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
              </UserContextProvider>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

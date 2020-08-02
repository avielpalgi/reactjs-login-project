import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import "../src/FontawsomeIcons";
import {
  BrowserRouter,
  Route,
  Link,
  withRouter,
  Switch,
} from "react-router-dom";
import Reset from "./Reset";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:''
    };
  }
  componentDidMount(){
    if (localStorage.getItem('User') !== null) {
      let user = JSON.parse(localStorage.getItem('User'))
      this.props.history.push({
        pathname: "/home/",
        state: { User:user}
    });
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/reset">
            <Reset />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

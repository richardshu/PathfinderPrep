import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Team, Tutor, Student } from "./components/pages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team" component={Team} />
          <Route path="/tutor" component={Tutor} />
          <Route path="/student" component={Student} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

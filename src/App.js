import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import { Home, Team, Tutor, Student } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/team" component={Team} />
          <Route path="/tutor" component={Tutor} />
          <Route path="/student" component={Student} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

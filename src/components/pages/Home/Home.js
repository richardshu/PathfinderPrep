import React, { Component } from "react";
import { Banner, About, Universities, Stats, Subjects, Achievements } from ".";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Banner />
        <About />
        <Universities />
        <Stats />
        <Subjects />
        {/* <Achievements /> */}
        <br />
      </div>
    );
  }
}

export default Home;

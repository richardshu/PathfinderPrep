import React, { Component } from "react";
import "./Home.css";

import { Banner, About, Universities, Stats, Subjects, Achievements } from ".";

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

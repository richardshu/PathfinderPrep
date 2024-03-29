import React, { Component } from "react";
import {
  Banner,
  About,
  Universities,
  Stats,
  Subjects,
  Testimonials,
  FAQ,
} from ".";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Banner />
        <About />
        <Universities />
        <Testimonials />
        <Stats />
        <Subjects />
        <FAQ />
        <br />
      </div>
    );
  }
}

export default Home;

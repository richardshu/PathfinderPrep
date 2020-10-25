import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Stats.css";

class Stats extends Component {
  render() {
    return (
      <Container>
        <h1 className="section-title">Some of our stats</h1>
        <div className="stats-container">
          <div className="stats-tile">4.0 GPA</div>
          <div className="stats-tile">35+ ACT</div>
          <div className="stats-tile">1540+ SAT</div>
        </div>
      </Container>
    );
  }
}

export default Stats;

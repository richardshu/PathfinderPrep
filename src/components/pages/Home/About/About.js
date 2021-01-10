import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./About.css";

class About extends Component {
  render() {
    return (
      <Container className="About">
        <h1 className="section-title">Who we are</h1>
        <p>
          We're a team of students who attend Ivy League and other top schools.
          We provide tutoring and college consulting to help you ace the AP, IB,
          SAT, ACT, and PSAT exams and prep you for college application essays,
          extracurriculars, and interviews.
        </p>
        <p>
          As a student-run organization, our goal is to help students excel
          academically and donate as much as we can to charity.
        </p>
      </Container>
    );
  }
}

export default About;

import React, { Component } from "react";
import { Container } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container>
        <h1 className="section-title">Who we are</h1>
        <p>
          We're a team of students who attend Ivy League and other top schools.
          We provide tutoring and college counseling services to help you boost
          your GPA, ace the SAT/ACT, and get into the college of your dreams.
        </p>
        <p>
          We prep you for AP, IB, SAT, ACT, PSAT, and college applications
          (essays, extracurriculars, interviews).
        </p>
      </Container>
    );
  }
}

export default About;

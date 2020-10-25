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
          We provide tutoring and college counseling to help you boost your GPA,
          ace the SAT/ACT, and get into the school of your dreams. Our services
          include AP, IB, SAT, ACT, PSAT, and college applications (essays,
          extracurriculars, interviews).
        </p>
        <p>
          As a student-run organization, our goal isn't profit but rather to
          make a sizable impact on the world by helping students excel
          academically and donating as much as we can to charity.
        </p>
      </Container>
    );
  }
}

export default About;

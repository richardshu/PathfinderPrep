import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import BannerImage from "../../../images/banners/student.jpg";
import "./Student.css";

const changingText = ["GPA", "SAT score", "ACT score", "knowledge"];

class Student extends Component {
  render() {
    return (
      <div className="Student">
        <img className="banner-img" src={BannerImage} alt="banner" />
        <Container className="banner-text">
          <div className="banner-title">
            <span className="regular-text">Boost your</span>
            <span className="bracket"> [ </span>
            <div className="animated-text-container-container">
              <div className="animated-text-container">
                {changingText.map((text, key) => {
                  return <div key={key}>{text}</div>;
                })}
              </div>
            </div>
            <span className="bracket">]</span>
          </div>

          <p className="banner-description">Your first lesson is free!</p>
          <Button
            className="banner-btn"
            variant="outline-light"
            size="lg"
            href="mailto:pathfinderpreparation@gmail.com"
          >
            Email Us
          </Button>
        </Container>
      </div>
    );
  }
}

export default Student;

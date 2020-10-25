import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import "./Banner.css";

import BackgroundImage from "../../../../images/banners/home.jpg";

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <img className="banner-img" src={BackgroundImage} alt="banner" />
        <Container className="banner-text">
          <p className="banner-title">Pathfinder Prep</p>
          <p className="banner-description">
            We'll help you get into the school of your dreams.
          </p>
          <Button
            className="banner-btn"
            variant="outline-light"
            size="lg"
            href="./student"
          >
            Become a Student
          </Button>
          <Button
            className="banner-btn"
            variant="outline-light"
            size="lg"
            href="./tutor"
          >
            Become a Tutor
          </Button>
        </Container>
      </div>
    );
  }
}

export default Banner;

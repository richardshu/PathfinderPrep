import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import BannerImage from "../../../images/banners/tutor.jpg";
import "./Tutor.css";

class Tutor extends Component {
  render() {
    return (
      <div className="Tutor">
        <img className="banner-img" src={BannerImage} alt="banner" />
        <Container className="banner-text">
          <p className="banner-title">Join Us</p>
          <p className="banner-description">
            We're looking to expand our team.
          </p>
          <Button
            className="banner-btn"
            variant="outline-light"
            size="lg"
            target="_blank"
            href="https://form.typeform.com/to/gt4bAdJW"
          >
            Apply
          </Button>
        </Container>
      </div>
    );
  }
}

export default Tutor;

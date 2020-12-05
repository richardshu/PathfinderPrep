import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import BannerImage from "../../../../images/banners/home.jpg";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <img className="banner-img" src={BannerImage} alt="banner" />
        <Container className="banner-text">
          <p className="banner-title">Pathfinder Prep</p>
          <p className="banner-description">
            We'll prep you for the school of your dreams.
          </p>
          <Link to="/student">
            <Button className="banner-btn" variant="outline-light" size="lg">
              Become a Student
            </Button>
          </Link>
          <Link to="/tutor">
            <Button className="banner-btn" variant="outline-light" size="lg">
              Become a Tutor
            </Button>
          </Link>
        </Container>
      </div>
    );
  }
}

export default Banner;

import React, { Component } from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import AccordionToggle from "../../AccordionToggle/AccordionToggle";
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
            target="_blank"
            href="https://pathfinderpreparation.typeform.com/to/bq069dEj"
          >
            Sign Up
          </Button>
        </Container>

        <Container className="FAQ">
          <h1 className="section-title">FAQ</h1>
          <Accordion>
            <Card>
              <AccordionToggle as={Card.Header} eventKey="0">
                How much do you charge per hour?
              </AccordionToggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  We charge different rates for different subject, but the first
                  session is free!
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <AccordionToggle as={Card.Header} eventKey="1">
                How do I book a session?
              </AccordionToggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Simply fill out our{" "}
                  <a href="https://pathfinderpreparation.typeform.com/to/bq069dEj">
                    form
                  </a>{" "}
                  which takes 1 minute. We'll match you with a tutor and get to
                  work!
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <AccordionToggle as={Card.Header} eventKey="2">
                How does payment work?
              </AccordionToggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  We accept payments through Zelle, Venmo, or PayPal.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
    );
  }
}

export default Student;

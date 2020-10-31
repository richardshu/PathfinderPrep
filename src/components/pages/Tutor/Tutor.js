import React, { Component } from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
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
        <Container className="FAQ">
          <h1 className="section-title">FAQ</h1>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Why should I join the organization as a tutor?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Pathfinder is an incredibly exciting and growing organization
                  with an emphasis on donating to charity. We also value your
                  time and only require you to tutor for the hours you're
                  assigned.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                How much will I make an hour?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  We pay our tutors a flat rate of $20/hour.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Am I the right fit for Pathfinder?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  We're looking for ambitious college students who have a
                  passion for helping students and giving back to the community.
                  Apply{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://form.typeform.com/to/gt4bAdJW"
                  >
                    here
                  </a>
                  !
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
    );
  }
}

export default Tutor;

import React, { Component } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import "./FAQ.css";

class FAQ extends Component {
  render() {
    return (
      <Container className="FAQ">
        <h1 className="section-title">FAQ</h1>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              How are you tutoring students during COVID?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>We tutor students virtually through Zoom.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              What makes Pathfinder unique compared to other test prep and
              tutoring organizations?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                We're a student-run org with tutors who attend Ivy League and
                other top schools. All of us have a record of high academic
                achievement whether it's earning school valedictorian, achieving
                a 1500+ score on the SAT, or getting 5s in a wide range of AP
                exams.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Where does the money go?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                For every $30 we make, we pay our tutors $20 and donate the rest
                to charity.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  }
}

export default FAQ;

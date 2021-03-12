import React, { Component } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import AccordionToggle from "../../../AccordionToggle/AccordionToggle";
import "./FAQ.css";

class FAQ extends Component {
  render() {
    return (
      <Container className="FAQ">
        <h1 className="section-title">FAQ</h1>
        <Accordion>
          <Card>
            <AccordionToggle eventKey="0">
              How are you tutoring students during COVID?
            </AccordionToggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>We tutor students virtually through Zoom.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <AccordionToggle eventKey="1">
              What makes Pathfinder unique compared to other test prep and
              tutoring organizations?
            </AccordionToggle>
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
            <AccordionToggle eventKey="2">
              Where does the money go?
            </AccordionToggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                The majority goes towards paying our tutors, but we donate the
                rest to charity!
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  }
}

export default FAQ;

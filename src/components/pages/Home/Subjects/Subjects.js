import React, { Component } from "react";
import { Badge, Container } from "react-bootstrap";
import { SubjectsData } from "../../../../data/subjects.js";
import "./Subjects.css";

class Subjects extends Component {
  render() {
    return (
      <Container>
        <h1 className="section-title">We've got you covered</h1>
        <div className="subjects-container">
          {SubjectsData.map((subject, key) => {
            return (
              <div className="subject" key={key}>
                <h4>
                  <Badge variant="light">{subject}</Badge>
                </h4>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default Subjects;

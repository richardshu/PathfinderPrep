import React, { Component } from "react";
import "./Student.css";

import { Container } from "react-bootstrap";

class Student extends Component {
  state = {};
  render() {
    return (
      <div className="Student">
        <Container>
          <h1>Student Page</h1>
        </Container>
      </div>
    );
  }
}

export default Student;

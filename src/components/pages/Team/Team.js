import React, { Component } from "react";
import "./Team.css";

import { Container, Card } from "react-bootstrap";
import { TeamData } from "../../../data/team.js";

class Team extends Component {
  render() {
    return (
      <div className="Team">
        <Container>
          <h1 className="page-title">Our Team</h1>
          <div className="card-container">
            {TeamData.map((tutor, key) => {
              return (
                <Card key={key} style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={require(`../../../images/tutors/${tutor.id}.jpg`)}
                    alt={tutor.name}
                  />
                  <Card.Body>
                    <Card.Title>
                      <span>{tutor.name}</span>
                      <br />
                      <span className="tutor-uni">{tutor.university}</span>
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default Team;

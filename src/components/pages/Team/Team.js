import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { TeamData } from "../../../data/team.js";
import "./Team.css";

class Team extends Component {
  render() {
    return (
      <div className="Team">
        <Container>
          <h1 className="section-title">Our Team</h1>
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
                    <Card.Title>{tutor.name}</Card.Title>
                    <Card.Text>{tutor.university}</Card.Text>
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

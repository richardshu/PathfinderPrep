import React, { Component } from "react";
import { UniversitiesData } from "../../../../data/universities.js";
import "./Universities.css";

// import { Container } from "react-bootstrap";

class Universities extends Component {
  render() {
    return (
      <div>
        <h1 className="section-title">Our tutors attend</h1>
        <div className="carousel-container">
          <div className="carousel">
            {UniversitiesData.map((university, index) => {
              return (
                <div key={index}>
                  <span className="uni-helper"></span>
                  <img
                    src={require(`../../../../images/${university}.png`)}
                    alt={university}
                    className="uni-logo"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Universities;

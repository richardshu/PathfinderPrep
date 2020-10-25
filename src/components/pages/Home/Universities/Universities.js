import React, { Component } from "react";
import { UniversitiesData } from "../../../../data/universities.js";
import "./Universities.css";

class Universities extends Component {
  render() {
    return (
      <div className="Universities">
        <h1 className="section-title">Our tutors attend</h1>
        <div className="carousel-container">
          <div className="carousel">
            {UniversitiesData.map((university, key) => {
              return (
                <div key={key}>
                  <span className="uni-helper"></span>
                  <img
                    src={require(`../../../../images/universities/${university}.png`)}
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

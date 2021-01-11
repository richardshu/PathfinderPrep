import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { TestimonialsData } from "../../../../data/testimonials.js";
import "./Testimonials.css";

class Testimonials extends Component {
  render() {
    return (
      <div className="Testimonials">
        <h1 className="section-title">Testimonials</h1>
        <Container className="testimonials-container">
          {TestimonialsData.map((testimonial, key) => {
            return (
              <div key={key} className="testimonial">
                <span className="quote">“</span>
                <p>
                  <em>{testimonial.testimonial}</em>
                </p>
                <p>— {testimonial.person}</p>
              </div>
            );
          })}
        </Container>
      </div>
    );
  }
}

export default Testimonials;

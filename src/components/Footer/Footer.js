import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <div className="footer-title">Get In Touch</div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/pathfinderprep/"
            >
              <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Pathfinder-Prep-108531454364085"
            >
              <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
            </a>
            <a href="mailto:pathfinderpreparation@gmail.com">
              <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
            </a>
          </div>
          <a href="mailto:pathfinderpreparation@gmail.com">
            pathfinderpreparation@gmail.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;

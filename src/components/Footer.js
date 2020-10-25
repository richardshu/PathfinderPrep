import React, { Component } from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="mailto:pathfinderpreparation@gmail.com">
          pathfinderpreparation@gmail.com
        </a>
        <ul>
          <li>
            <a target="_blank" href="https://www.instagram.com/pathfinderprep/">
              <FontAwesomeIcon icon={faInstagram} />
              <span className="label"> Instagram</span>
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;

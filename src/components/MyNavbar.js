import React, { Component } from "react";
import "./MyNavbar.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="./">Pathfinder</Navbar.Brand>
        <Navbar.Toggle
          className="menu-icon"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="./team">Our Team</Nav.Link>
            <NavDropdown
              title="Join Us"
              id="collapsible-nav-dropdown"
              alignRight
            >
              <NavDropdown.Item href="./apply">Become a Tutor</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="./student">
                Become a Student
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;

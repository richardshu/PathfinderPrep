import React, { Component } from "react";
import "./Header.css";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
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
                  <NavDropdown.Item href="./tutor">
                    Become a Tutor
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="./student">
                    Become a Student
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;

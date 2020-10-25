import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Pathfinder
            </Navbar.Brand>
            <Navbar.Toggle
              className="menu-icon"
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link as={Link} to="/team">
                  Our Team
                </Nav.Link>
                <NavDropdown
                  title="Join Us"
                  id="collapsible-nav-dropdown"
                  alignRight
                >
                  <NavDropdown.Item as={Link} to="/tutor">
                    Become a Tutor
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/student"}>
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

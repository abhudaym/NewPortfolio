import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../public/images/logo.png";

function MainNav() {
  return (
    <Navbar collapseOnSelect bg="transparent" variant="transparent" fixed="top">
      <Navbar.Brand className="navbrand" href="#home">
        <img src={logo} alt="logo" className="logo" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="navlink" href="#about">
          About
        </Nav.Link>
        <Nav.Link className="navlink" href="#resume">
          Resume
        </Nav.Link>
        <Nav.Link className="navlink" href="#contacts">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MainNav;

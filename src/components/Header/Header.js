import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import './header.scss';

const Header = () => (
  <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
    <Navbar.Brand href="#home">Interactive Resume</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#experiences">Experiences</Nav.Link>
        <Nav.Link href="#abilities">Abilities</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
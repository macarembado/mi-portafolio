import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Linkedin, Github } from "react-bootstrap-icons";
import "./navbar.css";

function MyNavbar() {
  return (
    <Navbar bg="customBackground" expand="lg" variant="dark" className="navbar-custom" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home" className="brand">
          M
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#proyectos" className="navLink">
              Proyectos
            </Nav.Link>
            <Nav.Link href="#contacto" className="navLink">
              Curriculum
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/mar%C3%ADa-macarena-rembado-99309b272/" target="_blank" className="navLink">
              <Linkedin className="icon" />
            </Nav.Link>
            <Nav.Link href="https://github.com/macarembado" target="_blank" className="navLink">
              <Github className="icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

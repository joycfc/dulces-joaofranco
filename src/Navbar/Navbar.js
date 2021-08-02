import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbarstyles.css";
import Logo from "../images/logo-01.svg";


export const NavbarB = () => {
  return (
    <div>
      <Navbar className="color-nav" expand="lg">
        <Container >
          <a className="Navbar.Brand" href="#">
            <img
              width="120px"
              height="auto"
              className="img-responsive"
              src={Logo}
              alt="logo"
            />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mx-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Productos">Productos</Nav.Link>
              <Nav.Link href="#Servicios">Servicios</Nav.Link>
              <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
              <Nav.Link href="#Contactos">Contactos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

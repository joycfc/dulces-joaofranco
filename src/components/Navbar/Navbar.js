import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbarstyles.css";
import Logo from "../../images/logo-01.svg";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavbarB = () => {
  return (
    <div>
      <Navbar className="color-nav" expand="lg">
        <Container>
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
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mx-auto ">
              <a className="enlaces" href="#home">
                Home
              </a>
              <a className="enlaces" href="#Productos">
                Productos
              </a>
              <a className="enlaces" href="#Servicios">
                Servicios
              </a>
              <a className="enlaces" href="#Nosotros">
                Nosotros
              </a>
              <a className="enlaces" href="#Contactos">
                Contactos
              </a>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
};

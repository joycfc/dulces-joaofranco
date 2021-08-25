//* IMPORTAMOS COMPONENTES DE REACT
import React from "react";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

//* IMPORTAMOS LOS ESTILOS DE BOOTSTRAP
import "bootstrap/dist/css/bootstrap.css";

//* IMPORTAMOS LOS ESTILOS DEL NAVEGADOR
import "./Navbarstyles.css";

//* IMPORTAMOS EL LOGO
import Logo from "../../images/logo-01.svg";

//* IMPORTAMOS EL COMPONENTE WIDGET
import { CartWidget } from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

export const NavbarB = () => {
    return (
        <div>
            <Navbar className="color-nav" expand="lg">
                <Container>
                    <Link to="/">
                        <a className="Navbar.Brand" href="#">
                            <img
                                width="120px"
                                height="auto"
                                className="img-responsive"
                                src={Logo}
                                alt="logo"
                            />
                        </a>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end "
                    >
                        <Nav className="mx-auto ">
                            <Link to="/">
                                <a className="enlaces">Home</a>
                            </Link>

                            <Link to="/ItemListContainer">
                                <a className="enlaces">Productos</a>
                            </Link>
                            
                            <Link to="/Contactos">
                                <a className="enlaces">Contactos</a>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link>
                        <CartWidget />
                    </Link>
                </Container>
            </Navbar>
        </div>
    );
};

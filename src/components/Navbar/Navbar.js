//* IMPORTAMOS COMPONENTES DE REACT
import React from "react";

//* IMPORTAMOS COMPONENTES DE REACT-BOOTSTRAP
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

//* IMPORTAMOS LOS ESTILOS DEL NAVEGADOR
import "./Navbarstyles.css";

//* IMPORTAMOS EL LOGO
import Logo from "../../images/logo-01.svg";

//* IMPORTAMOS EL COMPONENTE WIDGET
import { CartWidget } from "../CartWidget/CartWidget";

//* IMPORTAMOS EL COMPONENTE LINK PARA LOS ENLACES
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <Navbar expand="lg" className="color-nav" expand="lg">
                <Navbar.Brand translate="no">
                    <Link to="/">
                        <a className="Navbar.Brand" href="#">
                            <img
                                className="img-responsive logo"
                                src={Logo}
                                alt="logo"
                            />
                        </a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"className=" menuResponsive" />
                <Navbar.Collapse 
                    id="navbarScroll"
                    className="justify-content-md-center mr-auto"
                >
                    <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link as={Link} to="/" exact>
                            <p className="enlaces"> Home </p>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/ItemListContainer">
                            <p className="enlaces"> Productos </p>
                        </Nav.Link>
                        <NavDropdown
                            title="Categorías"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item as={Link} to="/category/postres">
                                <p className="enlacesDrop"> Postres </p>
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/regalos">
                                <p className="enlacesDrop"> Regalos </p>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse >
                <div className="d-none d-lg-flex">
                    <Link>
                        <CartWidget />
                    </Link>
                </div>
            </Navbar>
        </div>
    );
};

export default NavBar;

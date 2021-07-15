import React from 'react';
//BOOTSTRAP
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/imagenes/logo.jpg';

import { Link } from 'react-router-dom';

export default function Navigatorbar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="info"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              width="65"
              height="65"
              className="d-inline-block align-top"
              alt="Guitar Hotel logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/habitaciones">
              Habitaciones
            </Link>

            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <NavDropdown title="Nosotros" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#Galeria">
                Galeria de Fotos
              </NavDropdown.Item>
              <NavDropdown.Item href="#Ubicacion">Ubicacion</NavDropdown.Item>
              <NavDropdown.Item href="#Contacto">Contacto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}


import React from 'react'
//BOOTSTRAP
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/imagenes/logo.jpg'


export default function Navigatorbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" sticky="top">
            <Navbar.Brand href="#home">
            <img
                src={logo}
                width="65"
                height="65"
                className="d-inline-block align-top"
                alt="Guitar Hotel logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className=''  href="#habitaciones">Habitaciones</Nav.Link>
                <Nav.Link href="#servicios">Servicios</Nav.Link>
                <NavDropdown title="Nosotros" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#Galeria">Galeria de Fotos</NavDropdown.Item>
                    <NavDropdown.Item href="#Ubicacion">Ubicacion</NavDropdown.Item>
                    <NavDropdown.Item href="#Contacto">Contacto</NavDropdown.Item>
                    
                    
                </NavDropdown>
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
        </>
    )
};

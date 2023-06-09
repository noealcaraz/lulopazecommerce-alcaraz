import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
      <Navbar bg="secondary" variant="dark" expand="lg">
        <Navbar.Brand href="/">Macetas LULOPAZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="./about">Barnizadas</Nav.Link>
            <Nav.Link href="./contact">Pintadas a Mano</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

import React, { useContext } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import CartWidget from '../../pages/Carrito/CartWidget';
import CartOverlay from '../../pages/Carrito/CartOverlay';
import { CartContext } from '../../context/ShoppingCartContext';
import lulopazlogo from '../../assets/lulopaz.png'

function NavbarHeader() {
  const { isCartOpen } = useContext(CartContext);
  

  return (
    <header style={{ position: 'sticky', top: 0, width: '100%', zIndex: 999, backgroundColor: 'white' }}>
      <a href="/" className='logito'>
        <img src={lulopazlogo} alt="logo" />
      </a>
      <Nav className='barranavega'>
        <Nav.Item className='estilolink'>
          <Nav.Link href="/" variant='dark'>
            INICIO
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/contacto' title="/contacto">
            CONTACTO
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="PRODUCTOS" id="nav-dropdown">
          <NavDropdown.Item href="/product-category/cemento"> Macetas de cemento </NavDropdown.Item>
          <NavDropdown.Item href="/product-category/madera pintada"> Macetas de madera pintadas </NavDropdown.Item>
          <NavDropdown.Item href="/product-category/porcelana"> Macetas de porcelana </NavDropdown.Item>
        </NavDropdown>
        <CartWidget />
      </Nav>
      {isCartOpen && <CartOverlay />}
    </header>
  );
}

export default NavbarHeader;


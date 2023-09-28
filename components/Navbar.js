import React from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaMale, FaFemale, FaShoppingCart } from 'react-icons/fa';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <p className="navbar-logo">Shopping Cart</p>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/">
              <p className="nav-link">
                <FaHome /> Home
              </p>
            </Link>
          </Nav>
          <Nav>
             <Link href="/cart">
                <p className="nav-link">
                 <FaShoppingCart /> Cart
                 </p>
        </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

// src/components/Header.js
import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('.navbar-eid');
    if (section && navbar) {
      const navHeight = navbar.getBoundingClientRect().height;
      const targetY =
        section.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
    setExpanded(false);
  };

  return (
    <Navbar
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
      expand="lg"
      variant="dark"
      className="navbar-eid fixed-top shadow-sm"
    >
      <Container>
        <Navbar.Brand
          onClick={() => scrollToSection('hero')}
          style={{ cursor: 'pointer' }}
        >
          🐐 Eid-ul-Adha Qurbani
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link onClick={() => scrollToSection('howitworks')}>
              How It Works
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('gallery')}>
              Gallery
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('fatwa')}>
              Certificates of Proof
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('packages')}>
              Packages
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('payments')}>
              Payments
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('locations')}>
              Centers
            </Nav.Link>

            <Button
              className="btn-book ms-lg-3 mt-2 mt-lg-0"
              onClick={() => scrollToSection('packages')}
            >
              Book Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

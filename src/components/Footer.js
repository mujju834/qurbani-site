// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="gy-4">
          {/* Get in Touch */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <h5 className="fw-bold mb-3">Get in Touch</h5>
            <p className="mb-2">
              <FaMapMarkerAlt className="me-2 text-success" />
              Shifa Hijama Center, Indra Nagar, Mehdipatnam, Hyderabad
            </p>
            <p className="mb-2">
              <FaPhoneAlt className="me-2 text-success" />
              +91 9398167062 (Abdullah)
            </p>
            <p className="mb-0">
              <FaPhoneAlt className="me-2 text-success" />
              +91 9391856219 (Abdul Jabbar)
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <Nav
              className="flex-column justify-content-center justify-content-md-start"
            >
              {[
                ['Home', 'hero'],
                ['How It Works', 'howitworks'],
                ['Gallery', 'gallery'],
                ['Fatwa', 'fatwa'],
                ['Packages', 'packages'],
                ['Payments', 'payments'],
                ['Centers', 'locations'],
              ].map(([label, id]) => (
                <Nav.Link
                  key={id}
                  href={`#${id}`}
                  className="ps-0 text-white-50 mb-2"
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row className="mt-5">
          <Col className="text-center text-white-50">
            © {new Date().getFullYear()} Eid-ul-Adha Qurbani. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

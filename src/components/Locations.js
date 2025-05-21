// src/components/Locations.js
import React from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Locations() {
  return (
    <section id="locations" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 display-6 text-success">
          Booking Centers
        </h2>

        <Row className="g-4 justify-content-center">

          {/* Marhaba Services */}
          <Col xs={12} md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Header className="bg-success text-white text-center fs-5 fw-bold">
                Marhaba Services
              </Card.Header>
              <Card.Body>
                {/* Hyderabad branch */}
                <Card.Title className="text-success fw-semibold">
                  Shifa Hijama Center
                </Card.Title>
                <Card.Text className="text-muted mb-3">
                  Indra Nagar, Qadar Bagh, Nanal Nagar, Mehdipatnam, Hyderabad
                </Card.Text>
                <ListGroup variant="flush" className="mb-4">
                  <ListGroup.Item className="ps-0 border-0">
                    <FaPhoneAlt className="me-2 text-success" />
                    <a href="tel:+919391856219" className="text-decoration-none">
                      +91 9391856219
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="ps-0 border-0">
                    <FaPhoneAlt className="me-2 text-success" />
                    <a href="tel:+918074420917" className="text-decoration-none">
                      +91 8074420917
                    </a>
                  </ListGroup.Item>
                </ListGroup>

                {/* USA coordination */}
                <Card.Title className="text-success fw-semibold">
                  USA Coordination
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item className="ps-0 border-0">
                    <FaPhoneAlt className="me-2 text-success" />
                    <a href="tel:+15618174738" className="text-decoration-none">
                      +1 5618174738 (Zelle)
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* Madarase Khalid Bin Walid */}
          <Col xs={12} md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Header className="bg-success text-white text-center fs-5 fw-bold">
                Madarase Khalid Bin Walid
              </Card.Header>
              <Card.Body>
                <Card.Text className="text-muted mb-3 text-center">
                  Niali, Cuttack, Odisha
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item className="ps-0 border-0">
                    <FaPhoneAlt className="me-2 text-success" />
                    <a href="tel:+919391856219" className="text-decoration-none">
                      +91 9391856219
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="ps-0 border-0">
                    <FaPhoneAlt className="me-2 text-success" />
                    <a href="tel:+918074420917" className="text-decoration-none">
                      +91 8074420917
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </div>
    </section>
  );
}

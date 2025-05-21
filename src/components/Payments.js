// src/components/Payments.js
import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';

const PAYMENT_METHODS = [
  { name: 'PhonePe', id: '9391856219@ybl', qr: '/qr/phonepe.jpeg' },
  { name: 'Google Pay', id: 'abdullahsumama550@oksbi', qr: '/qr/gpay.jpeg' },
  { name: 'Zelle', id: '561-817-4738', qr: '/qr/zelle.jpeg' },  // new entry
];

export default function Payments() {
  return (
    <section id="payments" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 display-6 text-success">
          Pay via UPI & Zelle
        </h2>
        <Row className="g-4 justify-content-center">
          {PAYMENT_METHODS.map((m, i) => (
            <Col key={i} xs={12} sm={6} md={4} lg={3}>
              <Card className="text-center h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold mb-2">{m.name}</Card.Title>
                  <Card.Text className="mb-3">{m.id}</Card.Text>
                  <Image 
                    src={m.qr} 
                    fluid 
                    className="mb-3" 
                    style={{ maxHeight: '200px', objectFit: 'contain' }} 
                  />
                  <Card.Text className="mt-auto text-muted">
                    Scan QR to pay via {m.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

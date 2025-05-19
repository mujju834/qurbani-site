// src/components/Fatwa.js
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const FATWAS = [
  { lang: 'English', src: '/images/fatwa-english.jpeg' },
  { lang: 'اردو', src: '/images/fatwa-urdu.jpeg' },
];

export default function Fatwa() {
  return (
    <section id="fatwa" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 display-6 text-success">Qurbani Fatwa</h2>
        <Row className="g-4">
          {FATWAS.map((f, i) => (
            <Col key={i} xs={12} md={6}>
              <Card>
                <Card.Header className="fw-bold">{f.lang}</Card.Header>
                <Card.Img variant="bottom" src={f.src} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

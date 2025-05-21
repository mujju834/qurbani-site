// src/components/Gallery.js
import React from 'react';
import { Row, Col, Image, Modal, Button } from 'react-bootstrap';

const IMAGES = [
  '/images/animal-1.jpeg',
  '/images/animal-2.jpeg',
  '/images/animal-3.jpeg',
  '/images/animal-4.jpeg',
];

export default function Gallery() {
  const [show, setShow] = React.useState(false);
  const [idx, setIdx] = React.useState(0);

  return (
    <section id="gallery" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 display-6 text-success">
          Our Farm Animals
        </h2>

        {/* Thumbnails row */}
        <Row className="g-3">
          {IMAGES.map((src, i) => (
            <Col key={i} xs={6} md={3}>
              <Image
                src={src}
                thumbnail
                onClick={() => {
                  setIdx(i);
                  setShow(true);
                }}
                style={{ cursor: 'pointer' }}
              />
            </Col>
          ))}
        </Row>

        {/* Video with heading/description */}
        <Row className="g-3 mt-5">
          <Col xs={12}>
            <h5 className="text-success text-center fw-bold mb-2">
              Farm Video
            </h5>
            <p className="text-center text-muted mb-4">
              Take a quick tour of our farm and see our goats in their natural environment.
            </p>
          </Col>
          <Col xs={6} md={3} className="mx-auto">
            <video
              src="/videos/animal-video-1.mp4"
              className="w-100 rounded"
              controls
              autoPlay
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>

        {/* Lightbox modal for images */}
        <Modal show={show} onHide={() => setShow(false)} centered size="lg">
          <Modal.Body className="p-0">
            <Image src={IMAGES[idx]} fluid />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
}

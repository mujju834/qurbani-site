import React from 'react';

export default function Testimonials() {
  const quotes = [
    { name: 'Saira K.', text: 'Super clean process and on-time delivery!' },
    { name: 'Ahmed R.', text: 'Great quality and very professional.' },
  ];

  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">What Clients Say</h2>
        <div className="row justify-content-center">
          {quotes.map((q, i) => (
            <div key={i} className="col-md-6 mb-3">
              <div className="border rounded p-4">
                <p className="mb-2 fst-italic">“{q.text}”</p>
                <p className="text-end fw-bold mb-0">— {q.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

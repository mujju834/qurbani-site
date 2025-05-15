// src/components/Locations.js
import React from 'react';

export default function Locations() {
  const centers = [
    {
      area: 'Shifa Hijama Center',
      address: 'Indra Nagar, Qadar Bagh, Nanal Nagar, Mehdipatnam, Hyderabad',
      contacts: ['9391856219', '8074420917'],
    },
    {
      area: 'Madarase Khalid Bin Walid',
      address: 'Niali, Cuttack, Odisha',
      contacts: ['9391856219', '8074420917'],
    },
    {
      area: 'Marhaba Services',
      address: 'Serving India (Bull Qurbani) – USA Coordination',
      contacts: ['5618174738 (Zelle)'],
    },
  ];

  return (
    <section id="locations" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Booking Centers</h2>
        <div className="row">
          {centers.map((c, i) => (
            <div key={i} className="col-12 col-md-4 text-center mb-4">
              <h5 className="fw-semibold">{c.area}</h5>
              <p className="mb-1">{c.address}</p>
              <p>
                {c.contacts.map((num, idx) => (
                  <a
                    key={idx}
                    href={`tel:${num.replace(/\D/g, '')}`}
                    className="d-block"
                  >
                    📞 {num}
                  </a>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

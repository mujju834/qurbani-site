// src/components/Packages.js
import React from 'react';

export default function Packages() {
  const plans = [
    {
      id: 'abdullah-basic',
      brand: 'Abdullah Goat Farm (Hyd)',
      title: 'Basic Goat',
      price: '₹13,000',
      features: [
        'Slaughter & Cutting',
        'Head, legs & kidneys provided',
      ],
      contacts: ['9398167062', '9000385313'], // primary first
    },
    {
      id: 'abdullah-premium',
      brand: 'Abdullah Goat Farm (Hyd)',
      title: 'Premium with Delivery',
      price: '₹13,500',
      features: [
        'Home Delivery (10–12 kg avg.)',
        'Clean & hygienic packaging',
      ],
      contacts: ['9398167062', '9000385313'],
    },
    {
      id: 'ijtemaai-hissa',
      brand: 'Ijtemaai Qurbani (Odisha)',
      title: 'Hissa Share',
      price: '₹3,000 / Hissa',
      features: [
        'Managed by Madarse Khalid Bin Walid Ulema',
        '15 years’ experience',
      ],
      contacts: ['9391856219', '8074420917'],
    },
    {
      id: 'marhaba-share',
      brand: 'Marhaba Qurbani (USA)',
      title: 'Bull Share',
      price: '$39.99',
      features: ['Includes cutting', 'Serving India-wide (Bull)'],
      contacts: ['5618174738'], // U.S. Zelle number
    },
    {
      id: 'marhaba-whole',
      brand: 'Marhaba Qurbani (USA)',
      title: 'Whole Bull',
      price: '$255.00',
      features: ['Includes cutting', 'Limited slots'],
      contacts: ['5618174738'],
    },
  ];

  // helper to build wa.me link
  const whatsappLink = (num) => {
    let digits = num.replace(/\D/g, '');
    // if 10 digits, assume India unless US entry (you can adjust)
    if (digits.length === 10) {
      // simple heuristic: Indian numbers start with 9; US numbers with area code not starting 9
      const country = digits[0] === '9' ? '91' : '1';
      digits = country + digits;
    }
    return `https://wa.me/${digits}`;
  };

  return (
    <section id="packages" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5">Our Qurbani Packages</h2>
        <div className="row g-4">
          {plans.map((p) => {
            const primary = p.contacts[0];
            return (
              <div key={p.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h6 className="text-muted">{p.brand}</h6>
                    <h5 className="card-title mt-2">{p.title}</h5>
                    <h3 className="fw-bold my-3">{p.price}</h3>
                    <ul className="flex-grow-1">
                      {p.features.map((f, i) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>
                    <p className="mt-3 mb-1">
                      <strong>Book & Chat:</strong>{' '}
                      {p.contacts.map((c, i) => (
                        <span key={i}>
                          {i > 0 && ', '}
                          {c}
                        </span>
                      ))}
                    </p>
                    <a
                      href={whatsappLink(primary)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success mt-auto"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

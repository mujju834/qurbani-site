// src/components/Packages.js
import React from 'react';

export default function Packages() {
  const plans = [
    {
      id: 'abd-basic-goat',
      brand: 'Abdullah Goat Farm - India (Hyd)',
      title: 'Basic Goat',
      price: '₹13,000 ($155)',
      features: [
        'Managed by Abdullah Goat‐Farm',
        'Slaughter & Cutting',
        'Head, legs & kidneys provided',
      ],
      contacts: ['+91 9398167062', '+91 9000385313'],
    },
    {
      id: 'abd-premium-goat',
      brand: 'Abdullah Goat Farm - India (Hyd)',
      title: 'Goat ‐ Premium with Delivery',
      price: '₹13,500 ($160)',
      features: [
        'Managed by Abdullah Goat‐Farm',
        'Home Delivery (10–12 kg avg.)',
        'Clean & hygienic packaging',
      ],
      contacts: ['+91 9398167062', '+91 9000385313'],
    },
    {
      id: 'abd-bull-share',
      brand: 'Abdullah Farm Bull Share - India (Hyd)',
      title: 'Bull Share',
      price: '₹5,000 ($60)',
      features: [
        'Managed by Abdullah Farm',
        'Clean & hygienic packaging',
        'Organs provided',
        'Premium delivery (+₹500)',
      ],
      contacts: ['+91 9391856219', '+91 9000385313'],
    },
    {
      id: 'abd-whole-bull',
      brand: 'Abdullah Farm Whole Bull - India (Hyd)',
      title: 'Whole Bull',
      price: '₹35,000 ($410)',
      features: [
        'Managed by Abdullah Farm',
        'Clean & hygienic packaging',
        'Organs provided',
        'Premium delivery (+₹500)',
      ],
      contacts: ['+91 9391856219', '+91 9000385313'],
    },
    {
      id: 'ijtemaai-hissa',
      brand: 'Ijtemaai Qurbani - India (Odisha)',
      title: 'Hissa Share',
      price: '₹3,000 / Hissa ($39.99)',
      features: [
        'Managed by Madarse Khalid Bin Walid Ulema',
        '15 years’ experience',
        'Distributed directly to poor & needy',
      ],
      contacts: ['+91 9391856219', '+91 8074420917'],
    },
    {
      id: 'marhaba-whole-bull',
      brand: 'Marhaba Qurbani',
      title: 'Whole Bull',
      price: '$255.00 (₹21,000)',
      features: [
        'Includes cutting',
        'Limited slots',
        'Distributed directly to poor & needy',
      ],
      contacts: ['+91 9391856219'],
    },
  ];

  // WhatsApp numbers
  const abdullahWA = '9398167062';     // for first two
  const jabbarWA   = '9391856219';     // for last four

  // Build a wa.me link
  const buildWhatsAppLink = (digits, title) => {
    let d = digits.replace(/\D/g, '');
    if (d.length === 10) d = '91' + d;  // all are Indian
    const text = encodeURIComponent(
      `Assalamu alaikum, I’d like to book the "${title}" package.`
    );
    return `https://wa.me/${d}?text=${text}`;
  };

  return (
    <section id="packages" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5 display-6 text-success">
          Our Qurbani Packages
        </h2>
        <div className="row g-4">
          {plans.map((plan, idx) => {
            // first two plans → Abdullah, others → Jabbar
            const waNumber = idx < 2 ? abdullahWA : jabbarWA;
            const waLink   = buildWhatsAppLink(waNumber, plan.title);

            return (
              <div key={plan.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm rounded-3 border-0">
                  <div className="card-body d-flex flex-column">
                    <h6 className="text-success fw-bold fs-5">
                      {plan.brand}
                    </h6>
                    <h5 className="card-title mt-2 fw-bold fs-4">
                      {plan.title}
                    </h5>
                    <h3 className="fw-bold my-3">{plan.price}</h3>

                    <ul className="list-unstyled flex-grow-1 mb-3 ps-0">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="mb-2">
                          <span className="me-2">→</span>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-3 mb-3">
                      <strong>Contacts:</strong>{' '}
                      {plan.contacts.map((c, i) => {
                        // make the designated WA number clickable
                        const raw = c.replace(/\D/g, '');
                        const isWA = raw === waNumber;
                        return (
                          <span key={i}>
                            {i > 0 && ', '}
                            {isWA ? (
                              <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none text-success fw-semibold"
                              >
                                {c}
                              </a>
                            ) : (
                              c
                            )}
                          </span>
                        );
                      })}
                    </p>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success mt-auto fw-semibold"
                    >
                      Book {plan.title}
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

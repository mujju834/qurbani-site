import React from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';


export default function HowItWorks() {
  const steps = [
    { icon: '🐐', title: 'Select Goat', desc: 'Choose your preferred weight & breed' },
    { icon: '🔪', title: 'Slaughter & Cut', desc: 'Hygienic, licensed process' },
    { icon: '📦', title: 'Home Delivery', desc: 'Packaged organs & meat separately' },
  ];

  return (
    <section id="howitworks" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">How It Works</h2>
        <div className="row g-4">
          {steps.map((s, i) => (
            <div key={i} className="col-md-4 text-center">
              <div className="fs-1">{s.icon}</div>
              <h5 className="mt-2">{s.title}</h5>
              <p className="text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

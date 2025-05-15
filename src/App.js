import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Locations from './components/Locations';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Packages />
        <Locations />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;

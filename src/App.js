import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Fatwa from './components/Fatwa';
import Payments from './components/Payments';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Gallery />
        <Fatwa />
        <Packages />
        <Payments />
        <Locations />
      </main>
      <Footer />
    </>
  );
}


export default App;

import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Cases from './components/Cases';
import Process from './components/Process';
import PriceCalculator from './components/PriceCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ExitPopup from './components/ExitPopup';

export default function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <FloatingWhatsApp />
      <ExitPopup />
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Cases />
      <Process />
      <PriceCalculator />
      <Contact />
      <Footer />
    </div>
  );
}

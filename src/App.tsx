import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Cases from './components/Cases';
import Process from './components/Process';
import PriceCalculator from './components/PriceCalculator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ExitPopup from './components/ExitPopup';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <ScrollProgress />
      <FloatingWhatsApp />
      <ExitPopup />
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Cases />
      <Process />
      <PriceCalculator />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

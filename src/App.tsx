import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
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
import NotFound from './components/NotFound';

function MainPage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-dark transition-colors duration-300">
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

export default function App() {
  return (
    <LangProvider>
    <BrowserRouter>
      <LoadingScreen />
      <ScrollProgress />
      <FloatingWhatsApp />
      <ExitPopup />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </LangProvider>
  );
}

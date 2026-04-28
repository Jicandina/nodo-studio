import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos',     href: '#casos' },
  { label: 'Proceso',   href: '#proceso' },
  { label: 'FAQ',       href: '#faq' },
  { label: 'Contacto',  href: '#contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (href: string) => {
    setMobile(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream/95 backdrop-blur-md border-b border-dark/10 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src="/logo-horizontal.png" alt="Nodo Studio" className="h-12 w-auto" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((link) => (
            <button key={link.href} onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-dark/70 hover:text-dark transition-colors">
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button onClick={() => scrollTo('#contacto')}
          className="hidden md:flex btn-dark">
          Hablemos →
        </button>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-dark" onClick={() => setMobile(!mobile)}>
          {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div className="md:hidden bg-cream border-t border-dark/10 px-6 py-4 space-y-1">
          {NAV.map((link) => (
            <button key={link.href} onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-dark hover:bg-dark/5 rounded-xl transition-colors">
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button onClick={() => scrollTo('#contacto')} className="btn-dark w-full justify-center">
              Hablemos →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

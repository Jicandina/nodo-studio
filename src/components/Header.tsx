import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

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
  const { dark, toggle }        = useDarkMode();

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
      scrolled
        ? 'bg-cream/95 dark:bg-dark/95 backdrop-blur-md border-b border-dark/10 dark:border-white/10 shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <img src="/logo-horizontal.png" alt="Nodo Studio" className="h-14 w-auto dark:brightness-0 dark:invert" />

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((link) => (
            <button key={link.href} onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-dark/70 dark:text-white/60 hover:text-dark dark:hover:text-white transition-colors">
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-xl border border-dark/15 dark:border-white/15 flex items-center justify-center text-dark/50 dark:text-white/50 hover:text-dark dark:hover:text-white transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => scrollTo('#contacto')} className="btn-dark">
            Hablemos →
          </button>
        </div>

        <button className="md:hidden p-2 text-dark dark:text-white" onClick={() => setMobile(!mobile)}>
          {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobile && (
        <div className="md:hidden bg-cream dark:bg-dark border-t border-dark/10 dark:border-white/10 px-6 py-4 space-y-1">
          {NAV.map((link) => (
            <button key={link.href} onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-dark dark:text-white hover:bg-dark/5 dark:hover:bg-white/5 rounded-xl transition-colors">
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex gap-2">
            <button onClick={toggle}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-dark/15 dark:border-white/15 rounded-xl text-sm font-medium text-dark dark:text-white">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {dark ? 'Modo claro' : 'Modo oscuro'}
            </button>
            <button onClick={() => scrollTo('#contacto')} className="btn-dark flex-1 justify-center">
              Hablemos →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

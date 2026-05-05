import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useLang } from '../context/LangContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile]     = useState(false);
  const { dark, toggle: toggleDark } = useDarkMode();
  const { lang, t, toggle: toggleLang } = useLang();

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
        <img src="/logo-horizontal.png" alt="Nodo Studio" className="h-14 w-auto dark:invert" />

        <nav className="hidden md:flex items-center gap-8">
          {t.header.nav.map((label, i) => (
            <button key={label} onClick={() => scrollTo(t.header.navHrefs[i])}
              className="text-sm font-medium text-dark/70 dark:text-white/60 hover:text-dark dark:hover:text-white transition-colors">
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="w-12 h-9 rounded-xl border border-dark/15 dark:border-white/15 flex items-center justify-center text-xs font-black text-dark/50 dark:text-white/50 hover:text-dark dark:hover:text-white transition-colors tracking-wider"
            aria-label="Toggle language"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-xl border border-dark/15 dark:border-white/15 flex items-center justify-center text-dark/50 dark:text-white/50 hover:text-dark dark:hover:text-white transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => scrollTo('#contacto')} className="btn-dark">
            {t.header.cta}
          </button>
        </div>

        <button className="md:hidden p-2 text-dark dark:text-white" onClick={() => setMobile(!mobile)}>
          {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobile && (
        <div className="md:hidden bg-cream dark:bg-dark border-t border-dark/10 dark:border-white/10 px-6 py-4 space-y-1">
          {t.header.nav.map((label, i) => (
            <button key={label} onClick={() => scrollTo(t.header.navHrefs[i])}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-dark dark:text-white hover:bg-dark/5 dark:hover:bg-white/5 rounded-xl transition-colors">
              {label}
            </button>
          ))}
          <div className="pt-2 flex gap-2">
            <button onClick={toggleLang}
              className="flex-1 flex items-center justify-center px-4 py-3 border border-dark/15 dark:border-white/15 rounded-xl text-sm font-black text-dark dark:text-white">
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button onClick={toggleDark}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-dark/15 dark:border-white/15 rounded-xl text-sm font-medium text-dark dark:text-white">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {dark ? t.header.lightLabel : t.header.darkLabel}
            </button>
            <button onClick={() => scrollTo('#contacto')} className="btn-dark flex-1 justify-center">
              {t.header.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

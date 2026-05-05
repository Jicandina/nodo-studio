import { lazy, Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';

const NodeCanvas = lazy(() => import('./NodeCanvas'));

function useTypewriter(words: readonly string[]) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setText('');
    setWordIdx(0);
    setDeleting(false);
  }, [words]);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else if (deleting) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else {
      timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 80);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words]);

  return text;
}

export default function Hero() {
  const { t } = useLang();
  const typed = useTypewriter(t.hero.words);

  const scrollToContact = () =>
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToCases = () =>
    document.querySelector('#casos')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="flex items-center bg-cream dark:bg-dark pt-24 pb-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20">

          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-nodo" />
              <span className="text-xs font-bold tracking-widest uppercase text-dark/50 dark:text-white/40">
                {t.hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl font-black text-dark dark:text-white leading-[1.0] mb-6 tracking-tight"
            >
              {t.hero.headline1}{' '}
              <span className="text-nodo">
                {typed}
                <span className="animate-pulse">|</span>
              </span>
              {t.hero.headline2}<br />
              {t.hero.headline3}<br />
              {t.hero.headline4}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg text-dark/60 dark:text-white/50 mb-10 leading-relaxed max-w-lg"
            >
              {t.hero.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={scrollToContact} className="btn-dark text-base px-8 py-4">
                {t.hero.cta1}
              </button>
              <button onClick={scrollToCases} className="btn-outline dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark text-base px-8 py-4">
                {t.hero.cta2}
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 w-72 h-72 lg:w-96 lg:h-96"
          >
            <Suspense fallback={<div className="w-full h-full rounded-full bg-nodo/10 animate-pulse" />}>
              <NodeCanvas />
            </Suspense>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

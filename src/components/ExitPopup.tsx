import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WA = 'https://wa.me/584242677904?text=Hola!%20Vi%20Nodo%20Studio%20y%20quiero%20una%20cotizaci%C3%B3n%20%F0%9F%91%8B';

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    let triggered = false;

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !triggered) {
        triggered = true;
        setShow(true);
      }
    };

    const timer = setTimeout(() => {
      document.documentElement.addEventListener('mouseleave', onLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [done]);

  const close = () => {
    setShow(false);
    setDone(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-dark/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-cream rounded-2xl p-8 max-w-md w-full"
          >
            <div className="w-10 h-10 bg-nodo rounded-xl flex items-center justify-center font-black text-white mb-4">N</div>
            <p className="text-xs font-bold tracking-widest uppercase text-nodo mb-2">Espera un momento</p>
            <h2 className="text-3xl font-black text-dark mb-3 leading-tight">
              ¿Te vas sin<br />cotizar?
            </h2>
            <p className="text-dark/60 mb-6 leading-relaxed">
              Cuéntanos qué necesitas y te respondemos hoy mismo. Sin compromiso, sin letra chica.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="btn-dark w-full justify-center py-4 text-base"
            >
              Cotizar ahora →
            </a>
            <button
              onClick={close}
              className="mt-3 text-xs text-dark/40 hover:text-dark/70 transition-colors w-full text-center py-2"
            >
              No, gracias
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

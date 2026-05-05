import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LangContext';

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-bold text-white text-base leading-snug">{q}</span>
        <span className={`shrink-0 w-6 h-6 rounded-full border border-nodo flex items-center justify-center text-nodo font-black text-sm transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-white/50 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLang();
  const f = t.faq;

  return (
    <section id="faq" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:w-72 shrink-0"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-nodo mb-3 block">
              {f.label}
            </span>
            <h2 className="text-5xl font-black text-white leading-tight tracking-tight">
              {f.heading1}<br />{f.heading2}
            </h2>
            <p className="text-white/40 mt-4 text-sm leading-relaxed">{f.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1"
          >
            {f.items.map((faq) => (
              <Item key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

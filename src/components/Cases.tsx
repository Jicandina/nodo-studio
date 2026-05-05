import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';

const CASE_DATA = [
  { num: '01', city: 'Caracas',  name: 'Clínica CCCT',        metric: '24/7',   url: 'https://clinica-ccct1.pages.dev', highlight: true  },
  { num: '02', city: 'Caracas',  name: 'La Esquina del Sabor', metric: '+180%',  url: null,                              highlight: false },
  { num: '03', city: 'Valencia', name: 'Brava Barber Co.',     metric: '3h/día', url: null,                              highlight: false },
];

export default function Cases() {
  const { t } = useLang();

  return (
    <section id="casos" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-nodo mb-3 block">{t.cases.label}</span>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            {t.cases.heading1}<br />
            {t.cases.heading2} <span className="text-nodo">{t.cases.heading3}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CASE_DATA.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-2xl p-8 flex flex-col gap-4 ${
                c.highlight ? 'bg-nodo' : 'bg-dark-800 border border-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <p className={`text-xs font-bold tracking-widest uppercase ${c.highlight ? 'text-white/60' : 'text-white/30'}`}>
                  {t.cases.items[i].type} · {c.city}
                </p>
                <span className={`text-xs font-bold ${c.highlight ? 'text-white/50' : 'text-white/20'}`}>{c.num}</span>
              </div>

              <h3 className="text-xl font-black text-white">{c.name}</h3>

              <div>
                <p className={`text-5xl font-black tracking-tight ${c.highlight ? 'text-white' : 'text-nodo'}`}>
                  {c.metric}
                  <span className={`text-sm font-bold ml-2 ${c.highlight ? 'text-white/60' : 'text-white/40'}`}>
                    {t.cases.items[i].metricLabel}
                  </span>
                </p>
              </div>

              <p className={`text-sm leading-relaxed ${c.highlight ? 'text-white/70' : 'text-white/50'}`}>
                {t.cases.items[i].desc}
              </p>

              {c.url && (
                <a href={c.url} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-bold text-nodo hover:text-nodo-light transition-colors mt-auto">
                  {t.cases.viewProject}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { useLang } from '../context/LangContext';

const NUMS = ['01', '02', '03'];
const HIGHLIGHTS = [false, true, false];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Services() {
  const { t } = useLang();

  return (
    <section id="servicios" className="py-24 bg-cream dark:bg-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="section-label">{t.services.label}</span>
            <h2 className="text-5xl md:text-6xl font-black text-dark dark:text-white leading-tight tracking-tight">
              {t.services.heading1}<br />{t.services.heading2}
            </h2>
          </div>
          <p className="text-dark/50 dark:text-white/40 max-w-xs text-base leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.services.items.map((s, i) => (
            <motion.div
              key={NUMS[i]}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <TiltCard className={`rounded-2xl p-8 flex flex-col gap-6 h-full ${
                HIGHLIGHTS[i]
                  ? 'bg-nodo text-white'
                  : 'bg-cream-dark dark:bg-dark-800 border border-dark/10 dark:border-white/10'
              }`}>
                <div className="flex items-start justify-between">
                  <p className={`text-xs font-bold tracking-widest uppercase ${HIGHLIGHTS[i] ? 'text-white/60' : 'text-dark/40 dark:text-white/30'}`}>
                    {NUMS[i]} · {t.services.serviceLabel}
                  </p>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm ${
                    HIGHLIGHTS[i] ? 'bg-dark text-white' : 'bg-nodo text-white'
                  }`}>N</div>
                </div>

                <div>
                  <h3 className={`text-2xl font-black leading-tight mb-3 ${HIGHLIGHTS[i] ? 'text-white' : 'text-dark dark:text-white'}`}>
                    {s.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${HIGHLIGHTS[i] ? 'text-white/70' : 'text-dark/60 dark:text-white/50'}`}>
                    {s.desc}
                  </p>
                </div>

                <ul className="space-y-2 mt-auto">
                  {s.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm font-medium ${
                      HIGHLIGHTS[i] ? 'text-white/80' : 'text-dark/70 dark:text-white/60'
                    }`}>
                      <span className={`text-xs ${HIGHLIGHTS[i] ? 'text-white/50' : 'text-nodo'}`}>+</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

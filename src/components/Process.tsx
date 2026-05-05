import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';

const NUMS = ['01', '02', '03', '04'];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Process() {
  const { t } = useLang();

  return (
    <section id="proceso" className="py-24 bg-cream dark:bg-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">{t.process.label}</span>
          <h2 className="text-5xl md:text-6xl font-black text-dark dark:text-white leading-tight tracking-tight">
            {t.process.heading1}<br />{t.process.heading2}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-0"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {t.process.steps.map((step, i) => (
            <motion.div key={NUMS[i]} variants={item} className="relative">
              {i < t.process.steps.length - 1 && (
                <div className="hidden md:block absolute top-4 left-1/2 w-full h-px bg-dark/15 dark:bg-white/10 z-0" />
              )}
              <div className="relative z-10 pr-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-nodo">{NUMS[i]}</span>
                  <div className="flex-1 h-px bg-dark/15 dark:bg-white/10 md:hidden" />
                </div>
                <h3 className="text-lg font-black text-dark dark:text-white mb-2 leading-tight">{step.title}</h3>
                <p className="text-sm text-dark/50 dark:text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

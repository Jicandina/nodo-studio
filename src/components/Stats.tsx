import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useLang } from '../context/LangContext';

const NUMS = [
  { num: 10,  suffix: '+' },
  { num: 5,   suffix: ''  },
  { num: 24,  suffix: 'h' },
  { num: 100, suffix: '%' },
];

function AnimatedNumber({ num, suffix }: { num: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, num, { duration: 1.6, ease: 'easeOut' });
      return controls.stop;
    }
  }, [isInView, count, num]);

  return (
    <span ref={ref} className="text-5xl font-black text-dark dark:text-white tracking-tight">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Stats() {
  const { t } = useLang();

  return (
    <section className="bg-cream dark:bg-dark-800 border-t border-b border-dark/10 dark:border-white/10 py-14 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {NUMS.map(({ num, suffix }, i) => (
            <motion.div key={i} variants={item} className="text-center md:text-left">
              <AnimatedNumber num={num} suffix={suffix} />
              <p className="text-xs font-bold tracking-widest uppercase text-dark/40 dark:text-white/40 mt-1">
                {t.stats[i].label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

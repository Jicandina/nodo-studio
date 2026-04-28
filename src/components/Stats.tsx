import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const STATS = [
  { value: '10+',  label: 'Negocios activados',    num: 10, suffix: '+' },
  { value: '5',    label: 'Ciudades de Venezuela', num: 5,  suffix: ''  },
  { value: '24h',  label: 'Tiempo de respuesta',   num: 24, suffix: 'h' },
  { value: '100%', label: 'Hablamos tu idioma',    num: 100, suffix: '%' },
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
    <span ref={ref} className="text-5xl font-black text-dark tracking-tight">
      <motion.span>{rounded}</motion.span>
      {suffix}
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
  return (
    <section className="bg-cream border-t border-b border-dark/10 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {STATS.map(({ label, num, suffix }) => (
            <motion.div key={label} variants={item} className="text-center md:text-left">
              <AnimatedNumber num={num} suffix={suffix} />
              <p className="text-xs font-bold tracking-widest uppercase text-dark/40 mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

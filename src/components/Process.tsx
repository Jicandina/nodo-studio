import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'Llamada de 30 min',
    desc: 'Sin compromiso. Nos cuentas qué vendes, qué te frena, dónde están tus clientes.',
  },
  {
    num: '02',
    title: 'Propuesta clara',
    desc: 'En 48h te enviamos alcance, plazos y precio en bolívares o dólares. Sin letra chica.',
  },
  {
    num: '03',
    title: 'Construimos juntos',
    desc: 'Reuniones cortas cada semana. Ves el avance en vivo, no al final.',
  },
  {
    num: '04',
    title: 'Lanzamos y acompañamos',
    desc: 'Te capacitamos, dejamos todo documentado y seguimos disponibles 90 días.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-cream dark:bg-dark">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="section-label">03 · Cómo trabajamos</span>
          <h2 className="text-5xl md:text-6xl font-black text-dark leading-tight tracking-tight">
            De la idea<br />al cliente, en 4 pasos.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-0"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {STEPS.map((step, i) => (
            <motion.div key={step.num} variants={item} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-4 left-1/2 w-full h-px bg-dark/15 z-0" />
              )}
              <div className="relative z-10 pr-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-nodo">{step.num}</span>
                  <div className="flex-1 h-px bg-dark/15 md:hidden" />
                </div>
                <h3 className="text-lg font-black text-dark mb-2 leading-tight">{step.title}</h3>
                <p className="text-sm text-dark/50 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const CASES = [
  {
    num: '01',
    type: 'Clínica médica',
    city: 'Caracas',
    name: 'Clínica CCCT',
    metric: '24/7',
    metricLabel: 'precios actualizados',
    desc: 'Portal de salud con tasa BCV en tiempo real. Los pacientes ven exactamente cuánto pagan en bolívares ese día. Mapa, horarios y más de 8 especialidades en línea.',
    url: 'https://clinica-ccct1.pages.dev',
    highlight: true,
  },
  {
    num: '02',
    type: 'Restaurante',
    city: 'Caracas',
    name: 'La Esquina del Sabor',
    metric: '+180%',
    metricLabel: 'reservas online',
    desc: 'Pasaron de tomar pedidos solo por teléfono a un sistema de reservas y delivery por WhatsApp.',
    url: null,
    highlight: false,
  },
  {
    num: '03',
    type: 'Barbería',
    city: 'Valencia',
    name: 'Brava Barber Co.',
    metric: '3h/día',
    metricLabel: 'ahorradas en llamadas',
    desc: 'Sistema de citas online + recordatorios automáticos. Dos sedes, una sola agenda sin confusiones.',
    url: null,
    highlight: false,
  },
];

export default function Cases() {
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
          <span className="text-xs font-bold tracking-widest uppercase text-nodo mb-3 block">02 · Casos reales</span>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Negocios venezolanos<br />
            que ya están <span className="text-nodo">en línea.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CASES.map((c, i) => (
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
                  {c.type} · {c.city}
                </p>
                <span className={`text-xs font-bold ${c.highlight ? 'text-white/50' : 'text-white/20'}`}>{c.num}</span>
              </div>

              <h3 className="text-xl font-black text-white">{c.name}</h3>

              <div>
                <p className={`text-5xl font-black tracking-tight ${c.highlight ? 'text-white' : 'text-nodo'}`}>
                  {c.metric}
                  <span className={`text-sm font-bold ml-2 ${c.highlight ? 'text-white/60' : 'text-white/40'}`}>
                    {c.metricLabel}
                  </span>
                </p>
              </div>

              <p className={`text-sm leading-relaxed ${c.highlight ? 'text-white/70' : 'text-white/50'}`}>
                {c.desc}
              </p>

              {c.url && (
                <a href={c.url} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-bold text-nodo hover:text-nodo-light transition-colors mt-auto">
                  Ver proyecto →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

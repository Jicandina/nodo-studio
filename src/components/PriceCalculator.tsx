import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Business = 'Restaurante' | 'Clínica' | 'Inmobiliaria' | 'Barbería' | 'Otro';
type Service = 'web' | 'chatbot' | 'herramienta';

const BUSINESSES: Business[] = ['Restaurante', 'Clínica', 'Inmobiliaria', 'Barbería', 'Otro'];

const SERVICES: { id: Service; label: string; desc: string; range: string; low: number; high: number }[] = [
  { id: 'web',        label: 'Sitio web',           desc: 'Landing o catálogo completo', range: '$300–$800',    low: 300,  high: 800  },
  { id: 'chatbot',    label: 'Chatbot WhatsApp',     desc: 'Atención automática 24/7',    range: '$200–$500',    low: 200,  high: 500  },
  { id: 'herramienta', label: 'Herramienta a medida', desc: 'CRM, agenda, dashboard',     range: '$500–$1,500',  low: 500,  high: 1500 },
];

const WA = 'https://wa.me/584242677904?text=Hola%20Nodo%20Studio!%20Calculé%20mi%20proyecto%20y%20quiero%20una%20cotización%20exacta%20%F0%9F%91%8B';

export default function PriceCalculator() {
  const [business, setBusiness] = useState<Business | null>(null);
  const [selected, setSelected] = useState<Service[]>([]);

  const toggle = (id: Service) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );

  const discount = selected.length >= 2 ? 0.15 : 0;
  const totals = SERVICES.filter((s) => selected.includes(s.id));
  const low  = Math.round(totals.reduce((a, s) => a + s.low,  0) * (1 - discount));
  const high = Math.round(totals.reduce((a, s) => a + s.high, 0) * (1 - discount));
  const showResult = business !== null && selected.length > 0;

  return (
    <section id="calculadora" className="py-24 bg-dark">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-nodo mb-3 block">
            Herramienta · Estimado de precio
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            ¿Cuánto cuesta<br />tu proyecto?
          </h2>
          <p className="text-white/40 mt-3 text-base">
            Selecciona tu negocio y servicios para ver un estimado al instante.
          </p>
        </motion.div>

        {/* Business type */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">
            Tipo de negocio
          </p>
          <div className="flex flex-wrap gap-2">
            {BUSINESSES.map((b) => (
              <button
                key={b}
                onClick={() => setBusiness(b)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  business === b
                    ? 'bg-nodo text-white'
                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">
            Servicios que necesitas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {SERVICES.map((s) => {
              const active = selected.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => toggle(s.id)}
                  className={`p-5 rounded-2xl text-left border-2 transition-all ${
                    active
                      ? 'border-nodo bg-nodo/10'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <p className={`font-black text-base mb-1 ${active ? 'text-nodo' : 'text-white'}`}>
                    {s.label}
                  </p>
                  <p className="text-white/40 text-xs mb-3">{s.desc}</p>
                  <p className="text-white/25 text-xs font-mono">{s.range} USD</p>
                  {active && (
                    <span className="inline-block mt-2 text-xs font-bold text-nodo">
                      + Seleccionado
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          {selected.length >= 2 && (
            <p className="text-nodo text-xs font-bold mt-3">
              Descuento de 15% por paquete aplicado automaticamente
            </p>
          )}
        </motion.div>

        {/* Result */}
        <AnimatePresence>
          {showResult ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-dark/40 mb-2">
                  Estimado para {business}
                </p>
                <p className="text-5xl font-black text-dark tracking-tight">
                  ${low.toLocaleString()}
                  <span className="text-2xl text-dark/40 mx-2">–</span>
                  ${high.toLocaleString()}
                  <span className="text-lg font-bold text-dark/40 ml-2">USD</span>
                </p>
                <p className="text-dark/50 text-sm mt-2">
                  Precio final según alcance exacto. Aceptamos bolívares.
                </p>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark shrink-0 py-4 px-8 text-base"
              >
                Cotizar exacto →
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white/5 rounded-2xl p-8 text-center border border-white/5"
            >
              <p className="text-white/25 text-sm">
                Selecciona tu negocio y al menos un servicio para ver el estimado
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

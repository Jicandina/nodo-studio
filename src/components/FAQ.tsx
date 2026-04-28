import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    q: '¿Cuánto tiempo tarda en estar listo mi proyecto?',
    a: 'Un sitio web entre 1 y 3 semanas. Un chatbot de 3 a 7 días. Una herramienta a medida entre 2 y 6 semanas. El plazo exacto lo acordamos en la propuesta antes de empezar.',
  },
  {
    q: '¿Aceptan pagos en bolívares?',
    a: 'Sí. Aceptamos bolívares a tasa del día, dólares en efectivo, Zelle, Binance y transferencias bancarias. Acordamos el método que más te convenga.',
  },
  {
    q: '¿Qué pasa si no me gusta el resultado?',
    a: 'Trabajamos en rondas de revisión semanales para que veas el avance en vivo y no te lleves sorpresas. Si algo no te convence, lo corregimos. Siempre.',
  },
  {
    q: '¿Necesito saber de tecnología para trabajar con ustedes?',
    a: 'Para nada. Tú nos cuentas qué quieres lograr con tu negocio y nosotros nos encargamos del resto. Sin términos técnicos, sin complicaciones.',
  },
  {
    q: '¿Incluyen soporte después del lanzamiento?',
    a: 'Sí. Los primeros 90 días estamos disponibles sin costo adicional para ajustes y soporte. Después ofrecemos planes de mantenimiento mensual si los necesitas.',
  },
  {
    q: '¿Trabajan con negocios fuera de Caracas?',
    a: 'Sí, trabajamos 100% remoto. Tenemos clientes en Caracas, Mérida, Valencia y más. Todo el proceso es por videollamada y WhatsApp.',
  },
];

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
              05 · FAQ
            </span>
            <h2 className="text-5xl font-black text-white leading-tight tracking-tight">
              Preguntas<br />frecuentes.
            </h2>
            <p className="text-white/40 mt-4 text-sm leading-relaxed">
              Si tienes alguna duda que no está aquí, escríbenos por WhatsApp.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1"
          >
            {FAQS.map((faq) => (
              <Item key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

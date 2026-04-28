import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

const NodeCanvas = lazy(() => import('./NodeCanvas'));

export default function Hero() {
  const scrollToContact = () =>
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToCases = () =>
    document.querySelector('#casos')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="flex items-center bg-cream pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20">

          {/* Left */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-nodo" />
              <span className="text-xs font-bold tracking-widest uppercase text-dark/50">
                Agencia Digital · Venezuela · 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl font-black text-dark leading-[1.0] mb-6 tracking-tight"
            >
              Tu negocio,<br />
              <span className="text-nodo">conectado</span> al<br />
              mundo digital.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg text-dark/60 mb-10 leading-relaxed max-w-lg"
            >
              Hacemos sitios web, chatbots y herramientas digitales para
              restaurantes, clínicas, inmobiliarias y barberías que quieren
              dejar de perder clientes por WhatsApp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={scrollToContact} className="btn-dark text-base px-8 py-4">
                Cotiza tu proyecto →
              </button>
              <button onClick={scrollToCases} className="btn-outline text-base px-8 py-4">
                Ver casos
              </button>
            </motion.div>
          </div>

          {/* Right — 3D Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 w-72 h-72 lg:w-96 lg:h-96"
          >
            <Suspense fallback={
              <div className="w-full h-full rounded-full bg-nodo/10 animate-pulse" />
            }>
              <NodeCanvas />
            </Suspense>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

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
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-nodo" />
              <span className="text-xs font-bold tracking-widest uppercase text-dark/50">
                Agencia Digital · Venezuela · 2026
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-dark leading-[1.0] mb-6 tracking-tight">
              Tu negocio,<br />
              <span className="text-nodo">conectado</span> al<br />
              mundo digital.
            </h1>

            <p className="text-lg text-dark/60 mb-10 leading-relaxed max-w-lg">
              Hacemos sitios web, chatbots y herramientas digitales para
              restaurantes, clínicas, inmobiliarias y barberías que quieren
              dejar de perder clientes por WhatsApp.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="btn-dark text-base px-8 py-4">
                Cotiza tu proyecto →
              </button>
              <button onClick={scrollToCases} className="btn-outline text-base px-8 py-4">
                Ver casos
              </button>
            </div>
          </div>

          {/* Right — Logo orb */}
          <div className="shrink-0">
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-nodo flex items-center justify-center shadow-2xl shadow-nodo/30">
              <span className="text-white font-black text-[160px] leading-none select-none" style={{ fontFamily: 'Inter' }}>
                N
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

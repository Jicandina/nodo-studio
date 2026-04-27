const CASES = [
  {
    num: '01',
    type: 'Inmobiliaria',
    city: 'Caracas',
    name: 'El Faro Inmobiliaria',
    metric: '+∞',
    metricLabel: 'presencia digital',
    desc: 'Catálogo web con filtros, mapa interactivo, modo swipe y formulario directo a WhatsApp del asesor. De Instagram a plataforma propia.',
    url: 'https://elfaro.pages.dev',
    highlight: false,
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
    highlight: true,
  },
  {
    num: '03',
    type: 'Clínica',
    city: 'Mérida',
    name: 'Centro Médico Andes',
    metric: '-65%',
    metricLabel: 'no-shows',
    desc: 'Chatbot que confirma citas y reagenda automáticamente. Las salas dejaron de quedar vacías.',
    url: null,
    highlight: false,
  },
  {
    num: '04',
    type: 'Barbería',
    city: 'Valencia',
    name: 'Brava Barber Co.',
    metric: '100%',
    metricLabel: 'agenda llena',
    desc: 'Sistema de citas online + recordatorios automáticos. Dos sedes, una sola agenda.',
    url: null,
    highlight: false,
  },
];

export default function Cases() {
  return (
    <section id="casos" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-nodo mb-3 block">02 · Casos reales</span>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Negocios venezolanos<br />
            que ya están <span className="text-nodo">en línea.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CASES.map((c) => (
            <div key={c.num} className={`rounded-2xl p-8 flex flex-col gap-4 ${
              c.highlight ? 'bg-nodo' : 'bg-dark-800 border border-white/10'
            }`}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

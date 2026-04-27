const SERVICES = [
  {
    num: '01',
    title: 'Sitios web que venden',
    desc: 'Páginas rápidas, claras y pensadas para que tu cliente reserve, pida o llame en el primer minuto.',
    features: ['Diseño y desarrollo', 'Mobile-first', 'SEO incluido', 'Dominio y hosting'],
    highlight: false,
  },
  {
    num: '02',
    title: 'Chatbots de WhatsApp',
    desc: 'Atiende 24/7 sin perder un mensaje. Reserva mesa, agenda cita, responde precios — automático.',
    features: ['WhatsApp Business API', 'Respuestas automáticas', 'Agenda de citas', 'Notificaciones'],
    highlight: true,
  },
  {
    num: '03',
    title: 'Herramientas a la medida',
    desc: 'Sistemas internos para tu equipo: control de inventario, agendas, CRMs livianos. Sin códigos imposibles.',
    features: ['Dashboards', 'Control de inventario', 'CRM simple', 'Reportes automáticos'],
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label">01 · Qué hacemos</span>
            <h2 className="text-5xl md:text-6xl font-black text-dark leading-tight tracking-tight">
              Tres servicios.<br />Cero excusas.
            </h2>
          </div>
          <p className="text-dark/50 max-w-xs text-base leading-relaxed">
            No vendemos paquetes inflados. Vendemos lo que tu negocio necesita para vender más mañana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <div key={s.num} className={`rounded-2xl p-8 flex flex-col gap-6 ${
              s.highlight
                ? 'bg-nodo text-white'
                : 'bg-cream-dark border border-dark/10'
            }`}>
              <div className="flex items-start justify-between">
                <p className={`text-xs font-bold tracking-widest uppercase ${s.highlight ? 'text-white/60' : 'text-dark/40'}`}>
                  {s.num} · Servicio
                </p>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm ${
                  s.highlight ? 'bg-dark text-white' : 'bg-nodo text-white'
                }`}>N</div>
              </div>

              <div>
                <h3 className={`text-2xl font-black leading-tight mb-3 ${s.highlight ? 'text-white' : 'text-dark'}`}>
                  {s.title}
                </h3>
                <p className={`text-sm leading-relaxed ${s.highlight ? 'text-white/70' : 'text-dark/60'}`}>
                  {s.desc}
                </p>
              </div>

              <ul className="space-y-2 mt-auto">
                {s.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm font-medium ${
                    s.highlight ? 'text-white/80' : 'text-dark/70'
                  }`}>
                    <span className={`text-xs ${s.highlight ? 'text-white/50' : 'text-nodo'}`}>+</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

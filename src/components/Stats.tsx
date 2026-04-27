const STATS = [
  { value: '10+',  label: 'Negocios activados' },
  { value: '5',    label: 'Ciudades de Venezuela' },
  { value: '24h',  label: 'Tiempo de respuesta' },
  { value: '100%', label: 'Hablamos tu idioma' },
];

export default function Stats() {
  return (
    <section className="bg-cream border-t border-b border-dark/10 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center md:text-left">
              <p className="text-5xl font-black text-dark tracking-tight mb-1">{value}</p>
              <p className="text-xs font-bold tracking-widest uppercase text-dark/40">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

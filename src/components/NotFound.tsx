export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream dark:bg-dark flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 bg-nodo rounded-2xl flex items-center justify-center font-black text-white text-2xl mb-8">
        N
      </div>
      <p className="text-xs font-bold tracking-widest uppercase text-nodo mb-4">404 · Página no encontrada</p>
      <h1 className="text-6xl md:text-8xl font-black text-dark dark:text-cream leading-none tracking-tight mb-6">
        Te perdiste.
      </h1>
      <p className="text-dark/50 dark:text-cream/50 text-lg mb-10 max-w-sm leading-relaxed">
        Esta página no existe, pero tu negocio digital sí puede existir.
      </p>
      <a href="/" className="btn-dark px-8 py-4 text-base">
        Volver al inicio →
      </a>
    </div>
  );
}

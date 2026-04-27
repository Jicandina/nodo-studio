const WA_NUMBER = '584242677904';
const EMAIL     = 'nodostudio.ven@gmail.com';

export default function Footer() {
  return (
    <footer className="bg-dark py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-nodo rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">N</span>
              </div>
              <span className="font-bold text-white text-base tracking-tight">nodostudio</span>
            </div>
            <p className="text-white/30 text-sm">Agencia digital · Venezuela · 2026</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Navegación</p>
              <div className="space-y-2">
                {['Servicios', 'Casos', 'Proceso', 'Contacto'].map((item) => (
                  <button key={item}
                    onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-sm text-white/50 hover:text-white transition-colors">
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">Contacto</p>
              <div className="space-y-2">
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                  className="block text-sm text-white/50 hover:text-white transition-colors">
                  +58 424 267 7904
                </a>
                <a href={`mailto:${EMAIL}`}
                  className="block text-sm text-white/50 hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-xs text-white/20 text-center">
            © 2026 Nodo Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

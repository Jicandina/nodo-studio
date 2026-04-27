import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const WA_NUMBER = '584242677904';
const EMAIL     = 'nodostudio.ven@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Nodo Studio! 👋\n\nSoy *${form.name}*\nNegocio: ${form.business}\nTeléfono: ${form.phone}\n\n${form.message}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="py-24 bg-nodo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left */}
          <div className="flex-1">
            <span className="text-xs font-bold tracking-widest uppercase text-white/50 mb-3 block">
              04 · Hablemos
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              ¿Listos para<br />conectar tu<br />negocio?
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-sm">
              Cuéntanos qué necesitas y te respondemos en menos de 24 horas.
              Sin formularios eternos, sin call-centers.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">WhatsApp directo</p>
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                  className="text-white font-bold hover:text-white/80 transition-colors">
                  +58 424 267 7904
                </a>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">Correo</p>
                <a href={`mailto:${EMAIL}`}
                  className="text-white font-bold hover:text-white/80 transition-colors">
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">Oficina</p>
                <p className="text-white font-bold">Caracas · Remoto</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="w-full lg:w-[460px]">
            <div className="bg-cream rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-bold tracking-widest uppercase text-dark/40">Cotización gratuita</p>
                <div className="w-8 h-8 bg-dark rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-xs">N</span>
                </div>
              </div>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <CheckCircle2 className="w-12 h-12 text-nodo" />
                  <p className="font-black text-dark text-xl text-center">¡Abriendo WhatsApp!</p>
                  <p className="text-dark/50 text-sm text-center">Te respondemos en menos de 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-dark/40 mb-1.5">
                      Tu nombre
                    </label>
                    <input
                      type="text" required placeholder="María García"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-dark/15 text-dark placeholder-dark/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-nodo/30 focus:border-nodo/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-dark/40 mb-1.5">
                      Tipo de negocio
                    </label>
                    <input
                      type="text" required placeholder="Restaurante, clínica..."
                      value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className="w-full bg-white border border-dark/15 text-dark placeholder-dark/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-nodo/30 focus:border-nodo/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-dark/40 mb-1.5">
                      WhatsApp
                    </label>
                    <input
                      type="tel" placeholder="+58 414 000 0000"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white border border-dark/15 text-dark placeholder-dark/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-nodo/30 focus:border-nodo/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-dark/40 mb-1.5">
                      Cuéntanos
                    </label>
                    <textarea
                      rows={3} placeholder="¿Qué quieres lograr? ¿Qué te frena hoy?"
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white border border-dark/15 text-dark placeholder-dark/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-nodo/30 focus:border-nodo/50 transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full btn-dark justify-center py-4">
                    <Send className="w-4 h-4" />
                    Enviar cotización →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

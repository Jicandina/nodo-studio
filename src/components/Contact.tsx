import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useLang } from '../context/LangContext';

const WA_NUMBER = '584242677904';
const EMAIL     = 'nodostudio.ven@gmail.com';

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ name: '', business: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = c.waMessage(form.name, form.business, form.phone, form.message);
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="py-24 bg-nodo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <div className="flex-1">
            <span className="text-xs font-bold tracking-widest uppercase text-white/50 mb-3 block">
              {c.label}
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              {c.heading1}<br />{c.heading2}<br />{c.heading3}
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-sm">
              {c.desc}
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">{c.waLabel}</p>
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                  className="text-white font-bold hover:text-white/80 transition-colors">
                  +58 424 267 7904
                </a>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">{c.emailLabel}</p>
                <a href={`mailto:${EMAIL}`}
                  className="text-white font-bold hover:text-white/80 transition-colors">
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">{c.officeLabel}</p>
                <p className="text-white font-bold">Caracas · Remoto</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[460px]">
            <div className="bg-cream rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-bold tracking-widest uppercase text-dark/40">{c.formTitle}</p>
                <div className="w-8 h-8 bg-dark rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-xs">N</span>
                </div>
              </div>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <CheckCircle2 className="w-12 h-12 text-nodo" />
                  <p className="font-black text-dark text-xl text-center">{c.successTitle}</p>
                  <p className="text-dark/50 text-sm text-center">{c.successDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {(['name', 'business', 'phone'] as const).map((field) => (
                    <div key={field}>
                      <label className="block text-xs font-bold tracking-widest uppercase text-dark/40 mb-1.5">
                        {c.fields[field].label}
                      </label>
                      <input
                        type={field === 'phone' ? 'tel' : 'text'}
                        required={field !== 'phone'}
                        placeholder={c.fields[field].placeholder}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full bg-white border border-dark/15 text-dark placeholder-dark/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-nodo/30 focus:border-nodo/50 transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-dark/40 mb-1.5">
                      {c.fields.message.label}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={c.fields.message.placeholder}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white border border-dark/15 text-dark placeholder-dark/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-nodo/30 focus:border-nodo/50 transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full btn-dark justify-center py-4">
                    <Send className="w-4 h-4" />
                    {c.submitBtn}
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

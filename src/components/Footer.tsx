import { useLang } from '../context/LangContext';

const WA_NUMBER = '584242677904';
const EMAIL     = 'nodostudio.ven@gmail.com';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="bg-dark py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">

          <div>
            <img src="/logo-horizontal.png" alt="Nodo Studio" className="h-8 w-auto mb-3 brightness-0 invert" />
            <p className="text-white/30 text-sm">{f.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">{f.navTitle}</p>
              <div className="space-y-2">
                {f.navItems.map((item, i) => (
                  <button key={item}
                    onClick={() => document.querySelector(`#${f.navHrefs[i]}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-sm text-white/50 hover:text-white transition-colors">
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3">{f.contactTitle}</p>
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
          <p className="text-xs text-white/20 text-center">{f.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

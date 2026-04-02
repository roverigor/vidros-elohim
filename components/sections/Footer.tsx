const YEAR = new Date().getFullYear();

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{
        background: 'linear-gradient(135deg, oklch(0.18 0.07 241) 0%, oklch(0.26 0.07 241) 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="font-bold text-xl text-white tracking-wide">ELOHIM VIDROS</div>
            <div className="text-[oklch(0.71_0.13_75)] text-xs tracking-widest mt-0.5">ESQUADRIAS & ALUMÍNIOS</div>
            <p className="text-white/50 text-sm mt-4 leading-relaxed">
              Mais de 20 anos transformando espaços com qualidade em vidros e alumínios em Ibaiti-PR.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Navegação</div>
            <ul className="flex flex-col gap-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[oklch(0.71_0.13_75)] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Contato</div>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <span>📍 Av. Gov. Paulo Cruz Pimentel, 718</span>
              <span>Ibaiti, PR — 84900-000</span>
              <a
                href="https://wa.me/5543984247962"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:brightness-110 transition-all mt-1"
              >
                💬 (43) 98424-7962
              </a>
              <a
                href="https://www.instagram.com/vidroselohim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[oklch(0.71_0.13_75)] transition-colors"
              >
                📸 @vidroselohim
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/30 text-xs">
          © {YEAR} Elohim Vidros | Esquadrias e Alumínios. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

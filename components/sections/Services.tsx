const SERVICES = [
  {
    title: 'Esquadrias de Alumínio',
    desc: 'Janelas, portas e esquadrias com acabamento premium e vedação perfeita.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="12" y1="3" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Portas de Lambril',
    desc: 'Portas de lambril em alumínio com design clássico e resistência excepcional.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="14" x2="20" y2="14" />
        <circle cx="17" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Portão Basculante',
    desc: 'Portões basculantes de alumínio com movimento suave e durabilidade garantida.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="2" y="8" width="20" height="12" rx="1" />
        <path d="M2 8 L12 3 L22 8" />
        <line x1="7" y1="12" x2="17" y2="12" />
        <line x1="7" y1="15" x2="17" y2="15" />
      </svg>
    ),
  },
  {
    title: 'Portão de Correr',
    desc: 'Portões deslizantes em alumínio, práticos e com aproveitamento total do espaço.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="2" y="4" width="14" height="16" rx="1" />
        <line x1="6" y1="8" x2="12" y2="8" />
        <line x1="6" y1="12" x2="12" y2="12" />
        <line x1="6" y1="16" x2="12" y2="16" />
        <path d="M18 8 L22 12 L18 16" />
      </svg>
    ),
  },
  {
    title: 'Box de Banheiro',
    desc: 'Box em vidro temperado com perfis de alumínio — elegância e praticidade.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="3" y="3" width="9" height="18" rx="0.5" />
        <rect x="12" y="3" width="9" height="18" rx="0.5" />
        <path d="M12 3 L12 21" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: 'Fechamento de Varandas',
    desc: 'Fechamento em vidro e alumínio que amplia o conforto da área externa.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="2" y="6" width="20" height="14" rx="1" />
        <line x1="7" y1="6" x2="7" y2="20" />
        <line x1="12" y1="6" x2="12" y2="20" />
        <line x1="17" y1="6" x2="17" y2="20" />
        <line x1="2" y1="4" x2="22" y2="4" />
      </svg>
    ),
  },
  {
    title: 'Cortinas de Vidro',
    desc: 'Cortinas de vidro temperado para varandas e ambientes sofisticados.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <line x1="3" y1="3" x2="21" y2="3" />
        <rect x="3" y="3" width="4.5" height="18" rx="0.5" opacity="0.6" />
        <rect x="9.75" y="3" width="4.5" height="15" rx="0.5" opacity="0.6" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="0.5" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Espelhos',
    desc: 'Venda e instalação de espelhos sob medida para qualquer ambiente.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="4" y="2" width="16" height="18" rx="1" />
        <path d="M8 20 L8 22 M16 20 L16 22" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <path d="M8 7 Q12 5 16 9" opacity="0.5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24" style={{ backgroundColor: '#0a0e1a' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-[#d4a843] tracking-[0.3em] uppercase">
            O que fazemos
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Nossos Serviços
          </h2>
          <div
            className="mt-4 mx-auto w-20 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #d4a843, transparent)' }}
          />
          <p className="mt-5 text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
            Soluções completas em vidros e alumínios para residências, comércios e indústrias.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group glass aluminum-surface glass-hover rounded-2xl p-6 transition-all duration-300 cursor-default"
            >
              {/* Icon in aluminum frame */}
              <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center text-[#c8cdd6] group-hover:text-[#d4a843] transition-colors"
                style={{
                  background: 'linear-gradient(135deg, rgba(200,205,214,0.15), rgba(138,144,153,0.08))',
                  border: '1px solid rgba(200,205,214,0.2)',
                }}
              >
                {service.icon}
              </div>

              <h3 className="font-semibold text-white group-hover:text-[#d4a843] text-sm mb-2 transition-colors leading-tight">
                {service.title}
              </h3>
              <p className="text-white/40 text-xs leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5543984247962?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#f0c96a] text-[#080c18] font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-[#d4a843]/20 text-sm"
          >
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

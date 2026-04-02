const WHATSAPP_URL = 'https://wa.me/5543984247962?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!';

const HIGHLIGHTS = [
  {
    label: 'Experiência',
    value: '20+',
    unit: 'anos',
    desc: 'Décadas atendendo Ibaiti e região com qualidade comprovada em cada projeto.',
  },
  {
    label: 'Agilidade',
    value: '48h',
    unit: 'orçamento',
    desc: 'Visita técnica e orçamento detalhado em até 48 horas após contato.',
  },
  {
    label: 'Garantia',
    value: '100%',
    unit: 'satisfação',
    desc: 'Instalação com acompanhamento total até a sua aprovação final.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#080c18' }}>
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #d4a843, transparent)' }}
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <span className="text-xs font-semibold text-[#d4a843] tracking-[0.3em] uppercase">
              Quem somos
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
              Tradição em vidros
              <br />
              <span className="text-[#c8cdd6]">e alumínios</span>
            </h2>

            {/* Aluminum accent bar */}
            <div
              className="mt-5 w-20 h-0.5 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #d4a843, #f0c96a, transparent)',
              }}
            />

            <p className="mt-7 text-white/60 leading-relaxed text-base">
              A <span className="text-white font-medium">Elohim Vidros</span> nasceu do compromisso com a qualidade
              e o atendimento próximo ao cliente. Há mais de 20 anos em Ibaiti-PR,
              somos referência em esquadrias, portões e fechamentos de vidro para
              residências e comércios.
            </p>

            <p className="mt-4 text-white/60 leading-relaxed text-base">
              Nosso diferencial é a combinação entre experiência de mercado,
              materiais de primeira linha e um atendimento que respeita prazo e orçamento.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 border border-[#d4a843]/40 text-[#d4a843] hover:bg-[#d4a843]/10 font-medium px-6 py-3 rounded-xl transition-all text-sm tracking-wide"
            >
              Fale conosco pelo WhatsApp →
            </a>
          </div>

          {/* Right — stat cards (aluminum glass) */}
          <div className="flex flex-col gap-4">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="glass glass-hover aluminum-surface rounded-2xl p-6 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 text-right">
                    <div className="text-3xl font-bold text-[#d4a843] leading-none">
                      {item.value}
                    </div>
                    <div className="text-xs text-[#c8cdd6] tracking-widest uppercase mt-1">
                      {item.unit}
                    </div>
                  </div>
                  <div className="w-px self-stretch bg-white/10" />
                  <div>
                    <div className="text-white font-medium text-sm tracking-wide">{item.label}</div>
                    <div className="text-white/50 text-sm mt-1 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

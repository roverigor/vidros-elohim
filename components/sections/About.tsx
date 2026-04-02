import Image from 'next/image';

const WHATSAPP_URL = 'https://wa.me/5543984247962?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!';

export default function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a2347' }}>
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ffffff, transparent)' }}
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — hero photo with overlaid stats */}
          <div className="relative">
            {/* Gold frame glow */}
            <div
              className="absolute -inset-1 rounded-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 70%)' }}
            />

            {/* Photo */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                height: '480px',
                boxShadow: '0 0 0 1px rgba(141,168,212,0.15), 0 24px 64px rgba(0,0,0,0.5)',
              }}
            >
              <Image
                src="/Screenshot_1.png"
                alt="Equipe Elohim Vidros"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2347]/40 via-transparent to-transparent" />
            </div>

            {/* Stat badge — top right */}
            <div
              className="absolute -top-4 -right-4 glass rounded-2xl px-5 py-4 border border-white/25"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              <div className="text-3xl font-bold text-white leading-none">20+</div>
              <div className="text-xs text-white/50 tracking-widest uppercase mt-1">anos de mercado</div>
            </div>

            {/* Stat badge — bottom left */}
            <div
              className="absolute -bottom-4 -left-4 glass rounded-2xl px-5 py-4 border border-white/15"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              <div className="text-3xl font-bold text-white leading-none">100%</div>
              <div className="text-xs text-white/50 tracking-widest uppercase mt-1">comprometimento</div>
            </div>
          </div>

          {/* Right — text */}
          <div className="md:pl-4">
            <span className="text-xs font-semibold text-white tracking-[0.3em] uppercase">
              Quem somos
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
              Tradição em vidros
              <br />
              <span className="text-[#8da8d4]">e alumínios</span>
            </h2>

            <div
              className="mt-5 w-20 h-0.5 rounded-full"
              style={{ background: 'linear-gradient(90deg, #ffffff, #ffffff, transparent)' }}
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

            {/* Highlights inline */}
            <div className="mt-8 flex flex-col gap-3">
              {[
                { icon: '✦', text: 'Atendemos Ibaiti e toda a região' },
                { icon: '✦', text: 'Projetos residenciais e comerciais' },
                { icon: '✦', text: 'Materiais de primeira linha' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-white text-xs">{item.icon}</span>
                  <span className="text-white/60 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 border border-white/30 text-white hover:bg-white/10 font-medium px-6 py-3 rounded-xl transition-all text-sm tracking-wide"
            >
              Fale conosco pelo WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

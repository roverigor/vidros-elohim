import Image from 'next/image';

const WHATSAPP_URL = 'https://wa.me/5543984247962?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!';

const PREVIEW_PHOTOS = [
  '/portfolio/foto-01.jpg',
  '/portfolio/foto-03.jpg',
  '/portfolio/foto-05.jpg',
  '/portfolio/foto-06.jpg',
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#1a2347]" />
      {/* Subtle radial glow top-left */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,24,48,0.06) 0%, transparent 70%)' }}
      />
      {/* Subtle radial glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,24,48,0.04) 0%, transparent 70%)' }}
      />

      {/* Aluminum grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute top-0 left-[75%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>

      {/* Content — 2-col split */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 glass rounded-full border border-[#C41830]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C41830] animate-pulse" />
              <span className="text-[#C41830] text-xs font-medium tracking-widest uppercase">
                20+ anos de excelência em Ibaiti, PR
              </span>
            </div>

            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/logo/logo.png"
                alt="Elohim Vidros — Esquadrias e Alumínios"
                width={320}
                height={100}
                className="h-20 w-auto object-contain drop-shadow-lg"
                priority
              />
            </div>

            {/* Tagline */}
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
              Especialistas em{' '}
              <span className="text-[#8da8d4] font-medium">esquadrias de alumínio</span>,
              portões, box de banheiro e fechamento de varandas.
              Qualidade e precisão em cada projeto.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C41830] hover:bg-[#E53247] text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-[#C41830]/20 text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar Orçamento
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 glass border border-white/20 hover:border-[#C41830]/40 text-white font-medium px-7 py-3.5 rounded-xl transition-all text-sm"
              >
                Ver Trabalhos
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/[0.08]">
              {[
                { value: '20+', label: 'Anos de mercado' },
                { value: '8+', label: 'Tipos de serviço' },
                { value: '100%', label: 'Comprometimento' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#C41830]">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-0.5 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo collage */}
          <div className="hidden lg:block relative h-[540px]">
            {/* Gold glow behind collage */}
            <div
              className="absolute inset-8 rounded-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(196,24,48,0.08) 0%, transparent 70%)' }}
            />

            {/* Photo grid 2x2 with offset */}
            <div className="absolute top-0 left-0 w-[48%] h-[48%] rounded-2xl overflow-hidden"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(141,168,212,0.2), 0 8px 32px rgba(0,0,0,0.4)' }}>
              <Image src={PREVIEW_PHOTOS[0]} alt="Trabalho Elohim" fill className="object-cover" sizes="25vw" />
              <div className="absolute inset-0 bg-[#1a2347]/20" />
            </div>

            <div className="absolute top-0 right-0 w-[48%] h-[58%] rounded-2xl overflow-hidden"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(141,168,212,0.2), 0 8px 32px rgba(0,0,0,0.4)' }}>
              <Image src={PREVIEW_PHOTOS[1]} alt="Trabalho Elohim" fill className="object-cover" sizes="25vw" />
              <div className="absolute inset-0 bg-[#1a2347]/20" />
            </div>

            <div className="absolute bottom-0 left-0 w-[48%] h-[48%] rounded-2xl overflow-hidden"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(141,168,212,0.2), 0 8px 32px rgba(0,0,0,0.4)' }}>
              <Image src={PREVIEW_PHOTOS[2]} alt="Trabalho Elohim" fill className="object-cover" sizes="25vw" />
              <div className="absolute inset-0 bg-[#1a2347]/20" />
            </div>

            <div className="absolute bottom-0 right-0 w-[48%] h-[38%] rounded-2xl overflow-hidden"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(141,168,212,0.2), 0 8px 32px rgba(0,0,0,0.4)' }}>
              <Image src={PREVIEW_PHOTOS[3]} alt="Trabalho Elohim" fill className="object-cover" sizes="25vw" />
              <div className="absolute inset-0 bg-[#1a2347]/20" />
            </div>

            {/* Gold accent bar center */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-16"
              style={{ background: 'linear-gradient(to bottom, transparent, #C41830, transparent)' }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-16"
              style={{ background: 'linear-gradient(to right, transparent, #C41830, transparent)' }}
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a2347] to-transparent" />
    </section>
  );
}

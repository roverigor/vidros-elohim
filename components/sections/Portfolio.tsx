import Image from 'next/image';

interface PortfolioPhoto {
  src: string;
  alt: string;
}

const PHOTOS: PortfolioPhoto[] = [
  { src: '/portfolio/foto-01.jpg', alt: 'Trabalho Elohim Vidros' },
  { src: '/portfolio/foto-02.jpg', alt: 'Trabalho Elohim Vidros' },
  { src: '/portfolio/foto-03.jpg', alt: 'Trabalho Elohim Vidros' },
  { src: '/portfolio/foto-04.jpg', alt: 'Trabalho Elohim Vidros' },
  { src: '/portfolio/foto-05.jpg', alt: 'Trabalho Elohim Vidros' },
  { src: '/portfolio/foto-06.jpg', alt: 'Trabalho Elohim Vidros' },
];

function PhotoCard({ src, alt }: PortfolioPhoto) {
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer">
      {/* Aluminum frame */}
      <div
        className="absolute inset-0 z-10 rounded-2xl pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(141,168,212,0.2)',
        }}
      />

      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Glass overlay on hover */}
      <div className="absolute inset-0 bg-[#1a2347]/0 group-hover:bg-[#1a2347]/40 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 glass rounded-full px-4 py-2 border border-white/20">
          <span className="text-white text-xs font-medium tracking-wide">Ver foto</span>
        </div>
      </div>

      {/* Bottom aluminum bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, transparent, #C41830, transparent)' }}
      />
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24" style={{ backgroundColor: '#1a2347' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-[#C41830] tracking-[0.3em] uppercase">
            Nossos trabalhos
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Portfólio
          </h2>
          <div
            className="mt-4 mx-auto w-20 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #C41830, transparent)' }}
          />
          <p className="mt-5 text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
            Projetos realizados em Ibaiti e região com qualidade e precisão.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PHOTOS.map((photo) => (
            <PhotoCard key={photo.src} src={photo.src} alt={photo.alt} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/30 text-sm mb-4">Quer um projeto como esses?</p>
          <a
            href="https://wa.me/5543984247962?text=Ol%C3%A1%2C%20vi%20o%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass border border-[#C41830]/30 hover:border-[#C41830]/60 text-[#C41830] font-medium px-6 py-3 rounded-xl transition-all text-sm"
          >
            Solicitar orçamento →
          </a>
        </div>
      </div>
    </section>
  );
}

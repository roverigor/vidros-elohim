import Image from 'next/image';

const SERVICES = [
  {
    title: 'Esquadrias de Alumínio',
    desc: 'Janelas, portas e esquadrias com acabamento premium e vedação perfeita.',
    photo: '/portfolio/foto-01.jpg',
    waMsg: 'Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7amento%20de%20Esquadrias%20de%20Alum%C3%ADnio!',
  },
  {
    title: 'Portas de Lambril',
    desc: 'Portas de lambril em alumínio com design clássico e resistência excepcional.',
    photo: '/portfolio/foto-02.jpg',
    waMsg: 'Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7amento%20de%20Portas%20de%20Lambril!',
  },
  {
    title: 'Portão Basculante',
    desc: 'Portões basculantes de alumínio com movimento suave e durabilidade garantida.',
    photo: '/portfolio/foto-03.jpg',
    waMsg: 'Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7amento%20de%20Port%C3%A3o%20Basculante!',
  },
  {
    title: 'Portão de Correr',
    desc: 'Portões deslizantes em alumínio, práticos e com aproveitamento total do espaço.',
    photo: '/portfolio/foto-04.jpg',
    waMsg: 'Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7amento%20de%20Port%C3%A3o%20de%20Correr!',
  },
  {
    title: 'Box de Banheiro',
    desc: 'Box em vidro temperado com perfis de alumínio — elegância e praticidade.',
    photo: '/portfolio/foto-05.jpg',
    waMsg: 'Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7amento%20de%20Box%20de%20Banheiro!',
  },
  {
    title: 'Fechamento de Varandas',
    desc: 'Fechamento em vidro e alumínio que amplia o conforto da área externa.',
    photo: '/portfolio/foto-06.jpg',
    waMsg: 'Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7amento%20de%20Fechamento%20de%20Varandas!',
  },
  {
    title: 'Cortinas de Vidro',
    desc: 'Cortinas de vidro temperado para varandas e ambientes sofisticados.',
    photo: '/hero-bg.jpg',
    waMsg: 'Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7amento%20de%20Cortinas%20de%20Vidro!',
  },
  {
    title: 'Espelhos',
    desc: 'Venda e instalação de espelhos sob medida para qualquer ambiente.',
    photo: '/portfolio/foto-01.jpg',
    waMsg: 'Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7amento%20de%20Espelhos!',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24" style={{ backgroundColor: '#0a1020' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-[#C41830] tracking-[0.3em] uppercase">
            O que fazemos
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Nossos Serviços
          </h2>
          <div
            className="mt-4 mx-auto w-20 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #C41830, transparent)' }}
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
              className="group glass aluminum-surface rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
              style={{ border: '1px solid rgba(141,168,212,0.12)' }}
            >
              {/* Photo */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={service.photo}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#080d1e]/30 group-hover:bg-[#080d1e]/10 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4">
                <h3 className="font-semibold text-white text-sm mb-1.5 leading-tight group-hover:text-[#C41830] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed flex-1">
                  {service.desc}
                </p>

                {/* WhatsApp button */}
                <a
                  href={`https://wa.me/5543984247962?text=${service.waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/30 hover:border-[#25D366] text-[#25D366] hover:text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

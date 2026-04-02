const SERVICES = [
  {
    icon: '🪟',
    title: 'Esquadrias de Alumínio',
    description: 'Janelas, portas e esquadrias em alumínio com acabamento superior e vedação perfeita.',
  },
  {
    icon: '🚪',
    title: 'Portas de Lambril',
    description: 'Portas de lambril de alumínio com design clássico e resistência excepcional.',
  },
  {
    icon: '🏗️',
    title: 'Portão Basculante',
    description: 'Portões basculantes de alumínio para garagens, com movimento suave e durável.',
  },
  {
    icon: '🔀',
    title: 'Portão de Correr',
    description: 'Portões de correr em alumínio, práticos e com excelente aproveitamento de espaço.',
  },
  {
    icon: '🚿',
    title: 'Box de Banheiro',
    description: 'Box em vidro temperado com perfis de alumínio — elegância e praticidade para seu banheiro.',
  },
  {
    icon: '🌅',
    title: 'Fechamento de Varandas',
    description: 'Fechamento de varandas em vidro e alumínio, ampliando o conforto da sua área externa.',
  },
  {
    icon: '🪟',
    title: 'Cortinas de Vidro',
    description: 'Cortinas de vidro temperado para varandas, piscinas e ambientes sofisticados.',
  },
  {
    icon: '🪞',
    title: 'Espelhos',
    description: 'Venda e instalação de espelhos sob medida para qualquer ambiente.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[oklch(0.71_0.13_75)] tracking-widest uppercase">
            O que fazemos
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[oklch(0.26_0.07_241)]">
            Nossos Serviços
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-[oklch(0.71_0.13_75)] rounded" />
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Soluções completas em vidros e alumínios para residências, comércios e indústrias em Ibaiti e região.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl border border-gray-100 bg-[oklch(0.97_0.01_241)] hover:bg-[oklch(0.26_0.07_241)] hover:border-[oklch(0.26_0.07_241)] transition-all duration-300 cursor-default"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-[oklch(0.26_0.07_241)] group-hover:text-white mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Não encontrou o que procura? Entre em contato!</p>
          <a
            href="https://wa.me/5543984247962?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[oklch(0.71_0.13_75)] text-white font-semibold px-8 py-3 rounded-xl hover:brightness-110 transition-all"
          >
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

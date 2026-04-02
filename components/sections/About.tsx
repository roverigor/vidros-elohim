const WHATSAPP_URL = 'https://wa.me/5543984247962?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!';

const HIGHLIGHTS = [
  {
    icon: '🏆',
    title: '20+ Anos de Experiência',
    description: 'Décadas atendendo Ibaiti e região com qualidade comprovada.',
  },
  {
    icon: '⚡',
    title: 'Agilidade no Atendimento',
    description: 'Orçamento rápido e prazo de entrega dentro do combinado.',
  },
  {
    icon: '🔧',
    title: 'Instalação Profissional',
    description: 'Equipe treinada para instalação perfeita em qualquer ambiente.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[oklch(0.97_0.01_241)]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="text-sm font-semibold text-[oklch(0.71_0.13_75)] tracking-widest uppercase">
              Quem somos
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[oklch(0.26_0.07_241)] leading-tight">
              Tradição e qualidade em vidros e alumínios
            </h2>
            <div className="mt-4 w-16 h-1 bg-[oklch(0.71_0.13_75)] rounded" />

            <p className="mt-6 text-gray-600 leading-relaxed">
              A <strong>Elohim Vidros</strong> nasceu do compromisso com a qualidade e o atendimento próximo ao cliente.
              Há mais de 20 anos em Ibaiti-PR, somos referência em esquadrias de alumínio, portões, box de banheiro
              e fechamento de varandas para residências, comércios e obras.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Nosso diferencial é a combinação entre experiência de mercado, materiais de alta qualidade e
              um atendimento que respeita o prazo e o orçamento do cliente.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-[oklch(0.26_0.07_241)] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[oklch(0.32_0.08_241)] transition-all"
            >
              Fale conosco
            </a>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-5">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-[oklch(0.26_0.07_241)]">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PORTFOLIO_ITEMS = [
  { id: 1, title: 'Portão de Correr', category: 'Portões', placeholder: true },
  { id: 2, title: 'Box de Banheiro', category: 'Box', placeholder: true },
  { id: 3, title: 'Fechamento de Varanda', category: 'Varandas', placeholder: true },
  { id: 4, title: 'Esquadria de Alumínio', category: 'Esquadrias', placeholder: true },
  { id: 5, title: 'Portão Basculante', category: 'Portões', placeholder: true },
  { id: 6, title: 'Cortina de Vidro', category: 'Varandas', placeholder: true },
];

function PortfolioCard({ title, category }: { title: string; category: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-[oklch(0.26_0.07_241)] aspect-square">
      {/* Placeholder gradient representing a photo */}
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        style={{
          background:
            'linear-gradient(135deg, oklch(0.22 0.06 241) 0%, oklch(0.35 0.08 241) 50%, oklch(0.28 0.07 220) 100%)',
        }}
      >
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/5" />
        <div className="absolute bottom-8 left-8 w-24 h-px bg-white/10" />
        <div className="absolute bottom-12 left-8 w-16 h-px bg-white/10" />

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl opacity-30">🪟</div>
        </div>
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-[oklch(0.26_0.07_241)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
        <span className="text-[oklch(0.71_0.13_75)] text-xs font-semibold tracking-widest uppercase">
          {category}
        </span>
        <span className="text-white font-semibold text-lg">{title}</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[oklch(0.97_0.01_241)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[oklch(0.71_0.13_75)] tracking-widest uppercase">
            Nossos trabalhos
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[oklch(0.26_0.07_241)]">
            Portfólio
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-[oklch(0.71_0.13_75)] rounded" />
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Confira alguns dos nossos projetos realizados em Ibaiti e região.
          </p>
        </div>

        {/* Note: replace placeholder items with real photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioCard key={item.id} title={item.title} category={item.category} />
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          * Fotos reais dos projetos serão adicionadas em breve
        </p>
      </div>
    </section>
  );
}

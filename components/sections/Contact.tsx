const WHATSAPP_URL =
  'https://wa.me/5543984247962?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!';

const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=Av.+Gov.+Paulo+Cruz+Pimentel,+718+Ibaiti+PR';

const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Av.+Gov.+Paulo+Cruz+Pimentel,+718+Ibaiti+PR';

interface ContactCardProps {
  icon: string;
  title: string;
  content: string;
  href: string;
  external?: boolean;
}

function ContactCard({ icon, title, content, href, external }: ContactCardProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[oklch(0.71_0.13_75)] transition-all group"
    >
      <div className="text-2xl flex-shrink-0">{icon}</div>
      <div>
        <div className="text-xs font-semibold text-[oklch(0.71_0.13_75)] uppercase tracking-wider">{title}</div>
        <div className="text-[oklch(0.26_0.07_241)] font-medium mt-0.5 group-hover:text-[oklch(0.71_0.13_75)] transition-colors">
          {content}
        </div>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[oklch(0.71_0.13_75)] tracking-widest uppercase">
            Fale conosco
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[oklch(0.26_0.07_241)]">
            Entre em Contato
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-[oklch(0.71_0.13_75)] rounded" />
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Solicite seu orçamento sem compromisso. Respondemos rapidamente pelo WhatsApp!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact info + CTA */}
          <div className="flex flex-col gap-4">
            <ContactCard
              icon="💬"
              title="WhatsApp"
              content="(43) 98424-7962"
              href={WHATSAPP_URL}
              external
            />
            <ContactCard
              icon="📍"
              title="Endereço"
              content="Av. Gov. Paulo Cruz Pimentel, 718 — Ibaiti, PR"
              href={MAPS_LINK}
              external
            />
            <ContactCard
              icon="📸"
              title="Instagram"
              content="@vidroselohim"
              href="https://www.instagram.com/vidroselohim"
              external
            />

            {/* Big WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-4 px-6 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-green-900/20 text-lg"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Orçamento Agora
            </a>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 h-80 md:h-full min-h-64 bg-[oklch(0.97_0.01_241)] flex items-center justify-center">
            {/* Using a static map link since Maps Embed API needs a key */}
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-[oklch(0.26_0.07_241)] hover:text-[oklch(0.71_0.13_75)] transition-colors p-8 text-center"
            >
              <span className="text-5xl">📍</span>
              <div>
                <div className="font-semibold text-lg">Av. Gov. Paulo Cruz Pimentel, 718</div>
                <div className="text-gray-500 mt-1">Ibaiti, PR — 84900-000</div>
              </div>
              <span className="text-sm underline underline-offset-2 font-medium">
                Ver no Google Maps →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const WHATSAPP_URL =
  'https://wa.me/5543984247962?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!';

const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Av.+Gov.+Paulo+Cruz+Pimentel,+718+Ibaiti+PR';

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

function InfoItem({ icon, label, value, href, external }: InfoItemProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 glass aluminum-surface glass-hover rounded-xl p-4 transition-all duration-300 group"
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-[#d4a843] shrink-0"
        style={{
          background: 'rgba(212, 168, 67, 0.1)',
          border: '1px solid rgba(212, 168, 67, 0.2)',
        }}
      >
        {icon}
      </div>
      <div>
        <div className="text-[10px] tracking-widest text-white/40 uppercase">{label}</div>
        <div className="text-white/80 group-hover:text-white text-sm font-medium transition-colors mt-0.5">
          {value}
        </div>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0a0e1a' }}>
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #d4a843, transparent)' }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-[#d4a843] tracking-[0.3em] uppercase">
            Fale conosco
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Entre em Contato
          </h2>
          <div
            className="mt-4 mx-auto w-20 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #d4a843, transparent)' }}
          />
          <p className="mt-5 text-white/50 max-w-md mx-auto text-sm leading-relaxed">
            Solicite seu orçamento sem compromisso. Respondemos rapidamente!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          {/* Info cards */}
          <div className="flex flex-col gap-3">
            <InfoItem
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              }
              label="WhatsApp"
              value="(43) 98424-7962"
              href={WHATSAPP_URL}
              external
            />
            <InfoItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              label="Endereço"
              value="Av. Gov. Paulo Cruz Pimentel, 718 — Ibaiti, PR"
              href={MAPS_LINK}
              external
            />
            <InfoItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              }
              label="Instagram"
              value="@vidroselohim"
              href="https://www.instagram.com/vidroselohim"
              external
            />
          </div>

          {/* CTA glass card */}
          <div className="glass rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-white font-bold text-xl mb-2">Orçamento gratuito</h3>
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              Envie uma mensagem agora e receba seu orçamento sem compromisso.
              Atendemos Ibaiti e toda a região.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:brightness-110 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-green-900/30 text-base"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp Agora
            </a>
            <p className="text-white/25 text-xs mt-4">
              Av. Gov. Paulo Cruz Pimentel, 718 — Ibaiti, PR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

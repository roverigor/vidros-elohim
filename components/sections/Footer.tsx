import Image from 'next/image';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{
        backgroundColor: '#080d1e',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <Image
              src="/logo/logo.png"
              alt="Elohim Vidros"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </div>

          {/* Links */}
          <nav className="flex gap-6 text-sm text-white/40">
            {['#sobre', '#servicos', '#portfolio', '#contato'].map((href) => (
              <a
                key={href}
                href={href}
                className="hover:text-white/80 transition-colors capitalize"
              >
                {href.replace('#', '')}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/vidroselohim"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/50 hover:text-[#C41830] transition-colors border border-white/10"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://wa.me/5543984247962"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/50 hover:text-[#25D366] transition-colors border border-white/10"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 text-center text-[11px] text-white/20"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          © {YEAR} Elohim Vidros | Esquadrias e Alumínios — Ibaiti, PR. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

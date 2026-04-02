'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#contato', label: 'Contato' },
];

const WHATSAPP_URL = 'https://wa.me/5543984247962?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span
            className={`font-bold text-lg tracking-wide transition-colors ${
              scrolled ? 'text-[oklch(0.26_0.07_241)]' : 'text-white'
            }`}
          >
            ELOHIM VIDROS
          </span>
          <span
            className={`text-xs tracking-widest transition-colors ${
              scrolled ? 'text-[oklch(0.71_0.13_75)]' : 'text-[oklch(0.71_0.13_75)]'
            }`}
          >
            ESQUADRIAS & ALUMÍNIOS
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[oklch(0.71_0.13_75)] ${
                scrolled ? 'text-[oklch(0.26_0.07_241)]' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[oklch(0.71_0.13_75)] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition-all"
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded ${scrolled ? 'text-[oklch(0.26_0.07_241)]' : 'text-white'}`}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[oklch(0.26_0.07_241)] font-medium py-1 border-b border-gray-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[oklch(0.71_0.13_75)] text-white text-center font-semibold px-4 py-2 rounded-lg mt-2"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Elohim Vidros | Esquadrias e Alumínios — Ibaiti, PR',
  description:
    'Há mais de 20 anos em Ibaiti-PR, a Elohim Vidros oferece esquadrias de alumínio, portões, box de banheiro, fechamento de varandas e muito mais. Solicite seu orçamento pelo WhatsApp!',
  keywords: [
    'vidraçaria Ibaiti',
    'esquadrias alumínio Ibaiti',
    'portão alumínio Ibaiti PR',
    'box banheiro Ibaiti',
    'vidros Ibaiti',
    'Elohim Vidros',
  ],
  openGraph: {
    title: 'Elohim Vidros | Esquadrias e Alumínios — Ibaiti, PR',
    description: 'Há mais de 20 anos transformando espaços com qualidade em vidros e alumínios em Ibaiti-PR.',
    locale: 'pt_BR',
    type: 'website',
  },
  other: {
    'google-site-verification': '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

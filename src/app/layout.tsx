import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/layout/whatsapp-button';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    default: 'NovaRoof Solutions LLC - Su Socio de Confianza en Techos',
    template: '%s | NovaRoof Solutions LLC',
  },
  description: 'NovaRoof Solutions LLC ofrece servicios expertos en techos, incluyendo instalación, reparación e inspección. Calidad artesanal y servicio confiable.',
  keywords: ['techos', 'reparación de techos', 'instalación de techos', 'servicios de canalones', 'daños por tormenta'],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}

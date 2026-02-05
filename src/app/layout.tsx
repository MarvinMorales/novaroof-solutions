
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { WhatsAppButton } from '@/components/layout/whatsapp-button';
import { VisitTracker } from '@/components/analytics/visit-tracker';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
});


export const metadata: Metadata = {
  metadataBase: new URL('https://www.novaroofsolutions.com'), // IMPORTANT: Replace with your production domain
  title: {
    default: 'NovaRoof Solutions - Connecting You With Trusted Local Roofers',
    template: '%s | NovaRoof Solutions',
  },
  description: 'We connect you with licensed and insured local roofing contractors for repair, replacement, and emergency services. Get a free, no-obligation quote today.',
  keywords: ['roofing contractors', 'roof repair', 'roof replacement', 'emergency roof repair', 'storm damage'],
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, spaceGrotesk.variable)}>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* <WhatsAppButton /> */}
        <Toaster />
        <VisitTracker />
      </body>
    </html>
  );
}

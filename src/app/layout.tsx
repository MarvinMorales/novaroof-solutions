import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { domain } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const APP_NAME = "Nova Roof Solutions";
const APP_DESCRIPTION = "Premier roofing services in Texas. Expert repairs, replacements, and installations for residential and commercial properties. Call for a free quote.";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${domain}`),
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export const viewport: Viewport = {
  themeColor: "#111827",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable)}>
      <body className="font-sans bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

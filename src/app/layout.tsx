import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { domain } from '@/lib/data';
import { Tracker } from '@/components/analytics/Tracker';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const APP_NAME = "Novaroof Solutions";
const APP_DESCRIPTION = "Premier roofing services in Texas. Expert repairs, replacements, and installations for residential and commercial properties. Call for a free quote.";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${domain}`),
  title: {
    default: `${APP_NAME} | Expert Roofing in Texas`,
    template: `%s`,
  },
  description: APP_DESCRIPTION,
  icons: {
    icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f2a614' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'%3e%3c/path%3e%3cpolyline points='9 22 9 12 15 12 15 22'%3e%3c/polyline%3e%3c/svg%3e",
  },
  openGraph: {
    title: {
      default: `${APP_NAME} | Expert Roofing in Texas`,
      template: `%s`,
    },
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    url: new URL(`https://${domain}`),
    images: [
      {
        url: 'https://lordsroofing.co.uk/wp-content/uploads/2025/05/Roofing-underlayment-1152x700.webp',
        width: 1152,
        height: 700,
        alt: 'Professional roofing services by Novaroof Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: `${APP_NAME} | Expert Roofing in Texas`,
      template: `%s`,
    },
    description: APP_DESCRIPTION,
    images: ['https://lordsroofing.co.uk/wp-content/uploads/2025/05/Roofing-underlayment-1152x700.webp'],
  },
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
        <Tracker />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

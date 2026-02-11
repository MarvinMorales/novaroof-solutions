import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { domain, i18n } from '@/lib/data';
import { Tracker } from '@/components/analytics/Tracker';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

type LangLayoutProps = {
  children: React.ReactNode;
  params: { lang: 'en' | 'es' };
};

const APP_NAME = "Novaroof Solutions";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export async function generateMetadata({ params: { lang } }: LangLayoutProps): Promise<Metadata> {
  const APP_DESCRIPTION = lang === 'es' 
    ? "Servicios de techado de primer nivel en Texas. Reparaciones, reemplazos e instalaciones expertas para propiedades residenciales y comerciales. Llame para una cotización gratuita."
    : "Premier roofing services in Texas. Expert repairs, replacements, and installations for residential and commercial properties. Call for a free quote.";

  const titleDefault = `${APP_NAME} | ${lang === 'es' ? 'Expertos en Techos en Texas' : 'Expert Roofing in Texas'}`;

  return {
    metadataBase: new URL(`https://${domain}`),
    title: {
      default: titleDefault,
      template: `%s`,
    },
    description: APP_DESCRIPTION,
    icons: {
      icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f2a614' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'%3e%3c/path%3e%3cpolyline points='9 22 9 12 15 12 15 22'%3e%3c/polyline%3e%3c/svg%3e",
    },
    openGraph: {
      title: {
        default: titleDefault,
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
          alt: lang === 'es' ? 'Servicios profesionales de techado por Novaroof Solutions' : 'Professional roofing services by Novaroof Solutions',
        },
      ],
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: {
        default: titleDefault,
        template: `%s`,
      },
      description: APP_DESCRIPTION,
      images: ['https://lordsroofing.co.uk/wp-content/uploads/2025/05/Roofing-underlayment-1152x700.webp'],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#111827",
};

export default function LangLayout({
  children,
  params: { lang },
}: LangLayoutProps) {
  return (
    <html lang={lang} className={cn("scroll-smooth", inter.variable)}>
      <body className="font-sans bg-background text-foreground antialiased">
        <Tracker />
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
        <Toaster />
      </body>
    </html>
  );
}

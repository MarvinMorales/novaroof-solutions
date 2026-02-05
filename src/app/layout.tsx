
import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { WhatsAppButton } from '@/components/layout/whatsapp-button';
import { VisitTracker } from '@/components/analytics/visit-tracker';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});


const APP_NAME = "NovaRoof Solutions";
const APP_DEFAULT_TITLE = "NovaRoof Solutions - Connecting You With Trusted Local Roofers";
const APP_TITLE_TEMPLATE = "%s | NovaRoof Solutions";
const APP_DESCRIPTION = "We connect you with licensed and insured local roofing contractors for repair, replacement, and emergency services. Get a free, no-obligation quote today.";


export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL('https://www.novaroofsolutions.com'),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  keywords: ['roofing contractors', 'roof repair', 'roof replacement', 'emergency roof repair', 'storm damage', 'local roofers'],
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport: Viewport = {
  themeColor: "#8B0000",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", roboto.variable)}>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <Breadcrumbs />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* <WhatsAppButton /> */}
        <Toaster />
        <VisitTracker />
      </body>
    </html>
  );
}

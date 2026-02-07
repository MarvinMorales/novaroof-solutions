import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { StickyCallButton } from '@/components/leadgen/StickyCallButton';
import { MinimalFooter } from '@/components/leadgen/MinimalFooter';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-inter',
});


const APP_NAME = "NovaRoof Solutions";
const APP_DEFAULT_TITLE = "NovaRoof Solutions - 24/7 Emergency Roofing Contractors";
const APP_TITLE_TEMPLATE = "%s | NovaRoof Solutions";
const APP_DESCRIPTION = "Get immediate quotes from licensed local roofing contractors for emergency repairs, storm damage, and replacements. Available 24/7. Call now for a free estimate.";


export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
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
    <html lang="en" className={cn("scroll-smooth", inter.variable)}>
      <body className="font-body bg-background text-foreground antialiased">
        <main className="flex-grow">{children}</main>
        <MinimalFooter />
        <StickyCallButton />
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { StickyCallButton } from '@/components/leadgen/StickyCallButton';
import { MinimalFooter } from '@/components/leadgen/MinimalFooter';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const APP_NAME = "Local Roofing Quotes";
const APP_DESCRIPTION = "Get immediate quotes from licensed local roofing contractors for emergency repairs, storm damage, and replacements. Available 24/7. Call now for a free estimate.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable)}>
      <body className="font-sans bg-background text-foreground antialiased">
        <main className="flex-grow">{children}</main>
        <MinimalFooter />
        <StickyCallButton />
      </body>
    </html>
  );
}

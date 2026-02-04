import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';

const pageTitle = 'Find Trusted Local Roofers | USA Roof Pros';
const pageDescription = 'Connect with licensed and insured local roofing contractors for repair, replacement, and emergency services. Get a free, no-obligation quote today from USA Roof Pros.';
const ogImageUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmb3JtJTIwaG91c2V8ZW58MHx8fHwxNzE3NzgwNTM2fDA&ixlib=rb-4.1.0&q=80&w=1200';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: '/',
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};


export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <Faq />
      <Testimonials />
      <Contact />
    </>
  );
}

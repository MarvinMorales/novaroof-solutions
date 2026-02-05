import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with NovaRoof Solutions for any questions about our roofing referral service.',
};

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}

import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactForm } from '@/components/sections/ContactForm';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { LogoCloud } from '@/components/sections/LogoCloud';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CtaBanner />
      <ContactForm />
    </>
  );
}

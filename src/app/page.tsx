import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';

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

import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Faq />
      <Testimonials />
      <Contact />
    </>
  );
}

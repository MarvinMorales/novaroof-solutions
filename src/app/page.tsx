import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}
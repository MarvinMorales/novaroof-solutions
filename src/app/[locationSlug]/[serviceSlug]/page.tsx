import { locations, services as allServices } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactForm } from '@/components/sections/ContactForm';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { LogoCloud } from '@/components/sections/LogoCloud';

type Props = {
  params: {
    locationSlug: string;
    serviceSlug: string;
  };
};

export async function generateStaticParams() {
  const params = [];
  for (const location of locations) {
    for (const service of allServices) {
      params.push({
        locationSlug: location.slug,
        serviceSlug: service.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = locations.find(l => l.slug === params.locationSlug);
  const service = allServices.find(s => s.slug === params.serviceSlug);

  if (!location || !service) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }

  const title = `${service.title} in ${location.city}, ${location.state} | Novaroof Solutions`;
  const description = `Expert ${service.title} in ${location.city}. We offer fast, reliable, and professional roofing services for ${location.city} homeowners. Get a free estimate today.`;

  return {
    title,
    description,
  };
}


export default function LocalServicePage({ params }: Props) {
  const location = locations.find(l => l.slug === params.locationSlug);
  const service = allServices.find(s => s.slug === params.serviceSlug);

  if (!location || !service) {
    notFound();
  }

  return (
    <>
      <Hero location={location} service={service} />
      <LogoCloud />
      <Services />
      <WhyChooseUs location={location} />
      <Gallery />
      <Testimonials />
      <CtaBanner location={location} />
      <ContactForm />
    </>
  );
}

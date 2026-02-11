import { locations, services as allServices } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactForm } from '@/components/sections/ContactForm';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { LogoCloud } from '@/components/sections/LogoCloud';
import { Faq } from '@/components/sections/Faq';

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
  const description = `Need expert ${service.title} in ${location.city}, ${location.state}? Novaroof Solutions offers fast, reliable, and professional roofing services for ${location.city} homeowners and businesses. Whether you're dealing with storm damage, leaks, or need a full replacement, our GAF certified contractors are ready 24/7. We provide free, no-obligation estimates and are fully insured for your peace of mind. As local Texas experts, we understand the unique weather challenges in ${location.city}. Call now for immediate assistance.`;

  const url = `/${params.locationSlug}/${params.serviceSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: service.image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [service.image],
    },
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
      <Testimonials />
      <Faq />
      <CtaBanner location={location} />
      <ContactForm />
    </>
  );
}

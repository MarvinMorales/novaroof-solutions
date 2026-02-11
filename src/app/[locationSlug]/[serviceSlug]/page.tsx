import { locations, services as allServices, faqContent, phoneNumber, domain } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Hero } from '@/components/sections/Hero';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ContactForm } from '@/components/sections/ContactForm';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Faq } from '@/components/sections/Faq';
import { SignsYouNeedRepair } from '@/components/sections/SignsYouNeedRepair';
import { EmergencyRepair } from '@/components/sections/EmergencyRepair';
import { OurProcess } from '@/components/sections/OurProcess';
import { AreasWeServe } from '@/components/sections/AreasWeServe';

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

  const title = `${service.title} in ${location.city}, ${location.state} | Emergency Leak Repair & Free Estimate`;
  const description = `Fast & reliable ${service.title.toLowerCase()} in ${location.city}, ${location.state}. We fix leaks, storm damage, missing shingles & more. Licensed professionals. Call now for a free estimate.`;

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
          alt: service.alt,
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
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        'name': 'Novaroof Solutions',
        'image': service.image,
        '@id': `https://${domain}`,
        'url': `https://${domain}/${params.locationSlug}/${params.serviceSlug}`,
        'telephone': phoneNumber,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': location.city,
          'addressRegion': location.state,
          'addressCountry': 'US'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 29.7604,
          'longitude': -95.3698
        },
        'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            'opens': '00:00',
            'closes': '23:59'
        },
        'priceRange': '$$'
      },
      {
        '@type': 'Service',
        'serviceType': service.title,
        'provider': {
          '@id': `https://${domain}`
        },
        'areaServed': {
          '@type': 'Place',
          'name': location.city
        },
        'name': `${service.title} in ${location.city}`
      },
      {
        '@type': 'FAQPage',
        'mainEntity': faqContent.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero location={location} service={service} />
      <SignsYouNeedRepair />
      <EmergencyRepair />
      <OurProcess />
      <WhyChooseUs location={location} />
      <AreasWeServe />
      <Faq />
      <CtaBanner location={location} />
      <ContactForm />
    </>
  );
}

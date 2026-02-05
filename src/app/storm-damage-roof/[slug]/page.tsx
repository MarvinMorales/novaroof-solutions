import { Metadata } from 'next';
import { getLocationBySlug, getServiceBySlug, locations } from '@/lib/locations';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { generateLocalBusinessSchema } from '@/lib/schema';
import { CitySpecificSection } from '@/components/sections/city-specific-section';
import { NearbyLocations } from '@/components/sections/nearby-locations';
import { Services } from '@/components/sections/services';

const SERVICE_SLUG = 'storm-damage-roof';

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.slug);
  const service = getServiceBySlug(SERVICE_SLUG);

  if (!location || !service) {
    return {
      title: 'Page Not Found',
      description: 'The requested page does not exist.'
    };
  }

  const title = `${service.title} in ${location.city}, ${location.stateCode} | Insurance Claims Help`;
  const description = service.description.replace('{city}', location.city).replace('{state}', location.stateCode);
  const ogImageUrl = 'https://images.unsplash.com/photo-1640296150617-1ede154483d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3Rvcm0lMjBkYW1hZ2V8ZW58MHx8fHwxNzY1NDA4MjA3fDA&ixlib=rb-4.1.0&q=80&w=1200';
  const canonicalUrl = `/${SERVICE_SLUG}/${location.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonicalUrl,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

const getFaqs = (city: string) => [
    {
      question: `Do you help with insurance claims for storm damage in ${city}?`,
      answer: `Yes, the contractors in our ${city} network are experienced in documenting storm damage and working with insurance companies to help ensure your claim is handled properly.`
    },
    {
      question: "How can I tell if my roof has hail damage?",
      answer: "Hail damage can be subtle. Look for dents on gutters and vents, or bruised/cracked shingles. A professional inspection is the best way to know for sure."
    },
];

export default function Page({ params }: { params: { slug: string } }) {
  const location = getLocationBySlug(params.slug);
  const service = getServiceBySlug(SERVICE_SLUG);

  if (!location || !service) {
    notFound();
  }
  const faqs = getFaqs(location.city);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(location, service)) }}
      />
      <Hero />
      <HowItWorks />
      <Services />
      <CitySpecificSection location={location} />
      <Faq faqs={faqs}/>
      <Contact />
      <NearbyLocations currentLocation={location} service={service} />
    </>
  );
}

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

const SERVICE_SLUG = 'emergency-roof-repair';

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

  const title = `${service.title} in ${location.city}, ${location.stateCode} | Free Inspection`;
  const description = service.description.replace('{city}', location.city).replace('{state}', location.stateCode);
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
      images: [
        {
          url: 'https://images.unsplash.com/photo-1640296150617-1ede154483d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3Rvcm0lMjBkYW1hZ2V8ZW58MHx8fHwxNzY1NDA4MjA3fDA&ixlib=rb-4.1.0&q=80&w=1200',
          width: 1200,
          height: 630,
          alt: `Emergency roof repair in ${location.city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://images.unsplash.com/photo-1640296150617-1ede154483d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3Rvcm0lMjBkYW1hZ2V8ZW58MHx8fHwxNzY1NDA4MjA3fDA&ixlib=rb-4.1.0&q=80&w=1200'],
    },
  };
}

const getFaqs = (city: string) => [
    {
      question: `How quickly can I get an emergency roofer to my house in ${city}?`,
      answer: `We can connect you with a local emergency roofer in ${city} often within hours of your call. Our network is available 24/7 to respond to urgent needs.`
    },
    {
      question: "What constitutes a roofing emergency?",
      answer: "A roofing emergency is any situation that immediately endangers your property and safety, such as major leaks during a storm, significant structural damage from a fallen tree, or extensive damage from high winds or hail."
    },
    {
      question: "Will my insurance cover emergency roof repairs?",
      answer: "Most homeowner's insurance policies cover emergency repairs required to prevent further damage to your home (e.g., tarping). The contractors in our network can help document the damage for your insurance claim."
    },
    {
      question: "Should I attempt to fix the roof myself in an emergency?",
      answer: "No, for your safety, you should never attempt to get on your roof during or after a storm. It can be extremely dangerous. Wait for a licensed and insured professional."
    }
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
      <CitySpecificSection location={location} />
      <Faq faqs={faqs} />
      <Contact />
      <NearbyLocations currentLocation={location} service={service} />
    </>
  );
}

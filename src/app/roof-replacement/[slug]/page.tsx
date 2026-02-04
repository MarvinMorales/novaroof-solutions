import { Metadata } from 'next';
import { getLocationBySlug, getServiceBySlug, locations } from '@/lib/locations';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { generateLocalBusinessSchema, generateFaqSchema } from '@/lib/schema';
import { CitySpecificSection } from '@/components/sections/city-specific-section';

const SERVICE_SLUG = 'roof-replacement';

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

  const title = `${service.title} in ${location.city}, ${location.stateCode} | Free Estimate`;
  const description = service.description.replace('{city}', location.city).replace('{state}', location.stateCode);

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

const getFaqs = (city: string) => [
    {
      question: `How long does a roof replacement take in ${city}?`,
      answer: `Most residential roof replacements in the ${city} area are completed in 1-3 days, depending on the size and complexity of the roof.`
    },
    {
      question: "What roofing materials are popular in this area?",
      answer: "Asphalt shingles are the most common, but metal and tile roofs are also popular choices for their durability against local weather conditions."
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
      <CitySpecificSection location={location} />
      <Faq faqs={faqs}/>
      <Contact />
    </>
  );
}

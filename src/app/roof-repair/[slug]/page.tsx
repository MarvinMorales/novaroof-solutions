import { Metadata } from 'next';
import { getLocationBySlug, getServiceBySlug, locations } from '@/lib/locations';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { generateLocalBusinessSchema, generateFaqSchema } from '@/lib/schema';
import { CitySpecificSection } from '@/components/sections/city-specific-section';

const SERVICE_SLUG = 'roof-repair';

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

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

const getFaqs = (city: string) => [
    {
      question: `How much does a typical roof repair cost in ${city}?`,
      answer: `Costs vary based on the damage. We connect you with local pros in ${city} who provide a free, detailed inspection and a no-obligation quote.`
    },
    {
      question: "Should I repair or replace my roof?",
      answer: "It depends on the age of your roof and the extent of the damage. A contractor can assess the situation and give you an honest recommendation."
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

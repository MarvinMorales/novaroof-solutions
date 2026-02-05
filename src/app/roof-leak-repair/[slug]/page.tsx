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
import { Testimonials } from '@/components/sections/testimonials';

const SERVICE_SLUG = 'roof-leak-repair';

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

  const title = `${service.title} in ${location.city}, ${location.stateCode} | Free Quote`;
  const description = service.description.replace('{city}', location.city).replace('{state}', location.stateCode);
  const ogImageUrl = 'https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxyb29mJTIwcmVwYWlyfGVufDB8fHx8MTc2NTQwODIwN3ww&ixlib=rb-4.1.0&q=80&w=1200';
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
      question: `How can I tell where a roof leak is coming from?`,
      answer: `It can be tricky as water travels. Our experts in ${city} use specialized tools to find the exact source of the leak and provide a reliable repair.`
    },
    {
      question: "Is a small leak a big deal?",
      answer: "Yes. Even a small leak can lead to major problems like mold, rot, and structural damage over time. It's best to get it fixed immediately."
    },
    {
      question: "What are common signs of a hidden roof leak?",
      answer: "Look for water stains on your ceiling or walls, a musty odor in your attic, or cracked and blistering paint. These are all signs you may have a hidden leak that needs professional attention."
    },
    {
        question: "Can you fix a leak without replacing the whole roof?",
        answer: "Absolutely. In most cases, leaks can be isolated and repaired by replacing specific shingles, flashing, or sealing vents. A full replacement is usually only necessary for older roofs or widespread damage."
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
      <Services />
      <CitySpecificSection location={location} />
      <Faq faqs={faqs}/>
      <Testimonials />
      <Contact />
      <NearbyLocations currentLocation={location} service={service} />
    </>
  );
}

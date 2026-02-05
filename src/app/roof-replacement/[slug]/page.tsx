import { Metadata } from 'next';
import { getLocationBySlug, getServiceBySlug, locations } from '@/lib/locations';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { CitySpecificSection } from '@/components/sections/city-specific-section';
import { NearbyLocations } from '@/components/sections/nearby-locations';
import { Services } from '@/components/sections/services';
import { Testimonials } from '@/components/sections/testimonials';
import { Breadcrumbs, type BreadcrumbLink } from '@/components/layout/breadcrumbs';


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
  const description = `Considering a new roof in ${location.city}? We find trusted, local pros for complete roof replacements with high-quality materials. Get a free, detailed estimate today.`;
  const ogImageUrl = 'https://images.unsplash.com/photo-1559368611-813457131803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxyb29mJTIwc2hpbmdsZXN8ZW58MHx8fHwxNzY1NDA4MjA3fDA&ixlib=rb-4.1.0&q=80&w=1200';
  const canonicalUrl = `/${SERVICE_SLUG}/${location.slug}/`;

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
      question: `How long does a full roof replacement take in ${city}?`,
      answer: `For an average-sized home in the ${city} area, a complete roof replacement is typically finished in 1 to 3 days. The exact timeline depends on the size and complexity of your roof, the materials chosen, and weather conditions.`
    },
    {
      question: `What are the most popular roofing materials for homes in ${city}?`,
      answer: `Asphalt shingles are the most common choice due to their balance of cost, durability, and style options. However, materials like metal roofing and architectural shingles are also popular for their enhanced longevity and performance against local weather like hail and high winds.`
    },
    {
      question: "How do I know for sure if I need a full replacement or just a repair?",
      answer: "Key indicators that you may need a replacement include the age of your roof (over 20-25 years for asphalt), widespread curling or missing shingles, significant granule loss in your gutters, and persistent leaks in multiple areas. A professional inspection from one of our network contractors can provide a definitive, honest recommendation."
    },
    {
      question: "Do you offer warranties on new roof installations?",
      answer: "Yes, absolutely. The independent contractors in our network provide comprehensive warranties that cover both the materials (from the manufacturer) and their workmanship. This ensures your long-term investment is protected against defects and installation issues."
    },
    {
        question: "How much does a new roof cost?",
        answer: "The cost of a new roof varies significantly based on the size of your home, the materials you choose, and the complexity of the job. The only way to get an accurate number is with a detailed, on-site estimate. We connect you with local professionals who provide this for free."
    }
];

export default function Page({ params }: { params: { slug: string } }) {
  const location = getLocationBySlug(params.slug);
  const service = getServiceBySlug(SERVICE_SLUG);

  if (!location || !service) {
    notFound();
  }

  const faqs = getFaqs(location.city);
  const fullUrl = `https://www.novaroofsolutions.com`;
  
  const breadcrumbs: BreadcrumbLink[] = [
    { name: "Home", href: "/" },
    { name: service.name, href: `/${service.slug}/${location.slug}/` }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(location, service)) }}
      />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.map((c, i) => ({ name: c.name, item: `${fullUrl}${c.href}` })))) }}
      />
      <Breadcrumbs links={breadcrumbs} />
      <Hero 
        h1={`${service.h1} in ${location.city}`}
        subheading={`Protect your biggest investment. We connect you with top-rated roofers in ${location.city} for high-quality, durable roof replacements. Get a free estimate today.`}
      />
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

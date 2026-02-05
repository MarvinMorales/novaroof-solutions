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

const SERVICE_SLUG = 'roof-repair';

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug:string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.slug);
  const service = getServiceBySlug(SERVICE_SLUG);

  if (!location || !service) {
    return {
      title: 'Page Not Found',
      description: 'The requested page does not exist.'
    };
  }

  const title = `${service.title} in ${location.city}, ${location.stateCode} | Free Inspection`;
  const description = `Get professional ${service.name.toLowerCase()} in ${location.city}. We connect you with top-rated local contractors for leaks, missing shingles, and more. Get a free, no-obligation inspection today.`;
  const ogImageUrl = 'https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxyb29mJTIwcmVwYWlyfGVufDB8fHx8MTc2NTQwODIwN3ww&ixlib=rb-4.1.0&q=80&w=1200';
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
      question: `How much does a typical roof repair cost in ${city}?`,
      answer: `The cost of a roof repair in ${city} can vary greatly, from a few hundred dollars for a simple shingle replacement to several thousand for more complex structural repairs. The final price depends on the type of damage, materials needed, and roof accessibility. We connect you with local pros who provide a free, detailed inspection and a precise, no-obligation quote.`
    },
    {
      question: "Should I repair or replace my roof?",
      answer: "This is a common question. The answer depends on your roof's age, the extent of the damage, and your budget. If the roof is relatively new and damage is isolated, a repair is usually sufficient. If your roof is over 20 years old and has widespread issues like curling shingles or persistent leaks, a replacement is often the more cost-effective long-term solution."
    },
    {
      question: "What common types of roof damage can be repaired?",
      answer: "Our network contractors can fix a wide range of issues. This includes replacing missing, cracked, or curling shingles, repairing damaged flashing around chimneys and vents, fixing minor leaks, and addressing problems caused by hail, wind, or fallen tree limbs."
    },
    {
      question: "How long does a roof repair take?",
      answer: "Most common repairs, like replacing a section of shingles or sealing a leak, can be completed by a professional in just a few hours. More extensive repairs might take a full day. The contractor we connect you with will give you a clear timeline along with your quote."
    },
    {
      question: "Can ignoring a small repair lead to bigger problems?",
      answer: "Yes, absolutely. A few missing shingles or a small area of damaged flashing can allow water to seep underneath, leading to wood rot, mold, and costly structural damage over time. It is always more affordable to fix small issues promptly."
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
        subheading={`From missing shingles to minor leaks, we find trusted local roofers in ${location.city} to restore the integrity of your roof. Fast and reliable service.`}
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

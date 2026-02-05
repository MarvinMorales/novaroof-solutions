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

  const title = `${service.title} in ${location.city}, ${location.stateCode} | Stop Leaks Fast`;
  const description = `Find expert ${service.name.toLowerCase()} in ${location.city}. Don't let a small leak cause major damage. We find local pros to stop water intrusion fast. Get your free leak detection quote.`;
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
      question: `How can I tell where a roof leak is coming from?`,
      answer: `It can be tricky as water often travels from the entry point before showing up on your ceiling. Our network pros in ${city} use specialized tools and techniques, like thermal imaging or water testing, to pinpoint the exact source of the leak and ensure a reliable repair.`
    },
    {
      question: "Is a small, slow roof leak a big deal?",
      answer: "Yes, absolutely. Even a small leak can lead to major problems like rotted wood framing, saturated insulation, and dangerous mold growth over time. It's always best to address any leak, no matter the size, as quickly as possible to prevent costly secondary damage."
    },
    {
      question: "What are common signs of a hidden roof leak I should look for?",
      answer: "Besides obvious water spots, look for bubbling or peeling paint on walls or ceilings, a musty odor in your attic or upper rooms, or dark streaks on your exterior siding. These are all potential signs of a hidden leak that needs professional attention."
    },
    {
        question: "Can you fix a leak without replacing my whole roof?",
        answer: "Absolutely. In the vast majority of cases, leaks can be isolated and permanently repaired. This often involves replacing specific shingles, fixing compromised flashing around chimneys or vents, or sealing pipe collars. A full replacement is usually only necessary for very old roofs or widespread, systemic damage."
    },
    {
        question: `How much does it cost to fix a roof leak in ${city}?`,
        answer: `The cost of a roof leak repair in ${city} varies widely depending on the source and extent of the damage. A simple fix might cost a few hundred dollars, while a more complex issue could be more. The best way to know for sure is to get a free, detailed inspection from a local pro.`
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
        subheading={`A small leak can lead to big problems. We find ${city} roofers who specialize in fast, accurate leak detection and repair to protect your home.`}
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

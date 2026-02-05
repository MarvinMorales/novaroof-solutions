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
import { Testimonials } from '@/components/sections/testimonials';
import { Breadcrumbs, type BreadcrumbLink } from '@/components/layout/breadcrumbs';

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

  const title = `24/7 Emergency Roof Repair in ${location.city}, ${location.stateCode} | NovaRoof Solutions`;
  const description = `Need urgent 24/7 emergency roof repair in ${location.city}? Storm, hail, or leak damage. We connect you with licensed roofers immediately. Get a fast, free inspection.`;
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
      answer: `Our goal is to connect you with a local emergency roofer in ${city} within minutes of your request. For active emergencies like a severe leak, a contractor can often be at your property within 1-3 hours to assess the damage and perform temporary repairs like tarping to prevent further water intrusion.`
    },
    {
      question: "What constitutes a roofing emergency?",
      answer: "A roofing emergency is any situation that immediately endangers your property or safety. This includes major active leaks during a storm, significant structural damage from a fallen tree, extensive shingle loss from high winds, or any damage that exposes your home's interior to the elements."
    },
    {
      question: "What's the first thing I should do if my roof is severely damaged?",
      answer: "Your safety is the top priority. If it is safe to do so, move valuable items away from the leak and use buckets to catch water. Do not go on the roof yourself. Your next step should be to call us immediately to get a professional roofer dispatched for an emergency tarping service to prevent further damage."
    },
    {
      question: "Will my homeowner's insurance cover emergency roof repairs?",
      answer: "Most homeowner's insurance policies cover the cost of temporary, emergency repairs required to prevent further damage to your home (a responsibility known as 'mitigating damages'). This typically includes tarping. The licensed contractors in our network are experienced in documenting damage for insurance claims and can provide the necessary paperwork."
    },
    {
      question: `Is the initial inspection for emergency service in ${city} free?`,
      answer: `Yes. The roofer we connect you with will provide a free, no-obligation inspection and quote for the permanent repairs. Emergency tarping or temporary repairs may have a separate, upfront charge, which the contractor will discuss with you before starting any work.`
    },
    {
      question: `Can you handle major structural damage from a fallen tree in ${city}?`,
      answer: `Yes, the contractors in our network are equipped to handle severe structural damage. The process involves first safely removing the tree or debris, securing the area, and then assessing the structural integrity before planning the full-scale repair.`
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
        subheading={`Storms, hail, or fallen trees cause sudden roof damage. We connect you with 24/7 emergency roofers in ${location.city} to secure your home fast.`}
      />
      <HowItWorks />
      <CitySpecificSection location={location} service={service} />
      <Faq faqs={faqs} />
      <Testimonials />
      <Contact />
      <NearbyLocations currentLocation={location} service={service} />
    </>
  );
}

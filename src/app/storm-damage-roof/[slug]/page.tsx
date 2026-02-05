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
  const description = `Expert ${service.name.toLowerCase()} in ${location.city}. We connect you with pros who specialize in hail, wind, and hurricane damage and assist with insurance claims. Schedule a free damage assessment.`;
  const ogImageUrl = 'https://images.unsplash.com/photo-1640296150617-1ede154483d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3Rvcm0lMjBkYW1hZ2V8ZW58MHx8fHwxNzY1NDA4MjA3fDA&ixlib=rb-4.1.0&q=80&w=1200';
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
      question: `Do you help with insurance claims for storm damage in ${city}?`,
      answer: `Yes. While we are not public adjusters, the roofing contractors in our ${city} network are highly experienced in documenting storm damage for insurance purposes. They know what evidence insurers need and can help ensure your claim is thorough and accurate.`
    },
    {
      question: "How can I tell if my roof has hail damage after a storm?",
      answer: "Hail damage can be subtle. From the ground, look for dents on your home's gutters, siding, and air conditioning units. On the roof itself, hail leaves 'bruises' or circular cracks on shingles. A professional inspection is the safest and most reliable way to assess for hail damage."
    },
    {
      question: "What type of documentation do I need for my insurance claim?",
      answer: "You will need clear photos and/or videos of all damaged areas of your property (not just the roof). Most importantly, you'll need a detailed damage report and estimate from a professional roofing contractor. The roofers we connect you with are experts at providing this documentation."
    },
    {
      question: "What if my insurance claim for storm damage is denied?",
      answer: "If your initial claim is denied, you have the right to appeal the decision. The contractor can provide additional evidence or clarification. In some cases, they may recommend you consult with a public adjuster who can advocate on your behalf. Having a professional roofer on your side from the beginning is your best defense."
    },
    {
      question: "Should I get my roof inspected even if I don't see any leaks after a storm?",
      answer: "Yes, it's highly recommended. Hail and wind can cause damage that doesn't result in an immediate leak but has compromised the integrity of your shingles. This hidden damage can lead to leaks months or even years later. A post-storm inspection is a crucial preventative measure."
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
        subheading={`Hail, wind, or storm damage in ${location.city}? We find local experts who help with inspections, repairs, and navigating insurance claims.`}
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

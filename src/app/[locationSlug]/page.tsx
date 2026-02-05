import { Metadata } from 'next';
import { getLocationBySlug, locations } from '@/lib/locations';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { generateOrganizationSchema } from '@/lib/schema';
import { CitySpecificSection } from '@/components/sections/city-specific-section';
import { Testimonials } from '@/components/sections/testimonials';
import { Services } from '@/components/sections/services';
import { Breadcrumbs, type BreadcrumbLink } from '@/components/layout/breadcrumbs';
import { generateBreadcrumbSchema } from '@/lib/schema';


export async function generateStaticParams() {
  return locations.map((location) => ({
    locationSlug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: { locationSlug: string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.locationSlug);

  if (!location) {
    return {
      title: 'Location Not Found',
      description: 'The requested location is not served.'
    };
  }

  const title = `Top Roofing Services in ${location.city}, ${location.stateCode} | NovaRoof Solutions`;
  const description = `Get fast, free quotes from licensed roofing contractors in ${location.city} for roof repair, replacement, and storm damage. NovaRoof Solutions connects you with trusted local pros.`;
  const canonicalUrl = `/${location.slug}/`;

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
          url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmb3JtJTIwaG91c2V8ZW58MHx8fHwxNzE3NzgwNTM2fDA&ixlib=rb-4.1.0&q=80&w=1200',
          width: 1200,
          height: 630,
          alt: `Roofing services in ${location.city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmb3JtJTIwaG91c2V8ZW58MHx8fHwxNzE3NzgwNTM2fDA&ixlib=rb-4.1.0&q=80&w=1200'],
    },
  };
}

export default function Page({ params }: { params: { locationSlug: string } }) {
  const location = getLocationBySlug(params.locationSlug);

  if (!location) {
    notFound();
  }

  const fullUrl = `https://www.novaroofsolutions.com`;

  const breadcrumbs: BreadcrumbLink[] = [
    { name: "Home", href: "/" },
    { name: `${location.city}, ${location.stateCode}`, href: `/${location.slug}/` }
  ];

  return (
    <>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.map((c, i) => ({ name: c.name, item: `${fullUrl}${c.href}` })))) }}
      />
      <Breadcrumbs links={breadcrumbs} />
      <Hero 
        h1={`Trusted Roofing Services in ${location.city}`}
        subheading={`We connect homeowners in ${location.city}, ${location.state}, with top-rated, licensed, and insured roofing contractors. Get a free, no-obligation quote today for repairs, replacements, and emergency services.`}
      />
      <HowItWorks />
      <Services locationSlug={location.slug} />
      <CitySpecificSection location={location} />
      <Faq />
      <Testimonials />
      <Contact />
    </>
  );
}

import { Metadata } from 'next';
import { getLocationBySlug, locations } from '@/lib/locations';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { generateOrganizationSchema } from '@/lib/schema';
import { Testimonials } from '@/components/sections/testimonials';
import { Services } from '@/components/sections/services';
import { type BreadcrumbLink } from '@/components/layout/breadcrumbs';
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
          url: 'https://picsum.photos/seed/og-house/1200/630',
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
      images: ['https://picsum.photos/seed/og-house/1200/630'],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.map((c) => ({ name: c.name, item: `${fullUrl}${c.href}` })))) }}
      />
      <Hero 
        h1={`Trusted Roofing Services in ${location.city}`}
        subheading={`We connect homeowners in ${location.city}, ${location.state}, with top-rated, licensed, and insured roofing contractors. Get a free, no-obligation quote today for repairs, replacements, and emergency services.`}
      />
      <HowItWorks />
      <Services locationSlug={location.slug} />
      <Faq />
      <Testimonials location={location} />
      <Contact />
    </>
  );
}

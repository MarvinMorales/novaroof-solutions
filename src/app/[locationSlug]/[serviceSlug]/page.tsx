import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locations, services, getLocationBySlug, getServiceBySlug } from '@/lib/data';
import { generatePageSchema } from '@/lib/schema';

// Sections
import { Hero } from '@/components/leadgen/Hero';
import { TrustBadges } from '@/components/leadgen/TrustBadges';
import { ServicesHighlight } from '@/components/leadgen/ServicesHighlight';
import { UrgencySection } from '@/components/leadgen/UrgencySection';
import { HowItWorks } from '@/components/leadgen/HowItWorks';
import { CallToAction } from '@/components/leadgen/CallToAction';

// Generate all possible city/service combinations for static export
export async function generateStaticParams() {
  const params: { locationSlug: string; serviceSlug: string }[] = [];
  for (const location of locations) {
    for (const service of services) {
      params.push({
        locationSlug: location.slug,
        serviceSlug: service.slug,
      });
    }
  }
  return params;
}

// Generate dynamic metadata for each page
export async function generateMetadata({ params }: { params: { locationSlug: string; serviceSlug: string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.locationSlug);
  const service = getServiceBySlug(params.serviceSlug);

  if (!location || !service) {
    return {};
  }

  const title = `${service.name} in ${location.city}, ${location.state} | 24/7 Roofing Help`;
  const description = `Need ${service.name.toLowerCase()} in ${location.city}? Get fast, free quotes from licensed local roofing contractors for leaks, storm damage, and emergencies. Available 24/7.`;
  
  return {
    title,
    description,
  };
}

export default function LandingPage({ params }: { params: { locationSlug: string, serviceSlug: string } }) {
  const location = getLocationBySlug(params.locationSlug);
  const service = getServiceBySlug(params.serviceSlug);

  if (!location || !service) {
    notFound();
  }

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePageSchema(location, service)) }}
      />
      <Hero
        serviceName={service.name}
        city={location.city}
        state={location.stateCode}
      />
      <TrustBadges />
      <ServicesHighlight />
      <UrgencySection />
      <HowItWorks />
      <CallToAction />
    </div>
  );
}

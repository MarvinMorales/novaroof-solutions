import { Metadata } from 'next';
import { getLocationBySlug, getServiceBySlug, locations, services } from '@/lib/locations';
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
import { Services } from '@/components/sections/services';
import { ServiceProcess } from '@/components/sections/service-process';

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

export async function generateMetadata({ params }: { params: { locationSlug: string; serviceSlug: string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.locationSlug);
  const service = getServiceBySlug(params.serviceSlug);

  if (!location || !service) {
    return {
      title: 'Page Not Found',
      description: 'The requested page does not exist.'
    };
  }

  const title = `${service.title} in ${location.city}, ${location.stateCode} | NovaRoof Solutions`;
  const description = service.description.replace('{city}', location.city).replace('{state}', location.state);
  const canonicalUrl = `/${location.slug}/${service.slug}/`;

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
          alt: `${service.title} in ${location.city}`,
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

// Service-specific FAQs
const getFaqs = (city: string, serviceSlug: string) => {
    const allFaqs = {
        'roof-repair': [
            { question: `How much does a roof repair cost in ${city}?`, answer: `In ${city}, a minor roof repair like replacing a few wind-damaged shingles might cost between $300 and $700. A more moderate repair, such as fixing a leak around a chimney, could range from $600 to $1,500. The final cost depends on your roof's material and the extent of the damage.` },
            { question: `Should I repair my roof or get a full replacement?`, answer: `This depends on age and damage. If your roof is under 15 years old and damage is localized, a repair is usually best. If it's over 20 years old with multiple leaks or widespread damage, a replacement is a smarter long-term investment.` },
            { question: `How can I tell if my roof has hail damage after a ${city} storm?`, answer: `Look for dents on gutters and downspouts. On asphalt shingles, hail leaves 'bruises' or dark spots where granules are knocked off. It's often hard to see from the ground, so a professional inspection is recommended.` },
        ],
        'roof-replacement': [
            { question: `How long does a full roof replacement take in ${city}?`, answer: `For an average-sized home in ${city}, a complete roof replacement is typically finished in 1 to 3 days, depending on the roof's size, complexity, and weather conditions.` },
            { question: "How do I know if I need a replacement or just a repair?", answer: "Key signs for a replacement include a roof over 20 years old, widespread cracked or curling shingles, significant granule loss in gutters, and persistent leaks in multiple areas." },
            { question: `How much does a new roof cost in ${city}?`, answer: `A new roof in ${city} can range from $8,000 to $20,000+ for a standard asphalt shingle roof. Costs vary based on home size, material choice (asphalt, metal, tile), and job complexity. A free, on-site estimate is the only way to get an accurate price.` },
        ],
        'emergency-roof-repair': [
            { question: `How quickly can a roofer get to my house in ${city} for an emergency?`, answer: `Our goal is to connect you with a local roofer within minutes. For active emergencies like a severe leak, a contractor can often be at your property within 1-3 hours to perform temporary repairs like tarping.` },
            { question: "What constitutes a roofing emergency?", answer: "Any situation that immediately endangers your property. This includes major leaks, structural damage from fallen trees, or extensive shingle loss from high winds that exposes your home's interior." },
            { question: "Will my insurance cover emergency roof repairs?", answer: "Most policies cover temporary, emergency repairs required to prevent further damage (known as 'mitigating damages'), such as tarping. The licensed contractors in our network can provide the necessary documentation for your claim." },
        ],
        'storm-damage-roof': [
            { question: `Do you help with insurance claims for storm damage in ${city}?`, answer: `Yes. The roofing contractors in our network are experienced in documenting storm damage for insurance purposes. They provide the detailed reports and photos that insurers require to help your claim go smoothly.` },
            { question: "Should I get my roof inspected even if I don't see leaks after a storm?", answer: "Yes, it's highly recommended. Hail and wind can cause hidden damage that compromises shingles but doesn't cause an immediate leak. This hidden damage can lead to major problems months or years later. A post-storm inspection is a crucial preventative measure." },
            { question: `What is the time limit for filing a storm damage claim in ${city}?`, answer: `Insurance policies typically have a time limit for filing a claim, often 6 months to 2 years. It is crucial to act quickly. We connect you with roofers who can provide a fast inspection so you can start the process within your policy's deadline.` },
        ],
        'roof-leak-repair': [
            { question: `Is a small, slow roof leak a big deal in ${city}?`, answer: `Yes. Even a small leak can lead to major problems like rotted wood framing, saturated insulation, and dangerous mold growth over time, especially with ${city}'s climate. Addressing any leak quickly is always best.` },
            { question: "Can you fix a leak without replacing my whole roof?", answer: "Absolutely. In most cases, leaks can be isolated and permanently repaired. This might involve replacing specific shingles, fixing flashing around chimneys or vents, or sealing pipe collars. A full replacement is usually only for very old or systematically damaged roofs." },
            { question: `How can I tell where a roof leak is coming from?`, answer: `It's tricky, as water travels. Our network pros in ${city} use techniques like water testing and thermal imaging to pinpoint the exact source of the leak, ensuring a complete and reliable repair.` }
        ]
    };
    return allFaqs[serviceSlug as keyof typeof allFaqs] || [];
};

export default function Page({ params }: { params: { locationSlug: string, serviceSlug: string } }) {
  const location = getLocationBySlug(params.locationSlug);
  const service = getServiceBySlug(params.serviceSlug);

  if (!location || !service) {
    notFound();
  }

  const faqs = getFaqs(location.city, service.slug);
  const fullUrl = `https://www.novaroofsolutions.com`;

  const breadcrumbs: BreadcrumbLink[] = [
    { name: "Home", href: "/" },
    { name: `${service.name} in ${location.city}`, href: `/${location.slug}/${service.slug}/` }
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
        subheading={service.description.replace('{city}', location.city).replace('{state}', location.state)}
      />
      <HowItWorks />
      <ServiceProcess serviceSlug={service.slug} />
      <Services />
      <CitySpecificSection location={location} />
      <Faq faqs={faqs} />
      <Testimonials />
      <Contact />
      <NearbyLocations currentLocation={location} service={service} />
    </>
  );
}

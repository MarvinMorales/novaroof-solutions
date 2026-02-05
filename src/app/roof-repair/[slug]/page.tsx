import { Metadata } from 'next';
import { getLocationBySlug, getServiceBySlug, locations } from '@/lib/locations';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { NearbyLocations } from '@/components/sections/nearby-locations';
import { Testimonials } from '@/components/sections/testimonials';
import { Breadcrumbs, type BreadcrumbLink } from '@/components/layout/breadcrumbs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

  const title = `Roof Repair in ${location.city}, TX | Free Inspections | NovaRoof Solutions`;
  const description = `Need fast roof repair in ${location.city}, TX? We connect you with vetted local roofers for hail damage, leaks, and shingle repair. Get a free, no-obligation inspection today.`;
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
      question: `How much does a roof repair cost in ${city}, TX?`,
      answer: `In ${city}, a minor roof repair like replacing a few wind-damaged shingles might cost between $300 and $700. A more moderate repair, such as fixing a leak around a chimney or vent, could range from $600 to $1,500. The final cost depends heavily on the material of your roof, the extent of the damage (e.g., hail vs. simple wear), and the accessibility of the repair area. The best way to get an accurate price is to schedule a free, no-obligation inspection.`
    },
    {
      question: "My roof isn't leaking, but I see damaged shingles. Should I get it repaired?",
      answer: "Yes, absolutely. Damaged, cracked, or missing shingles are an open invitation for water to seep into your roof's underlayment and decking. In a climate like ours, with its intense sun and sudden downpours, a small issue can quickly lead to wood rot, mold growth in your attic, and expensive structural damage. Proactive repairs are always more affordable than waiting for a major leak."
    },
    {
      question: `How can I tell if my roof has hail damage after a storm in ${city}?`,
      answer: `${city}'s hailstorms can be deceptive. From the ground, look for dents on your gutters, downspouts, or AC unit. On the roof, hail leaves 'bruises' on asphalt shingles—dark, soft spots where the protective granules have been knocked off. If you have a metal roof, you'll see clear dents. It's often hard to spot from the ground, which is why a professional inspection after a significant storm is highly recommended to protect your insurance claim rights.`
    },
    {
        question: "Should I repair my roof or get a full replacement?",
        answer: "The decision depends on three main factors: your roof's age, the extent of the damage, and your future plans. If your roof is under 15 years old and the damage is confined to one area (e.g., a few missing shingles), a repair is typically the most cost-effective solution. However, if your roof is over 20 years old, has multiple leaks, or more than 30% of the surface is damaged, a replacement is often the smarter long-term investment."
    },
    {
        question: `How quickly can I get a roofer for an emergency repair in the ${city} area?`,
        answer: `We specialize in rapid response. After you contact us, our goal is to have a licensed ${city}-area roofer get in touch with you within minutes. For emergencies like a severe leak after a storm, a contractor can often be on-site the same day to perform a temporary fix, like tarping, to prevent further water damage while a permanent repair is planned.`
    },
    {
        question: `Do the roofers you work with help with insurance claims?`,
        answer: `Yes. The local ${city} roofing contractors in our network are highly experienced in working with all major insurance carriers. They know exactly how to document hail, wind, and storm damage with the photos and detailed reports that insurance adjusters require, which helps ensure your claim is processed smoothly and fairly.`
    }
];

const AustinContent = () => (
    <section className="bg-card py-16 md:py-24">
        <div className="container">
            <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
                <p className="lead">
                    An aging or damaged roof is a homeowner's worst nightmare, especially in a city with weather as unpredictable as Austin's. From the intense summer sun and surprise hailstorms to high winds and torrential downpours, your roof is your home’s first and most important line of defense. Ignoring a small issue like a few missing shingles or a minor leak can quickly escalate into costly structural damage, wood rot, and dangerous mold growth.
                </p>
                <p>
                    NovaRoof Solutions makes finding a reliable, professional roofer in the Austin area simple and stress-free. We are not a roofing company; we are a dedicated referral service that connects you with pre-screened, licensed, and insured local roofing experts who are ready to handle any repair, big or small.
                </p>
                
                <h2 className="font-headline tracking-tighter">Common Roof Repairs for Austin Homeowners</h2>
                <p>
                    The unique Central Texas climate presents specific challenges for residential roofs. Our network of Austin roofers are experts at diagnosing and fixing these common problems:
                </p>
                <h3>Hail & Storm Damage Repair</h3>
                <p>
                    Austin is in the heart of "Hail Alley," and severe thunderstorms are the #1 cause of roof damage in the area. Our contractors specialize in identifying hail impacts—which can be subtle—and providing the comprehensive documentation needed for your insurance claim. We connect you with pros who can handle everything from replacing bruised shingles to full-scale restoration after a major storm.
                </p>
                <h3>Leaky Roof Repair</h3>
                <p>
                    Whether it's from age, storm damage, or improper installation, a roof leak needs immediate attention. Common problem areas in Austin homes include leaks around chimneys, skylights, plumbing vents, and valleys. The contractors we work with use proven techniques to trace the source of the water intrusion and perform a permanent repair, not just a temporary patch.
                </p>
                <h3>Wood Rot and Decking Repair</h3>
                <p>
                    A long-term, slow leak can saturate the wooden decking underneath your shingles, causing it to rot and lose structural integrity. This is a serious issue that compromises the entire roofing system. An expert roofer will identify and replace any rotted sections of decking before making shingle repairs to ensure a solid foundation for your roof.
                </p>
                <h3>Wind Damage & Missing Shingle Replacement</h3>
                <p>
                    Strong straight-line winds from thunderstorms can lift and tear shingles right off your roof, leaving your home exposed. We connect you with roofers who can quickly and efficiently replace missing shingles, ensuring the color and style match your existing roof as closely as possible to maintain your home's curb appeal and protection.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg my-12 text-center">
                    <h3 className="font-headline text-2xl !mt-0">Don't Wait for a Drip to Become a Disaster!</h3>
                    <p className="text-lg">A small roof problem today can be a major expense tomorrow. Protect your investment.</p>
                    <Button asChild size="lg" className="mt-4">
                        <Link href="#contact">Get a Free Inspection in Austin</Link>
                    </Button>
                </div>
                
                <h2 className="font-headline tracking-tighter">Serving All of Austin and Surrounding Communities</h2>
                <p>
                    Our network of qualified roofing professionals serves the entire Austin metropolitan area. Whether you're in a historic home in Hyde Park, a new build in Cedar Park, or a family residence in Round Rock, we connect you with a local expert who understands the specific needs of your neighborhood. Our service area includes, but is not limited to:
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4">
                    <li>Downtown Austin</li>
                    <li>South Congress (SoCo)</li>
                    <li>Zilker</li>
                    <li>Round Rock</li>
                    <li>Cedar Park</li>
                    <li>Pflugerville</li>
                    <li>Leander</li>
                    <li>Georgetown</li>
                    <li>West Lake Hills</li>
                    <li>Lakeway</li>
                    <li>Barton Creek</li>
                    <li>Tarrytown</li>
                </ul>
                <p>
                    Don't see your neighborhood? Don't worry. If you're in Travis, Williamson, or Hays county, we have a trusted local roofer ready to help.
                </p>
            </div>
        </div>
    </section>
);


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
        h1={`Expert Roof Repair in ${location.city}, TX`}
        subheading={`From hail damage to leaky shingles, we connect you with Austin's most trusted local roofers. Get a fast, free, no-obligation inspection.`}
      />
      <HowItWorks />
      {location.slug === 'austin-tx' ? <AustinContent /> : null}
      <Faq faqs={faqs}/>
      <Testimonials />
      <Contact />
      <NearbyLocations currentLocation={location} service={service} />
    </>
  );
}

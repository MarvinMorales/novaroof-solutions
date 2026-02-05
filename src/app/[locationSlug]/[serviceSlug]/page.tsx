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
import { Services } from '@/components/sections/services';
import { Testimonials } from '@/components/sections/testimonials';
import { Breadcrumbs, type BreadcrumbLink } from '@/components/layout/breadcrumbs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateStaticParams() {
  const params: { locationSlug: string; serviceSlug: string }[] = [];
  for (const location of locations) {
    for (const service of services) {
        if (['emergency-roof-repair', 'storm-damage-roof', 'roof-leak-repair', 'roof-repair', 'roof-replacement'].includes(service.slug)) {
             params.push({
                locationSlug: location.slug,
                serviceSlug: service.slug,
            });
        }
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

    const titleTemplates: { [key: string]: string } = {
        'roof-repair': `Austin Roof Repair Experts | Free Inspections | NovaRoof Solutions`,
        'roof-replacement': `${service.title} in ${location.city}, ${location.stateCode} | Free Estimate`,
        'emergency-roof-repair': `${service.title} in ${location.city}, ${location.stateCode} | 24/7 Response`,
        'storm-damage-roof': `${service.title} in ${location.city}, ${location.stateCode} | Insurance Claims Help`,
        'roof-leak-repair': `${service.title} in ${location.city}, ${location.stateCode} | Stop Leaks Fast`,
    };

    const descriptionTemplates: { [key: string]: string } = {
        'roof-repair': `Need fast roof repair in Austin, TX? We connect you with vetted local roofers for hail damage, leaks & more. Get a free, no-obligation inspection today.`,
        'roof-replacement': `Considering a new roof in ${location.city}? We find trusted, local pros for complete roof replacements with high-quality materials. Get a free, detailed estimate today.`,
        'emergency-roof-repair': `Need urgent ${service.name.toLowerCase()} in ${location.city}? We connect you with licensed 24/7 roofers for storm, hail, or leak damage. Get a fast, free inspection.`,
        'storm-damage-roof': `Expert ${service.name.toLowerCase()} in ${location.city}. We connect you with pros who specialize in hail, wind, and hurricane damage and assist with insurance claims. Schedule a free damage assessment.`,
        'roof-leak-repair': `Find expert ${service.name.toLowerCase()} in ${location.city}. Don't let a small leak cause major damage. We find local pros to stop water intrusion fast. Get your free leak detection quote.`,
    };
    
    const imageTemplates: { [key: string]: string } = {
        'roof-repair': 'https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxyb29mJTIwcmVwYWlyfGVufDB8fHx8MTc2NTQwODIwN3ww&ixlib=rb-4.1.0&q=80&w=1200',
        'roof-replacement': 'https://images.unsplash.com/photo-1559368611-813457131803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxyb29mJTIwc2hpbmdsZXN8ZW58MHx8fHwxNzY1NDA4MjA3fDA&ixlib=rb-4.1.0&q=80&w=1200',
        'emergency-roof-repair': 'https://images.unsplash.com/photo-1640296150617-1ede154483d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3Rvcm0lMjBkYW1hZ2V8ZW58MHx8fHwxNzY1NDA4MjA3fDA&ixlib=rb-4.1.0&q=80&w=1200',
        'storm-damage-roof': 'https://images.unsplash.com/photo-1640296150617-1ede154483d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3Rvcm0lMjBkYW1hZ2V8ZW58MHx8fHwxNzY1NDA4MjA3fDA&ixlib=rb-4.1.0&q=80&w=1200',
        'roof-leak-repair': 'https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxyb29mJTIwcmVwYWlyfGVufDB8fHx8MTc2NTQwODIwN3ww&ixlib=rb-4.1.0&q=80&w=1200',
    };

    const title = (titleTemplates[service.slug] && location.slug === 'austin-tx' && service.slug === 'roof-repair') ? titleTemplates[service.slug] : `${service.title} in ${location.city}, ${location.stateCode}`;
    const description = (descriptionTemplates[service.slug] && location.slug === 'austin-tx' && service.slug === 'roof-repair') ? descriptionTemplates[service.slug] : `Find professional ${service.name.toLowerCase()} services in ${location.city}. We connect you with trusted local contractors.`;
    const ogImageUrl = imageTemplates[service.slug] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmb3JtJTIwaG91c2V8ZW58MHx8fHwxNzE3NzgwNTM2fDA&ixlib=rb-4.1.0&q=80&w=1200';
    const canonicalUrl = `/${location.slug}/${service.slug}/`;

    return {
        title,
        description,
        alternates: { canonical: canonicalUrl },
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


const faqsByService: { [key: string]: (city: string) => { question: string, answer: string }[] } = {
  'roof-repair': (city: string) => [
      { question: `How much does a roof repair cost in ${city}, TX?`, answer: `In ${city}, a minor roof repair like replacing a few wind-damaged shingles might cost between $300 and $600. A more moderate repair, such as fixing a leak around a chimney or vent, could range from $600 to $1,500. The final cost depends heavily on the material of your roof, the extent of the damage (e.g., hail vs. simple wear), and the accessibility of the repair area. The best way to get an accurate price is to schedule a free, no-obligation inspection.` },
      { question: "My roof isn't leaking, but I see damaged shingles. Should I get it repaired?", answer: "Yes, absolutely. Damaged, cracked, or missing shingles are an open invitation for water to seep into your roof's underlayment and decking. In Texas's climate, with its intense sun and sudden downpours, a small issue can quickly lead to wood rot, mold growth in your attic, and expensive structural damage. Proactive repairs are always more affordable than waiting for a major leak." },
      { question: `How can I tell if my roof has hail damage after a storm in ${city}?`, answer: `${city}'s hailstorms can be deceptive. From the ground, look for dents on your gutters, downspouts, or AC unit. On the roof, hail leaves 'bruises' on asphalt shingles—dark, soft spots where the protective granules have been knocked off. If you have a metal roof, you'll see clear dents. It's often hard to spot from the ground, which is why a professional inspection after a significant storm is highly recommended to protect your insurance claim rights.` },
      { question: "Should I repair my roof or get a full replacement?", answer: "The decision depends on three main factors: your roof's age, the extent of the damage, and your future plans. If your roof is under 15 years old and the damage is confined to one area (e.g., a few missing shingles), a repair is typically the most cost-effective solution. However, if your roof is over 20 years old, has multiple leaks, or more than 30% of the surface is damaged, a replacement is often the smarter long-term investment." },
      { question: `How quickly can I get a roofer for an emergency repair in the ${city} area?`, answer: `We specialize in rapid response. After you contact us, our goal is to have a licensed ${city}-area roofer get in touch with you within minutes. For emergencies like a severe leak after a storm, a contractor can often be on-site the same day to perform a temporary fix, like tarping, to prevent further water damage while a permanent repair is planned.` },
      { question: `Do the roofers you work with help with insurance claims?`, answer: `Yes. The local ${city} roofing contractors in our network are highly experienced in working with all major insurance carriers. They know exactly how to document hail, wind, and storm damage with the photos and detailed reports that insurance adjusters require, which helps ensure your claim is processed smoothly and fairly.` }
  ],
  'roof-replacement': (city: string) => [
      { question: `How long does a full roof replacement take in ${city}?`, answer: `For an average-sized home in the ${city} area, a complete roof replacement is typically finished in 1 to 3 days. The exact timeline depends on the size and complexity of your roof, the materials chosen, and weather conditions.` },
      { question: `What are the most popular roofing materials for homes in ${city}?`, answer: `Asphalt shingles are the most common choice due to their balance of cost, durability, and style options. However, materials like metal roofing and architectural shingles are also popular for their enhanced longevity and performance against local weather like hail and high winds.` },
      { question: "How do I know for sure if I need a full replacement or just a repair?", answer: "Key indicators that you may need a replacement include the age of your roof (over 20-25 years for asphalt), widespread curling or missing shingles, significant granule loss in your gutters, and persistent leaks in multiple areas. A professional inspection from one of our network contractors can provide a definitive, honest recommendation." },
      { question: "Do you offer warranties on new roof installations?", answer: "Yes, absolutely. The independent contractors in our network provide comprehensive warranties that cover both the materials (from the manufacturer) and their workmanship. This ensures your long-term investment is protected against defects and installation issues." },
      { question: "How much does a new roof cost?", answer: "The cost of a new roof varies significantly based on the size of your home, the materials you choose, and the complexity of the job. The only way to get an accurate number is with a detailed, on-site estimate. We connect you with local professionals who provide this for free." }
  ],
  'emergency-roof-repair': (city: string) => [
      { question: `How quickly can I get an emergency roofer to my house in ${city}?`, answer: `Our goal is to connect you with a local emergency roofer in ${city} within minutes of your request. Depending on contractor availability and your location, they can often be at your property within hours to assess the damage and perform temporary repairs like tarping.` },
      { question: "What constitutes a roofing emergency?", answer: "A roofing emergency is any situation that immediately endangers your property and safety. This includes major active leaks during a storm, significant structural damage from a fallen tree, extensive shingle loss from high winds, or any damage that exposes your home's interior to the elements." },
      { question: "What's the first thing I should do if my roof is severely damaged?", answer: "Your safety is the top priority. Stay inside and away from the damaged area. If water is coming in, use buckets to catch it and move valuable items. Do not go on the roof yourself. Your next step should be to call us or fill out our form to get a professional roofer dispatched for an emergency tarping service to prevent further water damage." },
      { question: "Will my homeowner's insurance cover emergency roof repairs?", answer: "Most homeowner's insurance policies cover the cost of temporary, emergency repairs required to prevent further damage to your home (mitigation), such as tarping. The licensed contractors in our network are experienced in documenting damage for insurance claims and can provide the necessary paperwork." },
      { question: "Is the initial inspection and quote for emergency service free?", answer: `Yes. The roofer we connect you with will provide a free, no-obligation inspection and quote for the permanent repairs. Emergency tarping or temporary repairs may have a separate charge, which the contractor will discuss with you upfront.` }
  ],
  'storm-damage-roof': (city: string) => [
      { question: `Do you help with insurance claims for storm damage in ${city}?`, answer: `Yes. While we are not public adjusters, the roofing contractors in our ${city} network are highly experienced in documenting storm damage for insurance purposes. They know what evidence insurers need and can help ensure your claim is thorough and accurate.` },
      { question: "How can I tell if my roof has hail damage after a storm?", answer: "Hail damage can be subtle. From the ground, look for dents on your home's gutters, siding, and air conditioning units. On the roof itself, hail leaves 'bruises' or circular cracks on shingles. A professional inspection is the safest and most reliable way to assess for hail damage." },
      { question: "What type of documentation do I need for my insurance claim?", answer: "You will need clear photos and/or videos of all damaged areas of your property (not just the roof). Most importantly, you'll need a detailed damage report and estimate from a professional roofing contractor. The roofers we connect you with are experts at providing this documentation." },
      { question: "What if my insurance claim for storm damage is denied?", answer: "If your initial claim is denied, you have the right to appeal the decision. The contractor can provide additional evidence or clarification. In some cases, they may recommend you consult with a public adjuster who can advocate on your behalf. Having a professional roofer on your side from the beginning is your best defense." },
      { question: "Should I get my roof inspected even if I don't see any leaks after a storm?", answer: "Yes, it's highly recommended. Hail and wind can cause damage that doesn't result in an immediate leak but has compromised the integrity of your shingles. This hidden damage can lead to leaks months or even years later. A post-storm inspection is a crucial preventative measure." }
  ],
  'roof-leak-repair': (city: string) => [
      { question: `How can I tell where a roof leak is coming from?`, answer: `It can be tricky as water often travels from the entry point before showing up on your ceiling. Our network pros in ${city} use specialized tools and techniques, like thermal imaging or water testing, to pinpoint the exact source of the leak and ensure a reliable repair.` },
      { question: "Is a small, slow roof leak a big deal?", answer: "Yes, absolutely. Even a small leak can lead to major problems like rotted wood framing, saturated insulation, and dangerous mold growth over time. It's always best to address any leak, no matter the size, as quickly as possible to prevent costly secondary damage." },
      { question: "What are common signs of a hidden roof leak I should look for?", answer: "Besides obvious water spots, look for bubbling or peeling paint on walls or ceilings, a musty odor in your attic or upper rooms, or dark streaks on your exterior siding. These are all potential signs of a hidden leak that needs professional attention." },
      { question: "Can you fix a leak without replacing my whole roof?", answer: "Absolutely. In the vast majority of cases, leaks can be isolated and permanently repaired. This often involves replacing specific shingles, fixing compromised flashing around chimneys or vents, or sealing pipe collars. A full replacement is usually only necessary for very old roofs or widespread, systemic damage." },
      { question: `How much does it cost to fix a roof leak in ${city}?`, answer: `The cost of a roof leak repair in ${city} varies widely depending on the source and extent of the damage. A simple fix might cost a few hundred dollars, while a more complex issue could be more. The only way to know for sure is to get a free, detailed inspection from a local pro.` }
  ]
};

const AustinContent = () => (
    <section className="bg-card py-16 md:py-24">
        <div className="container">
            <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
                <h2>Your Trusted Partner for Roof Repair in Austin</h2>
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
                    Austin is no stranger to severe thunderstorms that can drop large, destructive hail. This is the #1 cause of roof damage in the area. Our contractors specialize in identifying hail impacts—which can be subtle—and providing the comprehensive documentation needed for your insurance claim. We connect you with pros who can handle everything from replacing bruised shingles to full-scale restoration after a major storm.
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


export default function ServiceLocationPage({ params }: { params: { locationSlug: string, serviceSlug: string } }) {
  const location = getLocationBySlug(params.locationSlug);
  const service = getServiceBySlug(params.serviceSlug);

  if (!location || !service || !faqsByService[service.slug]) {
    notFound();
  }

  const faqs = faqsByService[service.slug](location.city);
  const fullUrl = `https://www.novaroofsolutions.com`;
  
  const breadcrumbs: BreadcrumbLink[] = [
    { name: "Home", href: "/" },
    { name: `${service.name} in ${location.city}`, href: `/${location.slug}/${service.slug}/` }
  ];

  const heroH1s: { [key: string]: string } = {
        'roof-repair': `Expert Roof Repair in ${location.city}, TX`,
        'roof-replacement': `${service.h1} in ${location.city}`,
        'emergency-roof-repair': `${service.h1} in ${location.city}`,
        'storm-damage-roof': `${service.h1} in ${location.city}`,
        'roof-leak-repair': `${service.h1} in ${location.city}`,
  };

  const heroSubheadings: { [key: string]: string } = {
      'roof-repair': `From hail damage to leaky shingles, we connect you with ${location.city}'s most trusted local roofers. Get a fast, free, no-obligation inspection.`,
      'roof-replacement': `Protect your biggest investment. We connect you with top-rated roofers in ${location.city} for high-quality, durable roof replacements. Get a free estimate today.`,
      'emergency-roof-repair': `Storms, hail, or fallen trees can cause sudden roof damage. We connect you with 24/7 emergency roofers in ${location.city} to secure your home fast.`,
      'storm-damage-roof': `Hail, wind, or storm damage in ${location.city}? We find local experts who help with inspections, repairs, and navigating insurance claims.`,
      'roof-leak-repair': `A small leak can lead to big problems. We find ${location.city} roofers who specialize in fast, accurate leak detection and repair to protect your home.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(location, service)) }}
      />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.map((c) => ({ name: c.name, item: `${fullUrl}${c.href}` })))) }}
      />
      <Breadcrumbs links={breadcrumbs} />
      <Hero 
        h1={heroH1s[service.slug]}
        subheading={heroSubheadings[service.slug]}
      />
      <HowItWorks />
      {location.slug === 'austin-tx' && service.slug === 'roof-repair' ? <AustinContent /> : <CitySpecificSection location={location} />}
      <Services />
      <Faq faqs={faqs}/>
      <Testimonials />
      <Contact />
      <NearbyLocations currentLocation={location} service={service} />
    </>
  );
}

import { Metadata } from 'next';
import { getLocationBySlug, getServiceBySlug, locations, services } from '@/lib/locations';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/hero';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { CitySpecificSection } from '@/components/sections/city-specific-section';
import { NearbyLocations } from '@/components/sections/nearby-locations';
import { Testimonials } from '@/components/sections/testimonials';
import { type BreadcrumbLink } from '@/components/layout/breadcrumbs';
import { Services } from '@/components/sections/services';
import { ServiceProcess } from '@/components/sections/service-process';
import { StickyCTA } from '@/components/layout/sticky-cta';

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
          url: 'https://picsum.photos/seed/og-storm/1200/630',
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
      images: ['https://picsum.photos/seed/og-storm/1200/630'],
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
            { question: "How long does a typical roof repair take?", answer: "Most minor to moderate roof repairs can be completed in just a few hours. More complex repairs might take a full day. The contractor will give you a precise timeline with your free estimate." },
            { question: "What happens if the roofer finds more damage during the repair?", answer: "If a roofer uncovers a larger issue (like rotted decking under the shingles), they will stop, show you the problem, and provide a clear change order or updated quote for the additional work. No surprise charges." }
        ],
        'roof-replacement': [
            { question: `How long does a full roof replacement take in ${city}?`, answer: `For an average-sized home in ${city}, a complete roof replacement is typically finished in 1 to 3 days, depending on the roof's size, complexity, and weather conditions.` },
            { question: "How do I know if I need a replacement or just a repair?", answer: "Key signs for a replacement include a roof over 20 years old, widespread cracked or curling shingles, significant granule loss in gutters, and persistent leaks in multiple areas." },
            { question: `How much does a new roof cost in ${city}?`, answer: `A new roof in ${city} can range from $8,000 to $20,000+ for a standard asphalt shingle roof. Costs vary based on home size, material choice (asphalt, metal, tile), and job complexity. A free, on-site estimate is the only way to get an accurate price.` },
            { question: "Does a new roof come with a warranty?", answer: "Yes. All new roofs installed by contractors in our network come with two warranties: a manufacturer's warranty on the materials (often 25-50 years) and a workmanship warranty from the contractor that covers the installation." },
            { question: "Will a new roof increase my home's value?", answer: "Absolutely. A new roof is one of the single best home improvement projects for return on investment (ROI). It enhances curb appeal, improves energy efficiency, and gives potential buyers peace of mind." }
        ],
        'emergency-roof-repair': [
            { question: `How quickly can a roofer get to my house in ${city} for an emergency?`, answer: `Our goal is to connect you with a local roofer within minutes. For active emergencies like a severe leak, a contractor can often be at your property within 1-3 hours to perform temporary repairs like tarping.` },
            { question: "What constitutes a roofing emergency?", answer: "Any situation that immediately endangers your property. This includes major leaks, structural damage from fallen trees, or extensive shingle loss from high winds that exposes your home's interior." },
            { question: "Will my insurance cover emergency roof repairs?", answer: "Most homeowner's insurance policies cover temporary, emergency repairs required to prevent further damage (this is called 'mitigating damages'), such as tarping. The licensed contractors in our network can provide the necessary documentation for your claim." },
            { question: "What should I do while waiting for the emergency roofer?", answer: "If it is safe to do so, place buckets under any active leaks to protect your floors and furniture. Move any valuable items out of the affected area. Do not climb on the roof yourself, especially during a storm." },
            { question: "Is the emergency tarping a permanent fix?", answer: "No. Tarping is a crucial but temporary measure designed to prevent further water damage until a permanent, professional repair can be scheduled and completed safely in good weather." }
        ],
        'storm-damage-roof': [
            { question: `Do you help with insurance claims for storm damage in ${city}?`, answer: `Yes. The roofing contractors in our network are experienced in documenting storm damage for insurance purposes. They provide the detailed reports and photos that insurers require to help your claim go smoothly.` },
            { question: "Should I get my roof inspected even if I don't see leaks after a storm?", answer: "Yes, it's highly recommended. Hail and wind can cause hidden damage that compromises shingles but doesn't cause an immediate leak. This hidden damage can lead to major problems months or years later. A post-storm inspection is a crucial preventative measure." },
            { question: `What is the time limit for filing a storm damage claim in ${city}?`, answer: `Insurance policies typically have a time limit for filing a claim, often 6 months to 2 years. It is crucial to act quickly. We connect you with roofers who can provide a fast inspection so you can start the process within your policy's deadline.` },
            { question: "How can I tell if I have wind damage on my roof?", answer: "From the ground, look for missing shingles on the roof or in your yard. You might also see shingles that are lifted, creased, or folded back. A professional inspection is the safest way to assess the full extent of the damage." },
            { question: "What if my insurance company's estimate is lower than the contractor's?", answer: "This is common. An experienced storm damage contractor can submit a supplement to the insurance company with detailed evidence and cost breakdowns to argue for the additional funds needed to complete the repair correctly according to local building codes." }
        ],
        'hail-damage-roof-repair': [
            { question: `How can I tell if I have hail damage in ${city}?`, answer: `Look for dents on soft metal like gutters, vents, and AC units. On shingles, you might see dark 'bruises' where granules were knocked off. It's often hard to see from the ground, so a free, professional inspection is the safest way to know for sure.` },
            { question: "Will my insurance cover hail damage?", answer: "Yes, hail damage is typically covered by standard homeowner's insurance policies. An experienced hail damage contractor can help you navigate the claims process to ensure all damage is documented and covered." },
            { question: `Should I get my roof repaired or replaced after hail?`, answer: `It depends on the severity. Widespread damage across most of the roof usually requires a full replacement. If the damage is minor and isolated, targeted repairs may be possible. A professional assessment is needed to determine the best course of action.` },
            { question: "What are Class 4 impact-resistant shingles?", answer: "Class 4 shingles are the highest rating for impact resistance. They are specifically designed to withstand hail up to 2 inches in diameter. Installing them can often earn you a discount on your homeowner's insurance policy." },
            { question: "How long do I have to file an insurance claim for hail damage?", answer: "Most insurance policies have a time limit, often between 6 months and 2 years from the date of the storm. It is crucial to get an inspection and file your claim as soon as possible after a hailstorm." }
        ],
        'roof-leak-repair': [
            { question: `Is a small, slow roof leak a big deal in ${city}?`, answer: `Yes. Even a small leak can lead to major problems like rotted wood framing, saturated insulation, and dangerous mold growth over time, especially with ${city}'s climate. Addressing any leak quickly is always best.` },
            { question: "Can you fix a leak without replacing my whole roof?", answer: "Absolutely. In most cases, leaks can be isolated and permanently repaired. This might involve replacing specific shingles, fixing flashing around chimneys or vents, or sealing pipe collars. A full replacement is usually only for very old or systematically damaged roofs." },
            { question: `How can I tell where a roof leak is coming from?`, answer: `It's tricky, as water travels. The water stain on your ceiling may be far from the actual entry point on the roof. Our network pros in ${city} use techniques like water testing and thermal imaging to pinpoint the exact source of the leak, ensuring a complete and reliable repair.` },
            { question: "What are the most common causes of roof leaks?", answer: "The most common culprits are damaged or improperly installed flashing around chimneys and vents, old and cracked pipe boot seals, missing or damaged shingles, and ice dams in colder climates." },
            { question: `How much does it cost to fix a roof leak in ${city}?`, answer: `A minor leak repair can cost between $300 - $700. A more complex leak that requires replacing flashing or some underlying wood could cost $800 - $2,000+. The contractor will provide a precise quote after inspection.` }
        ],
        'roof-inspection': [
            { question: `How often should I get my roof inspected in ${city}?`, answer: `In a climate like ${city}'s, it is recommended to get a professional roof inspection at least once every 1-2 years, and always after a major storm involving high winds or hail.` },
            { question: "Is a roof inspection free?", answer: "Yes, the roofing contractors in our network provide a comprehensive roof inspection along with a no-obligation quote for any necessary repairs, completely free of charge." },
            { question: "Can a professional roof inspection save me money?", answer: "Definitely. An inspection can catch small, inexpensive problems like a cracked pipe boot or a few loose shingles before they turn into a major leak that causes thousands of dollars in water damage to your home's interior." },
            { question: "What's included in a roof inspection report?", answer: "You will receive a detailed report, often with photos, that outlines the overall condition of your roof, its estimated remaining lifespan, the condition of flashing and seals, and a clear list of any recommended repairs or maintenance." },
            { question: "How long does a roof inspection take?", answer: "A thorough, professional roof inspection typically takes between 30 to 60 minutes, depending on the size and complexity of your roof." }
        ],
        'gutter-services': [
            { question: `How often should gutters be cleaned in ${city}?`, answer: `In ${city}, it's best to have your gutters cleaned at least twice a year: once in the spring to clear out winter debris and once in the fall after most leaves have come down.` },
            { question: "What are the signs that I need new gutters?", answer: "Look for visible cracks or rust, gutters pulling away from the house, water marks on your siding, or pooling water around your foundation after it rains. These are all signs that your gutters are failing." },
            { question: "Are seamless gutters really better than sectional gutters?", answer: "Yes. Seamless gutters are custom-made for your home from a single piece of aluminum. This eliminates the seams (joints) which are the most common points of failure and leaks in traditional sectional gutters." },
            { question: "Do gutter guards actually work?", answer: "High-quality gutter guards are very effective at keeping out leaves and large debris, which significantly reduces the need for frequent cleaning. However, no system is completely maintenance-free, and they may still require occasional clearing of fine sediment." },
            { question: `How much does it cost to install new gutters in ${city}?`, answer: `For an average-sized home in ${city}, new seamless aluminum gutter installation typically costs between $1,000 and $3,000. The final price depends on the total linear footage and complexity of your home's roofline.` }
        ],
        'metal-roofing': [
            { question: `Is a metal roof a good investment in ${city}?`, answer: `Absolutely. Metal roofs are extremely durable, fire-resistant, and can withstand high winds. They are also energy-efficient, reflecting solar heat to keep your home cooler and lower energy bills, making them a smart long-term investment for the ${city} climate.` },
            { question: "How long does a metal roof last?", answer: "A professionally installed metal roof can last 50 years or even longer, which is two to three times the lifespan of a typical asphalt shingle roof. They require very little maintenance." },
            { question: `Is a metal roof noisy when it rains?`, answer: `This is a common myth. When installed over a solid roof deck with proper insulation, a metal roof is no noisier during a rainstorm than a shingle roof.` },
            { question: "Can you install a metal roof over existing shingles?", answer: "In some cases, yes, which can save on labor costs for tearing off the old roof. However, a full tear-off is often recommended to allow for inspection of the underlying roof deck for any damage." },
            { question: `How much more does a metal roof cost than shingles?`, answer: `Initially, a metal roof can cost two to three times more than an asphalt shingle roof. However, its long lifespan, durability, and energy savings often make it a more cost-effective choice over the life of your home.` }
        ],
        'new-roof-installation': [
            { question: `What is the process for a new roof installation in ${city}?`, answer: `The process in ${city} typically involves a site assessment, material selection, tear-off of any existing structure (if applicable), decking inspection, installation of underlayment and new roofing material, and a final cleanup. A professional will handle all necessary permits.` },
            { question: `How long does a new roof installation take?`, answer: `For a new construction project, the roofing phase for an average-sized home can take between 2 to 5 days, depending on the complexity, materials used, and weather conditions in ${city}.` },
            { question: `What materials are best for a new roof in ${city}?`, answer: `The best materials depend on your budget, desired aesthetic, and local climate. Asphalt shingles are a popular and cost-effective choice. Metal roofing offers superior durability and energy efficiency, which is great for ${city}'s weather. Our network pros can walk you through the options.` },
            { question: `Do I need a permit for a new roof installation in ${city}?`, answer: `Yes, in almost all cases, a building permit is required for a new roof installation in ${city}. The professional contractor you hire will be responsible for securing the permit and ensuring the installation meets all local building codes.` },
        ],
        'asphalt-shingle-roofing': [
            { question: `What are the advantages of asphalt shingles in ${city}?`, answer: `Asphalt shingles are popular in ${city} because they offer a great balance of affordability, durability, and style. They come in a wide variety of colors and designs, are easy to repair, and can last for 20-30 years with proper maintenance.` },
            { question: `What is the difference between 3-tab and architectural shingles?`, answer: `3-tab shingles are flat, single-layer shingles that provide a basic, uniform look. Architectural (or dimensional) shingles are thicker, multi-layered, and create a more textured, high-end appearance. They are also more durable and often come with longer warranties.` },
            { question: `How do I know when my asphalt shingles need replacing?`, answer: `Look for shingles that are cracking, curling at the edges, or have significant granule loss (you'll see a lot of black sand-like material in your gutters). An inspection can determine if you need a full replacement or just a repair.` },
            { question: `Can you install asphalt shingles in any weather in ${city}?`, answer: `Roofers avoid installing shingles in extreme cold, as the shingles can become brittle and their sealant strips won't activate properly. They also avoid installation during rain. The pros in ${city} will schedule work during appropriate weather conditions.` },
        ],
        'roof-vent-installation': [
            { question: `Why is attic ventilation important in ${city}?`, answer: `Proper ventilation in ${city} helps regulate your attic's temperature. In summer, it expels hot air, reducing the load on your AC. In winter, it prevents warm, moist air from causing condensation and mold. It is crucial for both energy efficiency and the longevity of your roof structure.` },
            { question: `What are the different types of roof vents?`, answer: `There are several types, including ridge vents (along the peak), soffit vents (for intake), gable vents, and powered or solar-powered vents. A professional can determine the best combination for a balanced system for your home.` },
            { question: `Can adding more vents lower my energy bills?`, answer: `Yes, if your attic is currently under-ventilated. By reducing heat buildup in the summer and moisture in the winter, a properly balanced ventilation system can make your home more comfortable and reduce HVAC costs.` },
            { question: `How much does it cost to install a roof vent in ${city}?`, answer: `The cost can vary widely depending on the type of vent and the complexity of the installation. A simple static vent might cost a few hundred dollars, while a solar-powered vent could be more. A contractor can provide a specific quote after an assessment.` },
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
    { name: `${location.city}, ${location.stateCode}`, href: `/${location.slug}/` },
    { name: service.name, href: `/${location.slug}/${service.slug}/` }
  ];

  const serviceSubheading = `Your trusted local connection for professional ${service.name.toLowerCase()} services in ${location.city}. We connect you with top-rated, licensed contractors ready to provide a free, no-obligation estimate.`;

  return (
    <div className="pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(location, service)) }}
      />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.map((c, i) => ({ name: c.name, item: `${fullUrl}${c.href}` })))) }}
      />
      <Hero 
        h1={`${service.name} in ${location.city}`}
        subheading={serviceSubheading}
        size="small"
        showButtons={false}
        variant="solid"
      />
      <CitySpecificSection location={location} service={service} />
      <ServiceProcess serviceSlug={service.slug} />
      <Services title={`Other Services in ${location.city}`} locationSlug={location.slug} excludeSlug={service.slug} />
      <Faq faqs={faqs} />
      <Testimonials location={location} service={service} />
      <Contact />
      <NearbyLocations currentLocation={location} service={service} />
      <StickyCTA />
    </div>
  );
}

    
    
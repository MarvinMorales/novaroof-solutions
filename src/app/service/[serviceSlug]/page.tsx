import { Metadata } from 'next';
import { getServiceBySlug, services } from '@/lib/locations';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/hero';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { Services } from '@/components/sections/services';
import { ServiceProcess } from '@/components/sections/service-process';
import { StickyCTA } from '@/components/layout/sticky-cta';
import { Testimonials } from '@/components/sections/testimonials';

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { serviceSlug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.serviceSlug);

  if (!service) {
    return {
      title: 'Page Not Found',
      description: 'The requested page does not exist.'
    };
  }

  const title = `${service.title} | NovaRoof Solutions`;
  const description = service.description.replace(' in {city}, {state}', '');
  const canonicalUrl = `/service/${service.slug}/`;

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
          alt: `${service.title}`,
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

const getFaqs = (serviceSlug: string) => {
    const allFaqs = {
        'roof-repair': [
            { question: `How much does a roof repair cost?`, answer: `A minor roof repair like replacing a few wind-damaged shingles might cost between $300 and $700. A more moderate repair, such as fixing a leak around a chimney, could range from $600 to $1,500. The final cost depends on your roof's material and the extent of the damage.` },
            { question: `Should I repair my roof or get a full replacement?`, answer: `This depends on age and damage. If your roof is under 15 years old and damage is localized, a repair is usually best. If it's over 20 years old with multiple leaks or widespread damage, a replacement is a smarter long-term investment.` },
            { question: `How can I tell if my roof has hail damage after a storm?`, answer: `Look for dents on gutters and downspouts. On asphalt shingles, hail leaves 'bruises' or dark spots where granules are knocked off. It's often hard to see from the ground, so a professional inspection is recommended.` },
            { question: "How long does a typical roof repair take?", answer: "Most minor to moderate roof repairs can be completed in just a few hours. More complex repairs might take a full day. The contractor will give you a precise timeline with your free estimate." },
            { question: "What happens if the roofer finds more damage during the repair?", answer: "If a roofer uncovers a larger issue (like rotted decking under the shingles), they will stop, show you the problem, and provide a clear change order or updated quote for the additional work. No surprise charges." }
        ],
        'roof-replacement': [
            { question: `How long does a full roof replacement take?`, answer: `For an average-sized home, a complete roof replacement is typically finished in 1 to 3 days, depending on the roof's size, complexity, and weather conditions.` },
            { question: "How do I know if I need a replacement or just a repair?", answer: "Key signs for a replacement include a roof over 20 years old, widespread cracked or curling shingles, significant granule loss in gutters, and persistent leaks in multiple areas." },
            { question: `How much does a new roof cost?`, answer: `A new roof can range from $8,000 to $20,000+ for a standard asphalt shingle roof. Costs vary based on home size, material choice (asphalt, metal, tile), and job complexity. A free, on-site estimate is the only way to get an accurate price.` },
            { question: "Does a new roof come with a warranty?", answer: "Yes. All new roofs installed by contractors in our network come with two warranties: a manufacturer's warranty on the materials (often 25-50 years) and a workmanship warranty from the contractor that covers the installation." },
            { question: "Will a new roof increase my home's value?", answer: "Absolutely. A new roof is one of the single best home improvement projects for return on investment (ROI). It enhances curb appeal, improves energy efficiency, and gives potential buyers peace of mind." }
        ],
        'emergency-roof-repair': [
            { question: `How quickly can a roofer get to my house for an emergency?`, answer: `Our goal is to connect you with a local roofer within minutes. For active emergencies like a severe leak, a contractor can often be at your property within 1-3 hours to perform temporary repairs like tarping.` },
            { question: "What constitutes a roofing emergency?", answer: "Any situation that immediately endangers your property. This includes major leaks, structural damage from fallen trees, or extensive shingle loss from high winds that exposes your home's interior." },
            { question: "Will my insurance cover emergency roof repairs?", answer: "Most homeowner's insurance policies cover temporary, emergency repairs required to prevent further damage (this is called 'mitigating damages'), such as tarping. The licensed contractors in our network can provide the necessary documentation for your claim." },
            { question: "What should I do while waiting for the emergency roofer?", answer: "If it is safe to do so, place buckets under any active leaks to protect your floors and furniture. Move any valuable items out of the affected area. Do not climb on the roof yourself, especially during a storm." },
            { question: "Is the emergency tarping a permanent fix?", answer: "No. Tarping is a crucial but temporary measure designed to prevent further water damage until a permanent, professional repair can be scheduled and completed safely in good weather." }
        ],
        'storm-damage-roof': [
            { question: `Do you help with insurance claims for storm damage?`, answer: `Yes. The roofing contractors in our network are experienced in documenting storm damage for insurance purposes. They provide the detailed reports and photos that insurers require to help your claim go smoothly.` },
            { question: "Should I get my roof inspected even if I don't see leaks after a storm?", answer: "Yes, it's highly recommended. Hail and wind can cause hidden damage that compromises shingles but doesn't cause an immediate leak. This hidden damage can lead to major problems months or years later. A post-storm inspection is a crucial preventative measure." },
            { question: `What is the time limit for filing a storm damage claim?`, answer: `Insurance policies typically have a time limit for filing a claim, often 6 months to 2 years. It is crucial to act quickly. We connect you with roofers who can provide a fast inspection so you can start the process within your policy's deadline.` },
            { question: "How can I tell if I have wind damage on my roof?", answer: "From the ground, look for missing shingles on the roof or in your yard. You might also see shingles that are lifted, creased, or folded back. A professional inspection is the safest way to assess the full extent of the damage." },
            { question: "What if my insurance company's estimate is lower than the contractor's?", answer: "This is common. An experienced storm damage contractor can submit a supplement to the insurance company with detailed evidence and cost breakdowns to argue for the additional funds needed to complete the repair correctly according to local building codes." }
        ],
        'roof-leak-repair': [
            { question: `Is a small, slow roof leak a big deal?`, answer: `Yes. Even a small leak can lead to major problems like rotted wood framing, saturated insulation, and dangerous mold growth over time. Addressing any leak quickly is always best.` },
            { question: "Can you fix a leak without replacing my whole roof?", answer: "Absolutely. In most cases, leaks can be isolated and permanently repaired. This might involve replacing specific shingles, fixing flashing around chimneys or vents, or sealing pipe collars. A full replacement is usually only for very old or systematically damaged roofs." },
            { question: `How can I tell where a roof leak is coming from?`, answer: `It's tricky, as water travels. The water stain on your ceiling may be far from the actual entry point on the roof. Our network pros use techniques like water testing and thermal imaging to pinpoint the exact source of the leak, ensuring a complete and reliable repair.` },
            { question: "What are the most common causes of roof leaks?", answer: "The most common culprits are damaged or improperly installed flashing around chimneys and vents, old and cracked pipe boot seals, missing or damaged shingles, and ice dams in colder climates." },
            { question: `How much does it cost to fix a roof leak?`, answer: `A minor leak repair can cost between $300 - $700. A more complex leak that requires replacing flashing or some underlying wood could cost $800 - $2,000+. The contractor will provide a precise quote after inspection.` }
        ],
        'roof-inspection': [
            { question: `How often should I get my roof inspected?`, answer: `It is recommended to get a professional roof inspection at least once every 1-2 years, and always after a major storm involving high winds or hail.` },
            { question: "Is a roof inspection free?", answer: "Yes, the roofing contractors in our network provide a comprehensive roof inspection along with a no-obligation quote for any necessary repairs, completely free of charge." },
            { question: "Can a professional roof inspection save me money?", answer: "Definitely. An inspection can catch small, inexpensive problems like a cracked pipe boot or a few loose shingles before they turn into a major leak that causes thousands of dollars in water damage to your home's interior." },
            { question: "What's included in a roof inspection report?", answer: "You will receive a detailed report, often with photos, that outlines the overall condition of your roof, its estimated remaining lifespan, the condition of flashing and seals, and a clear list of any recommended repairs or maintenance." },
            { question: "How long does a roof inspection take?", answer: "A thorough, professional roof inspection typically takes between 30 to 60 minutes, depending on the size and complexity of your roof." }
        ],
        'gutter-services': [
            { question: `How often should gutters be cleaned?`, answer: `It's best to have your gutters cleaned at least twice a year: once in the spring to clear out winter debris and once in the fall after most leaves have come down.` },
            { question: "What are the signs that I need new gutters?", answer: "Look for visible cracks or rust, gutters pulling away from the house, water marks on your siding, or pooling water around your foundation after it rains. These are all signs that your gutters are failing." },
            { question: "Are seamless gutters really better than sectional gutters?", answer: "Yes. Seamless gutters are custom-made for your home from a single piece of aluminum. This eliminates the seams (joints) which are the most common points of failure and leaks in traditional sectional gutters." },
            { question: "Do gutter guards actually work?", answer: "High-quality gutter guards are very effective at keeping out leaves and large debris, which significantly reduces the need for frequent cleaning. However, no system is completely maintenance-free, and they may still require occasional clearing of fine sediment." },
            { question: `How much does it cost to install new gutters?`, answer: `For an average-sized home, new seamless aluminum gutter installation typically costs between $1,000 and $3,000. The final price depends on the total linear footage and complexity of your home's roofline.` }
        ]
    };
    return allFaqs[serviceSlug as keyof typeof allFaqs] || [];
};

export default function Page({ params }: { params: { serviceSlug: string } }) {
  const service = getServiceBySlug(params.serviceSlug);

  if (!service) {
    notFound();
  }

  const faqs = getFaqs(service.slug);

  const serviceSubheading = `Your trusted connection for professional ${service.name.toLowerCase()} services. We connect you with top-rated, licensed contractors ready to provide a free, no-obligation estimate.`;

  return (
    <div className="pb-24">
      <Hero 
        h1={service.name}
        subheading={serviceSubheading}
        size="small"
        showButtons={false}
        variant="solid"
      />
      <ServiceProcess serviceSlug={service.slug} />
      <Services title={`Other Roofing Services`} excludeSlug={service.slug} />
      <Faq faqs={faqs} />
      <Testimonials />
      <Contact />
      <StickyCTA />
    </div>
  );
}

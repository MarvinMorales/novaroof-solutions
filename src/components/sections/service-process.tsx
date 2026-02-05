import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

type ProcessStep = {
  step: number;
  title: string;
  description: string;
  imageId: string;
};

const processData: Record<string, { title: string, intro: string, steps: ProcessStep[] }> = {
  'roof-replacement': {
    title: 'The Roof Replacement Process: A Step-by-Step Guide',
    intro: 'A full roof replacement is a major project, but our network of qualified professionals follows a proven process to ensure it\'s done efficiently, safely, and with minimal disruption to your life. Here’s what you can expect when you hire a pro through NovaRoof Solutions.',
    steps: [
      {
        step: 1,
        title: 'Site Preparation & Old Roof Tear-Off',
        description: 'The first step is protecting your property. Crews will cover your landscaping, siding, and windows with heavy-duty tarps. Then, the messy part begins: the complete removal of all old shingles, underlayment, and nails down to the bare wood decking. This is crucial to allow for a thorough inspection of the roof\'s foundation.',
        imageId: 'process-tear-off',
      },
      {
        step: 2,
        title: 'Thorough Decking Inspection',
        description: 'With the old roof gone, the contractor performs a critical inspection of the wooden roof deck (the sheathing). They will look for any soft, spongy, or rotted wood that may have been damaged by past leaks. Any compromised sections of wood are replaced to create a solid, secure foundation for your new roof.',
        imageId: 'process-deck-inspection',
      },
      {
        step: 3,
        title: 'Installing New Underlayment & Drip Edge',
        description: 'A new layer of protection is installed directly onto the decking. This is typically a synthetic roofing underlayment, which provides a powerful secondary water barrier. An ice and water shield is often applied to vulnerable areas like eaves, valleys, and around chimneys. Metal drip edge is also installed along all edges of the roof to guide water directly into the gutters.',
        imageId: 'process-underlayment',
      },
      {
        step: 4,
        title: 'New Shingle Installation',
        description: 'This is where your new roof comes to life. The crew begins laying the new shingles, starting from the bottom and working their way up. They follow a precise nailing pattern specified by the manufacturer to ensure maximum wind resistance. This is a skilled process that requires attention to detail to ensure the shingles are straight, properly overlapped, and secure.',
        imageId: 'process-shingle-install',
      },
      {
        step: 5,
        title: 'Flashing & Ventilation Installation',
        description: 'To prevent leaks, new flashing is installed around all roof penetrations, such as chimneys, vents, and skylights. This is one of the most critical steps for long-term water protection. Proper ventilation components, like ridge vents, are also installed to allow your attic to breathe, which helps regulate temperature and prevent moisture buildup.',
        imageId: 'process-flashing-install',
      },
      {
        step: 6,
        title: 'Final Cleanup & Inspection',
        description: 'A quality contractor leaves your property cleaner than they found it. Crews perform a meticulous cleanup, removing all debris from your yard and gutters. They often use large, rolling magnets to find any stray nails. A final inspection of the new roof is conducted to ensure every detail meets the highest standards.',
        imageId: 'process-final-cleanup',
      },
    ],
  },
  'roof-repair': {
    title: 'The Roof Repair Process: Targeted and Efficient',
    intro: 'A roof repair is a precise operation designed to address specific issues without replacing the entire roof. The professionals in our network follow a clear process to ensure your problem is fixed correctly, extending the life of your roof and preventing future damage.',
    steps: [
      {
        step: 1,
        title: 'Initial Inspection & Assessment',
        description: 'The process begins with a thorough inspection. A roofer will examine the exterior and interior of your home to pinpoint the exact source and extent of the damage, whether it\'s a few missing shingles, damaged flashing, or a hard-to-find leak.',
        imageId: 'process-repair-inspection',
      },
      {
        step: 2,
        title: 'Damage Analysis & Clear Quote',
        description: 'Once the problem is identified, the contractor will explain the issue to you in clear terms. You will receive a detailed, upfront quote that outlines the scope of work, materials required for the repair, and the total cost. There are no hidden fees.',
        imageId: 'process-repair-assessment',
      },
      {
        step: 3,
        title: 'Precise Repair Execution',
        description: 'The repair work begins. This could involve replacing damaged shingles, resealing or replacing faulty flashing around chimneys or vents, or applying professional-grade sealant to fix a puncture. The goal is to integrate the repair seamlessly with your existing roof.',
        imageId: 'process-repair-execution',
      },
      {
        step: 4,
        title: 'Final Check & Site Cleanup',
        description: 'After the repair is complete, the contractor performs a final quality check to ensure the fix is secure and weatherproof. They will also clean up any debris from the work, leaving your property as clean as they found it.',
        imageId: 'process-repair-final-check',
      },
    ],
  },
    'emergency-roof-repair': {
    title: 'The Emergency Storm Damage Process: Your First Response',
    intro: 'When a storm hits, speed and expertise are critical. Our network is designed for rapid response to secure your home and guide you through the restoration process. Here’s what you can expect in a roofing emergency.',
    steps: [
      {
        step: 1,
        title: 'Immediate Tarping & Damage Mitigation',
        description: 'The first priority is to stop the water. An emergency crew will be dispatched to your home to cover the damaged areas of your roof with heavy-duty tarps, preventing further water intrusion and protecting your home\'s interior from costly damage.',
        imageId: 'process-storm-tarping',
      },
      {
        step: 2,
        title: 'Thorough Damage Documentation',
        description: 'Once the home is secure, the contractor will conduct a detailed inspection of the entire roof, documenting all wind, hail, or debris damage with photos and notes. This documentation is crucial for your insurance claim.',
        imageId: 'process-storm-documentation',
      },
      {
        step: 3,
        title: 'Insurance Claim Assistance',
        description: 'The roofing professionals in our network are experts at dealing with insurance companies. They can help you file your claim, meet with the adjuster on-site to point out all the damage, and ensure the scope of work is approved correctly.',
        imageId: 'process-storm-insurance-meet',
      },
      {
        step: 4,
        title: 'Complete & Professional Restoration',
        description: 'After the insurance claim is approved, the crew will perform a full, professional repair or replacement as required. They will use high-quality, wind-resistant materials to restore your roof to a condition that is often better and stronger than it was before the storm.',
        imageId: 'process-storm-full-repair',
      },
    ],
  },
  'roof-inspection': {
    title: 'The Professional Roof Inspection Process: A Comprehensive Check-up',
    intro: 'A roof inspection is like a physical for your home, providing a detailed assessment of its condition. The qualified inspectors in our network use a systematic approach to uncover hidden issues before they become expensive problems.',
    steps: [
      {
        step: 1,
        title: 'Ground-Level & Exterior Examination',
        description: 'The inspection starts on the ground. The inspector checks for signs of damage on your siding and eaves, examines your gutters for blockages and shingle granules, and assesses the overall ventilation system from below.',
        imageId: 'process-inspection-exterior',
      },
      {
        step: 2,
        title: 'On-Roof, Hands-On Assessment',
        description: 'The inspector will safely access your roof to perform a hands-on check. They will examine the condition of the shingles (looking for cracks, blisters, or curling), inspect all flashing, seals around vents and pipes, and check for any signs of weakness.',
        imageId: 'process-inspection-roof-walk',
      },
      {
        step: 3,
        title: 'Interior & Attic Check',
        description: 'One of the most critical steps is checking the interior. The inspector will enter your attic to look for signs of water intrusion, moisture, mold, rot, or inadequate ventilation that are invisible from the outside.',
        imageId: 'process-inspection-attic',
      },
      {
        step: 4,
        title: 'Detailed Report & Recommendations',
        description: 'You will receive a comprehensive report, complete with photos, that details the inspector\'s findings. The report will outline the roof\'s current condition, remaining lifespan, and provide clear recommendations for any necessary repairs or maintenance.',
        imageId: 'process-inspection-report',
      },
    ],
  },
  'gutter-services': {
    title: 'The Gutter Service Process: Protecting Your Foundation',
    intro: 'Gutters are a critical part of your roofing system, channeling thousands of gallons of water away from your home. Our network pros follow a clear process for cleaning, repairing, and installing gutters to protect your foundation and siding.',
    steps: [
      {
        step: 1,
        title: 'Gutter & Downspout Cleaning',
        description: 'The service begins with a complete cleaning. All leaves, shingle grit, sticks, and other debris are removed by hand from every section of your gutters. Downspouts are then flushed to ensure there are no hidden blockages causing backups.',
        imageId: 'process-gutter-cleaning',
      },
      {
        step: 2,
        title: 'Inspection & Minor Repairs',
        description: 'As they clean, the crew inspects for problems. This includes checking for leaky seams, loose or sagging sections, and improper slope. Minor repairs, like re-sealing corners or re-fastening hangers, can often be done on the spot.',
        imageId: 'process-gutter-repair',
      },
      {
        step: 3,
        title: 'New Gutter Installation (If Needed)',
        description: 'For old or damaged systems, we connect you with pros for seamless gutter installation. Custom-fit to your home on-site, seamless gutters have no joints, which means no leaks and a clean, professional look.',
        imageId: 'process-gutter-installation',
      },
      {
        step: 4,
        title: 'Gutter Guard Installation',
        description: 'To prevent future clogs, consider installing gutter guards. The pros in our network can recommend and install high-quality mesh or screen systems that keep debris out while allowing water to flow freely, saving you from future cleaning hassles.',
        imageId: 'process-gutter-guards',
      },
    ],
  },
};

processData['roof-leak-repair'] = processData['roof-repair'];
processData['storm-damage-roof'] = processData['emergency-roof-repair'];

export function ServiceProcess({ serviceSlug }: { serviceSlug: string }) {
  const data = processData[serviceSlug];

  if (!data) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {data.intro}
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {data.steps.map((item, index) => {
            const image = getImage(item.imageId);
            const isReversed = index % 2 !== 0;
            return (
              <div key={item.step} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={isReversed ? 'lg:order-2' : ''}>
                  {image && (
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
                <div className={isReversed ? 'lg:order-1' : ''}>
                  <Badge variant="secondary" className="mb-2">Step {item.step}</Badge>
                  <h3 className="font-headline text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-base">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
};

export function ServiceProcess({ serviceSlug }: { serviceSlug: string }) {
  const data = processData[serviceSlug];

  if (!data) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
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
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg object-cover aspect-[4/3]"
                    />
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

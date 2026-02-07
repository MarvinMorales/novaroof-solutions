import { Phone, Search, Wrench } from 'lucide-react';

const steps = [
  {
    icon: <Phone className="h-10 w-10" />,
    title: '1. Call Us 24/7',
    description: 'Tell us about your roofing problem. We are available any time, day or night.'
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: '2. Get a Free Inspection',
    description: 'We dispatch a local, vetted pro to provide a free, on-site inspection and a no-obligation quote.'
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: '3. Get Your Roof Fixed',
    description: 'If you approve the quote, your contractor will schedule and complete the work, protecting your home.'
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Get Help in 3 Simple Steps</h2>
          <p className="mt-4 text-muted-foreground">Our process is designed to be fast, simple, and stress-free.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.title} className="text-center flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

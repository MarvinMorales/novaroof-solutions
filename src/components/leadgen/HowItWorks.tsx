import { Phone, User, Wrench } from 'lucide-react';

const steps = [
  {
    icon: <Phone className="h-10 w-10 text-primary" />,
    title: '1. Call Us 24/7',
    description: 'Tell us about your roofing problem. We are available any time, day or night.'
  },
  {
    icon: <User className="h-10 w-10 text-primary" />,
    title: '2. Describe Your Issue',
    description: 'Provide details about your needs, and we will instantly connect you.'
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: '3. Connect to a Pro',
    description: 'We connect you directly to a local, vetted roofer ready to provide a quote.'
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">Get Help in 3 Simple Steps</h2>
          <p className="mt-4 text-lg text-muted-foreground">Our process is designed to be fast, simple, and stress-free.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.title} className="text-center flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

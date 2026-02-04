import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About USA Roof Pros',
  description: 'Learn how USA Roof Pros connects homeowners with top-rated, licensed, and insured roofing contractors across the United States.',
};

const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-team');

const values = [
  {
    title: 'Verified Professionals',
    description: 'Every roofer in our network is licensed, insured, and has a proven track record of quality workmanship.'
  },
  {
    title: 'Speed and Efficiency',
    description: 'We quickly connect you with available contractors in your area, which is critical during roofing emergencies.'
  },
  {
    title: 'Total Transparency',
    description: 'We believe in a clear and honest process. Get free, no-obligation quotes so you can make informed decisions.'
  },
  {
    title: 'Customer Focus',
    description: 'Our goal is to make the process of finding a trustworthy roofer as simple and stress-free as possible for homeowners.'
  }
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="container py-16 md:py-24 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">About USA Roof Pros</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Connecting homeowners with America's most trusted roofing professionals.
        </p>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              Finding a reliable roofing contractor can be stressful, especially when you have a leak or storm damage. USA Roof Pros was founded to solve this problem. We are not a roofing company; we are a marketing and referral service dedicated to making it easy for homeowners to connect with pre-screened, high-quality local roofers.
            </p>
            <p className="text-muted-foreground">
              Our extensive network of licensed and insured contractors ensures that no matter where you are, you can quickly get a quote from a qualified professional you can trust. We do the vetting so you don't have to.
            </p>
            <h2 className="font-headline text-3xl font-semibold mt-8">How We Help</h2>
             <p className="text-muted-foreground">
              We bridge the gap between homeowners in need and skilled roofers ready to help. From minor repairs to full replacements and emergency services, our platform simplifies the process, providing peace of mind and ensuring your home is protected by the best in the business.
            </p>
          </div>
          <div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-cover aspect-[4/3]"
              />
            )}
          </div>
        </div>
      </section>
      
      <section className="bg-card">
        <div className="container py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Core Principles</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide our service and our network.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

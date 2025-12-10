import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the history, mission, and expert team behind NovaRoof Solutions LLC, your trusted partner in roofing solutions.',
};

const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-team');

const values = [
  {
    title: 'Unsurpassed Quality',
    description: 'We use only the best materials and the most advanced techniques to ensure a durable and long-lasting roof.'
  },
  {
    title: 'Integrity and Honesty',
    description: 'We believe in total transparency. We offer fair prices, clear estimates, and honest communication at every step.'
  },
  {
    title: 'Safety First',
    description: 'We adhere to the highest safety standards to protect our team, your family, and your property throughout the project.'
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our top priority. We don\'t consider a job finished until you are 100% satisfied with the result.'
  }
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="container py-16 md:py-24 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">About NovaRoof Solutions LLC</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Building trust from the top, one roof at a time.
        </p>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-semibold">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2010, NovaRoof Solutions LLC was born from the vision of a roofing industry veteran with over 20 years of experience. Tired of seeing homeowners deal with poor workmanship and a lack of professionalism, our founder set out to create a company that put integrity, quality, and customer satisfaction above all else.
            </p>
            <p className="text-muted-foreground">
              We started as a small, dedicated team, and thanks to our reputation for excellence and customer referrals, we have grown into one of the most respected roofing contractors in the region.
            </p>
            <h2 className="font-headline text-3xl font-semibold mt-8">Our Mission</h2>
            <p className="text-muted-foreground">
              Our mission is simple: to provide every customer with a superior roofing solution that protects their most important investment—their home. We strive to deliver an exceptional experience from the initial consultation to the final cleanup, ensuring peace of mind and a result that exceeds expectations.
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide every project we undertake.
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

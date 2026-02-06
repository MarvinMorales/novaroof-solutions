import { Metadata } from 'next';
import { getLocationBySlug, locations } from '@/lib/locations';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/hero';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { generateOrganizationSchema } from '@/lib/schema';
import { Testimonials } from '@/components/sections/testimonials';
import { Services } from '@/components/sections/services';
import { type BreadcrumbLink } from '@/components/layout/breadcrumbs';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  return locations.map((location) => ({
    locationSlug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: { locationSlug: string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.locationSlug);

  if (!location) {
    return {
      title: 'Location Not Found',
      description: 'The requested location is not served.'
    };
  }

  const title = `Top Roofing Services in ${location.city}, ${location.stateCode} | NovaRoof Solutions`;
  const description = `Get fast, free quotes from licensed roofing contractors in ${location.city} for roof repair, replacement, and storm damage. NovaRoof Solutions connects you with trusted local pros.`;
  const canonicalUrl = `/${location.slug}/`;

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
          url: 'https://picsum.photos/seed/og-house/1200/630',
          width: 1200,
          height: 630,
          alt: `Roofing services in ${location.city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://picsum.photos/seed/og-house/1200/630'],
    },
  };
}

export default function Page({ params }: { params: { locationSlug: string } }) {
  const location = getLocationBySlug(params.locationSlug);

  if (!location) {
    notFound();
  }

  const fullUrl = `https://www.novaroofsolutions.com`;

  const breadcrumbs: BreadcrumbLink[] = [
    { name: "Home", href: "/" },
    { name: `${location.city}, ${location.stateCode}`, href: `/${location.slug}/` }
  ];

  const faqs = [
    {
      question: `How much does a new roof typically cost in ${location.city}?`,
      answer: `Roofing costs in ${location.city} vary based on the home's size, the materials chosen (like asphalt shingles vs. metal), and the complexity of the job. The best way to know for sure is to get a free, detailed estimate from a local professional.`
    },
    {
      question: `Do I need a permit for roof repairs in ${location.city}?`,
      answer: `It depends on the scope of work. Minor repairs often don't require a permit, but larger projects like a full replacement almost always do. A qualified local contractor will handle all necessary permits with the ${location.city} building department.`
    },
    {
      question: `How long does a typical roof last in ${location.state}'s climate?`,
      answer: `A standard asphalt shingle roof can last 15-25 years in ${location.state}'s climate, but this can be shortened by factors like severe hail, high winds, or intense sun exposure. Metal roofs can last 50 years or more.`
    },
    {
      question: `Can you help with insurance claims after a storm in ${location.city}?`,
      answer: `Yes. Many of the contractors in our network are experienced in storm damage restoration and can provide detailed documentation for your insurance company. They can often meet with the adjuster to ensure all damage is covered.`
    },
    {
      question: `What are the best roofing materials for dealing with ${location.commonRisks[0]} in ${location.city}?`,
      answer: `To combat ${location.commonRisks[0]}, many ${location.city} homeowners opt for impact-resistant shingles (Class 4) or durable metal roofing. These materials offer superior protection and can sometimes lead to discounts on your homeowner's insurance.`
    }
  ];
  
  const trustPoints = [
    `Every roofer is verified to be licensed and insured in ${location.state}.`,
    "We specialize in finding pros with deep knowledge of local building codes.",
    "Our network pros have a proven track record of quality work in the area.",
    "Get a fast response for emergency repairs after local storm events."
  ];

  return (
    <>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.map((c) => ({ name: c.name, item: `${fullUrl}${c.href}` })))) }}
      />
      <Hero 
        h1={`Top-Rated Roofing Contractors in ${location.city}, ${location.stateCode}`}
        subheading={`We connect homeowners in ${location.city} with elite, licensed, and insured roofing professionals for repairs, replacements, and storm damage. Get a fast, free, no-obligation quote today.`}
      />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter">Your Local Roofing Experts in {location.city}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Navigating the challenges of {location.state}'s climate requires more than just a standard roof; it demands local expertise. {location.city} experiences a unique combination of {location.climate}, with significant risks from {location.commonRisks.join(", ")}. These conditions can wreak havoc on traditional roofing materials, leading to premature aging, sudden leaks, and costly repairs. An average roof might not be equipped to handle the specific stresses of this environment, from the intense summer sun to the sudden, violent storms that can roll through.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                        That’s why finding a contractor who truly understands these local challenges is non-negotiable. The professionals in the NovaRoof Solutions network are seasoned veterans of the {location.city} area. They aren't just installers; they are consultants who can recommend the right materials and techniques—whether it's impact-resistant shingles to stand up to hail, reflective materials to lower energy costs, or fortified installation methods for high-wind zones. We bridge the gap, ensuring you're connected with a pro who is equipped to protect your home specifically for the long haul in {location.city}.
                    </p>
                </div>
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>Why Homeowners in {location.city} Trust NovaRoof</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {trustPoints.map((point, index) => (
                           <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <p className="text-muted-foreground">{point}</p>
                           </div>
                        ))}
                         <div className="pt-4">
                             <Button asChild className="w-full" size="lg">
                                <Link href="#contact">Get My Free Quote</Link>
                             </Button>
                         </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <Services locationSlug={location.slug} title={`Roofing Services in ${location.city}`} />
      <Testimonials location={location} />
      <Faq faqs={faqs} />
      <Contact />
    </>
  );
}

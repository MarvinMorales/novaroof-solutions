import type { Metadata } from 'next';

const pageTitle = 'Terms of Service';
const pageDescription = 'Read the terms and conditions for using the USA Roof Pros website.';
const ogImageUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmb3JtJTIwaG91c2V8ZW58MHx8fHwxNzE3NzgwNTM2fDA&ixlib=rb-4.1.0&q=80&w=1200';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: '/terms-of-service',
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-muted/40">
      <div className="container py-16 md:py-24">
        <article className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-md">
            <header className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Terms of Service</h1>
                <p className="mt-3 text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </header>

            <div className="space-y-6 text-muted-foreground text-base md:text-lg">
                <div className="space-y-4 pt-6">
                    <h2 className="font-headline text-2xl font-semibold border-b pb-2 text-foreground">1. Agreement to Terms</h2>
                    <p>
                    These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and USA Roof Pros (“Company”, “we”, “us”, or “our”), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                    </p>
                    <p>
                    We are a roofing marketing and referral service. We do not provide roofing services ourselves. We connect homeowners with licensed and insured third-party roofing contractors.
                    </p>
                    <p>
                    You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </p>
                </div>

                <div className="space-y-4 pt-6">
                    <h2 className="font-headline text-2xl font-semibold border-b pb-2 text-foreground">2. Our Services</h2>
                    <p>
                    Our Site provides a platform where you can request to be connected with roofing contractors. We do not endorse any specific contractor, nor do we guarantee the quality of their work. Any contractual agreement for roofing work is strictly between you and the contractor. We are not a party to that agreement.
                    </p>
                </div>

                <div className="space-y-4 pt-6">
                    <h2 className="font-headline text-2xl font-semibold border-b pb-2 text-foreground">3. Intellectual Property</h2>
                    <p>
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>
                </div>
                
                <div className="space-y-4 pt-6">
                    <h2 className="font-headline text-2xl font-semibold border-b pb-2 text-foreground">4. Governing Law</h2>
                    <p>
                    These Terms shall be governed by and defined following the laws of the United States.
                    </p>
                </div>
                
                <div className="space-y-4 pt-6">
                    <h2 className="font-headline text-2xl font-semibold border-b pb-2 text-foreground">5. Contact Us</h2>
                    <p>
                    In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                    </p>
                     <ul className="list-disc list-outside pl-5 space-y-2">
                        <li>By email: <a href="mailto:contact@usaroofpros.com" className="text-primary hover:underline">contact@usaroofpros.com</a></li>
                    </ul>
                </div>
            </div>
        </article>
      </div>
    </div>
  );
}

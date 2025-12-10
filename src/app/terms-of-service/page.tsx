import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions for using the NovaRoof Solutions LLC website.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container py-16 md:py-24">
      <article className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2 className="font-headline">1. Agreement to Terms</h2>
        <p>
          These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and NovaRoof Solutions LLC (“Company”, “we”, “us”, or “our”), concerning your access to and use of the [www.novaroof.com] website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
        </p>
        <p>
          You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>

        <h2 className="font-headline">2. Intellectual Property</h2>
        <p>
          Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
        </p>

        <h2 className="font-headline">3. User Representations</h2>
        <p>
          By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (5) you will not use the Site for any illegal or unauthorized purpose.
        </p>

        <h2 className="font-headline">4. Governing Law</h2>
        <p>
          These Terms shall be governed by and defined following the laws of the state in which NovaRoof Solutions LLC operates, without regard to its conflict of law provisions.
        </p>
        
        <h2 className="font-headline">5. Contact Us</h2>
        <p>
          In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
        </p>
        <ul>
          <li>By email: contact@novaroof.com</li>
          <li>By visiting this page on our website: /#contact</li>
        </ul>
      </article>
    </div>
  );
}

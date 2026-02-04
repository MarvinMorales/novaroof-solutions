import type { Metadata } from 'next';

const pageTitle = 'Privacy Policy';
const pageDescription = 'Learn how USA Roof Pros collects, uses, and protects your personal information.';
const ogImageUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmb3JtJTIwaG91c2V8ZW58MHx8fHwxNzE3NzgwNTM2fDA&ixlib=rb-4.1.0&q=80&w=1200';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: '/privacy-policy',
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-16 md:py-24">
      <article className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>
          USA Roof Pros ("we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
        </p>
        <p>
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>

        <h2 className="font-headline">Collection of Your Information</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>
        <h3 className="font-headline">Personal Data</h3>
        <p>
          Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you use our contact forms to be connected with a roofing contractor. We collect this information to provide our referral services.
        </p>
        
        <h2 className="font-headline">Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Connect you with licensed and insured roofing contractors in your area.</li>
          <li>Facilitate the provision of quotes for roofing services.</li>
          <li>Email you regarding your service request.</li>
          <li>Request feedback on the services provided by contractors in our network.</li>
        </ul>

        <h2 className="font-headline">Disclosure of Your Information</h2>
        <p>
         By submitting your information, you consent to us sharing it with one or more third-party roofing contractors in our network to fulfill your service request. We are a marketing and referral service; we do not perform the roofing work ourselves.
        </p>

        <h2 className="font-headline">Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>
        <h2 className="font-headline">Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <ul>
          <li>By email: contact@usaroofpros.com</li>
        </ul>
      </article>
    </div>
  );
}

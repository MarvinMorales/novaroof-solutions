import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how NovaRoof Solutions LLC collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-16 md:py-24">
      <article className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>
          NovaRoof Solutions LLC ("we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.novaroofsolutions.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
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
          Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as contact forms and newsletters.
        </p>

        <h2 className="font-headline">Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Email you regarding your account or order.</li>
          <li>Respond to your service and support requests.</li>
          <li>Request feedback and contact you about your use of the Site.</li>
          <li>Send you a newsletter.</li>
        </ul>

        <h2 className="font-headline">Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>
        <h2 className="font-headline">Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <ul>
          <li>By email: contact@novaroofsolutions.com</li>
          <li>By visiting this page on our website: /#contact</li>
        </ul>
      </article>
    </div>
  );
}

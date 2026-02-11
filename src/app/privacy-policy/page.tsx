import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Apex Roofing Solutions',
  robots: {
    index: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-20 md:py-28">
      <div className="container max-w-4xl mx-auto space-y-8 text-muted-foreground">
        <h1 className="text-4xl font-bold text-primary">Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
          <p>
            Welcome to Apex Roofing Solutions. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you fill out our contact form, such as your name, email address, phone number, and any other information you choose to provide.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">3. Use of Your Information</h2>
          <p>
            Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Respond to your service requests and inquiries.</li>
            <li>Send you emails or contact you regarding your project.</li>
            <li>Improve our website and service offerings.</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us through the form on our website or call us at our main number.
          </p>
        </div>
      </div>
    </main>
  );
}

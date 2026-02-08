import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: {
    index: true, 
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <div className="container py-16 md:py-24">
        <article className="max-w-4xl mx-auto prose">
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <p>
            This website ("we," "us," or "our") is a marketing and referral service. This Privacy Policy explains how we handle your information when you use our website.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you call the phone number listed on our website, we and our third-party call tracking partners may collect information related to that call, such as your phone number, the time and date of the call, and its duration. We use this information to connect you with local service providers and for marketing analytics.
          </p>
          
          <h2>How We Use and Share Your Information</h2>
          <p>
            The primary use of your information is to connect you with a licensed and insured roofing professional in your area. By calling the number on this site, you consent to us sharing the necessary information with one or more third-party roofing contractors in our network to fulfill your service request.
          </p>
          
          <h2>Security of Your Information</h2>
          <p>
            We take reasonable measures to help protect your information from loss, theft, misuse, and unauthorized access.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us via email at privacy@localroofingquotes.com.
          </p>
        </article>
      </div>
    </div>
  );
}

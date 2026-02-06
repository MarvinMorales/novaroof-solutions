import type { Metadata } from 'next';

const pageTitle = 'Cookie Policy';
const pageDescription = 'Information about how NovaRoof Solutions uses cookies on our website.';
const ogImageUrl = 'https://picsum.photos/seed/og-legal/1200/630';

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
    url: '/cookie-policy',
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-muted/40">
      <div className="container py-16 md:py-24">
        <article className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-md">
            <header className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Cookie Policy</h1>
                <p className="mt-3 text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </header>

            <div className="space-y-6 text-muted-foreground text-base md:text-lg">
                <p>
                  This Cookie Policy explains what cookies are and how NovaRoof Solutions ("we," "us," or "our") uses them. You should read this policy to understand what type of cookies we use, the information we collect using cookies and how that information is used.
                </p>

                <div className="space-y-4 pt-6">
                    <h2 className="font-headline text-2xl font-semibold border-b pb-2 text-foreground">What are cookies?</h2>
                    <p>
                      Cookies are small text files that are stored on your browser when you visit a website. They allow the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.
                    </p>
                </div>

                <div className="space-y-4 pt-6">
                    <h2 className="font-headline text-2xl font-semibold border-b pb-2 text-foreground">How we use cookies</h2>
                    <p>
                      We use cookies for a variety of purposes, including:
                    </p>
                    <ul className="list-disc list-outside pl-5 space-y-2">
                      <li><strong>Essential Cookies:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information.</li>
                      <li><strong>Analytics Cookies:</strong> These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit, etc. These data help us understand and analyze how well the website performs and where it needs improvement.</li>
                      <li><strong>Functionality Cookies:</strong> These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing content of the website on social media platforms.</li>
                    </ul>
                </div>

                <div className="space-y-4 pt-6">
                    <h2 className="font-headline text-2xl font-semibold border-b pb-2 text-foreground">Your choices regarding cookies</h2>
                    <p>
                      If you'd like to avoid the use of cookies on our website, you must first disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website. You may use this option for preventing the use of cookies at any time.
                    </p>
                    <p>
                      If you do not accept our cookies, you may experience some inconvenience in your use of the website and some features may not function properly.
                    </p>
                </div>

                <div className="space-y-4 pt-6">
                    <h2 className="font-headline text-2xl font-semibold border-b pb-2 text-foreground">Contact Us</h2>
                    <p>
                      If you have any questions about this Cookie Policy, you can contact us:
                    </p>
                    <ul className="list-disc list-outside pl-5 space-y-2">
                        <li>By email: <a href="mailto:contact@novaroofsolutions.com" className="text-primary hover:underline">contact@novaroofsolutions.com</a></li>
                    </ul>
                </div>
            </div>
        </article>
      </div>
    </div>
  );
}

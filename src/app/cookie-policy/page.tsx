import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Information about how USA Roof Pros uses cookies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <div className="container py-16 md:py-24">
      <article className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Cookie Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>
          This Cookie Policy explains what cookies are and how USA Roof Pros ("we," "us," or "our") uses them. You should read this policy to understand what type of cookies we use, the information we collect using cookies and how that information is used.
        </p>

        <h2 className="font-headline">What are cookies?</h2>
        <p>
          Cookies are small text files that are stored on your browser when you visit a website. They allow the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.
        </p>

        <h2 className="font-headline">How we use cookies</h2>
        <p>
          We use cookies for a variety of purposes, including:
        </p>
        <ul>
          <li><strong>Essential Cookies:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information.</li>
          <li><strong>Analytics Cookies:</strong> These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit, etc. These data help us understand and analyze how well the website performs and where it needs improvement.</li>
          <li><strong>Functionality Cookies:</strong> These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing content of the website on social media platforms.</li>
        </ul>

        <h2 className="font-headline">Your choices regarding cookies</h2>
        <p>
          If you'd like to avoid the use of cookies on our website, you must first disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website. You may use this option for preventing the use of cookies at any time.
        </p>
        <p>
          If you do not accept our cookies, you may experience some inconvenience in your use of the website and some features may not function properly.
        </p>
        <h2 className="font-headline">Contact Us</h2>
        <p>
          If you have any questions about this Cookie Policy, you can contact us:
        </p>
        <ul>
          <li>By email: contact@usaroofpros.com</li>
        </ul>
      </article>
    </div>
  );
}

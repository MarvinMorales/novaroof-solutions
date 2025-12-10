import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const RoofIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="text-muted-foreground hover:text-primary transition-colors">
        {children}
    </Link>
)

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <RoofIcon className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl">NovaRoof Solutions</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for all your roofing needs. Quality and durability guaranteed.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">123 Main Street, City, State, 12345</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <a href="mailto:contact@novaroof.com" className="text-muted-foreground hover:text-primary transition-colors">contact@novaroof.com</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-muted/50">
        <div className="container py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NovaRoof Solutions LLC. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <SocialIcon href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Facebook</span>
            </SocialIcon>
            <SocialIcon href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                <span className="sr-only">Twitter</span>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

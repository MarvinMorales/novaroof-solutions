"use client";

import Link from 'next/link';
import { Mail, Phone, ShieldCheck } from 'lucide-react';
import { trackCall } from '@/lib/api-client';
import { useTranslation } from '@/hooks/use-translation';

const BrandIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <ShieldCheck {...props} />
);

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="text-muted-foreground hover:text-primary transition-colors">
        {children}
    </Link>
)

export function Footer() {
  const { t } = useTranslation();

  const handleCallClick = () => {
    trackCall();
  };
    
  const defaultLocationSlug = 'houston-tx';

  return (
    <footer className="bg-card border-t">
      <div className="container pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <BrandIcon className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl">NovaRoof Solutions</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {t('Footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">{t('Footer.services')}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${defaultLocationSlug}/roof-repair/`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('Footer.roofRepair')}</Link></li>
              <li><Link href={`/${defaultLocationSlug}/roof-replacement/`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('Footer.roofReplacement')}</Link></li>
              <li><Link href={`/${defaultLocationSlug}/storm-damage-roof/`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('Footer.stormDamage')}</Link></li>
              <li><Link href={`/${defaultLocationSlug}/emergency-roof-repair/`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('Footer.emergencyRepair')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">{t('Footer.legal')}</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy/" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('Footer.privacyPolicy')}</Link></li>
              <li><Link href="/cookie-policy/" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('Footer.cookiePolicy')}</Link></li>
              <li><Link href="/terms-of-service/" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('Footer.termsOfService')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">{t('Footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a href="tel:5623177925" onClick={handleCallClick} className="text-muted-foreground hover:text-primary transition-colors">(562) 317-7925</a>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <a href="mailto:contact@novaroofsolutions.com" className="text-muted-foreground hover:text-primary transition-colors">contact@novaroofsolutions.com</a>
                </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-xs text-muted-foreground text-center">
            <strong>{t('Footer.disclaimerTitle')}:</strong> {t('Footer.disclaimer')}
          </p>
        </div>
      </div>
      <div className="bg-muted/50">
        <div className="container py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>{t('Footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { phoneNumber } from '@/lib/env';

export function MinimalFooter() {
    return (
        <footer className="bg-secondary border-t">
            <div className="container py-8 text-center text-xs text-muted-foreground space-y-4">
                <p>
                    <strong>For immediate service, call us at {phoneNumber}.</strong>
                </p>
                <p>
                    <strong>DISCLAIMER:</strong> NovaRoof Solutions is a marketing and referral service. We do not perform roofing work ourselves. We connect homeowners with licensed and insured third-party roofing contractors in their area. All contractual agreements, services, and warranties are provided by the selected independent contractor, not by NovaRoof Solutions.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/privacy-policy/" className="hover:underline">Privacy Policy</Link>
                    <span>|</span>
                    <Link href="/terms-of-service/" className="hover:underline">Terms of Service</Link>
                </div>
                <p className="pt-4">© {new Date().getFullYear()} NovaRoof Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
}

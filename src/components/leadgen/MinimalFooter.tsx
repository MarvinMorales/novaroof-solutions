import Link from 'next/link';

export function MinimalFooter() {
    return (
        <footer className="bg-secondary border-t">
            <div className="container py-6 text-center text-xs text-muted-foreground space-y-3">
                <p>
                    <strong>DISCLAIMER:</strong> This website connects homeowners with local roofing professionals. We are a marketing referral service and do not provide the roofing services ourselves.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/privacy-policy/" className="hover:underline">Privacy Policy</Link>
                </div>
                <p className="pt-2">© {new Date().getFullYear()} Local Roofing Quotes. All rights reserved.</p>
            </div>
        </footer>
    );
}

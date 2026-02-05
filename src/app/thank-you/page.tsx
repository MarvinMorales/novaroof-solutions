import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You!',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="bg-background">
      <div className="container flex items-center justify-center py-24 md:py-32 text-center">
        <div className="max-w-md">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h1 className="font-headline text-4xl font-bold tracking-tight">Thank You for Your Request!</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We've received your information and are already working on connecting you with a top-rated, local roofing professional.
          </p>
          <p className="mt-2 text-muted-foreground">
            You can expect a call from them shortly to schedule your free, no-obligation inspection and quote.
          </p>
          <Button asChild className="mt-8">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

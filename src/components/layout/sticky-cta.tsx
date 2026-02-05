import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t p-4 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden">
      <div className="container flex justify-center items-center">
        <Button asChild size="lg" className="w-full max-w-md">
          <Link href="#contact">Get a Free Quote</Link>
        </Button>
      </div>
    </div>
  );
}

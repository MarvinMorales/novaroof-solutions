import { Button } from '@/components/ui/button';
import { phoneNumber, sanitizedPhoneNumber } from '@/lib/data';
import { trackCall } from '@/lib/tracking';
import { Phone } from 'lucide-react';

export function EmergencyRepair() {
    return (
        <section className="py-20 md:py-28 bg-secondary">
            <div className="container max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold md:text-4xl text-primary">Emergency Roof Repair in Houston</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Houston's weather can be unpredictable and severe. From sudden hurricane damage to persistent leaks after a thunderstorm, we offer emergency roof repair services to secure your home quickly. Our rapid response team is on standby to handle urgent roof leak repairs and prevent further damage.
                </p>
                <Button asChild size="lg" className="mt-8 text-lg md:text-xl h-14 px-10 shadow-lg">
                    <a
                        href={`tel:${sanitizedPhoneNumber}`}
                        className="flex items-center gap-3"
                        onClick={trackCall}
                    >
                        <Phone className="h-6 w-6" />
                        Call for Emergency Service
                    </a>
                </Button>
            </div>
        </section>
    );
}

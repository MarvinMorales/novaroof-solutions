import { areasWeServe } from '@/lib/data';
import { MapPin } from 'lucide-react';

export function AreasWeServe() {
    return (
        <section className="py-20 md:py-28 bg-secondary">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Areas We Serve in Houston</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We provide expert roof repair and replacement services across the greater Houston area. If you're looking for "roof repair near me," there's a good chance we serve your neighborhood.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
                    {areasWeServe.map((area) => (
                        <div key={area} className="p-4 bg-card rounded-lg shadow-sm flex items-center justify-center gap-2">
                             <MapPin className="h-5 w-5 text-primary" />
                            <span className="font-medium">{area}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

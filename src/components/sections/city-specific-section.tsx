import type { LocationData } from '@/lib/locations';

export function CitySpecificSection({ location }: { location: LocationData }) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          <div className="md:col-span-3 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="font-headline tracking-tighter">
              Expert Roofing Solutions for {location.city}, {location.state}
            </h2>
            <p className="lead !text-muted-foreground">
              {location.localContent.intro}
            </p>
            <h3>Common Roofing Challenges in {location.city}</h3>
            <p>{location.localContent.risks}</p>
            <p>The licensed roofers in our network understand these local challenges inside and out. They have the experience to recommend and install the right materials—from impact-resistant shingles to handle hail to advanced underlayment for moisture protection—ensuring your home is protected year-round.</p>
          </div>
          <div className="md:col-span-2 rounded-lg border bg-card text-card-foreground p-6">
             <h4 className="font-headline text-xl font-semibold mb-4">Local {location.city} Service Area</h4>
             <p className="text-sm text-muted-foreground">We serve the entire {location.city} metro area, including but not limited to the following ZIP codes:</p>
             <div className="flex flex-wrap gap-2 mt-4">
                {location.zipCodes.slice(0, 10).map(zip => (
                    <span key={zip} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-mono">{zip}</span>
                ))}
             </div>
             <p className="mt-4 text-sm text-muted-foreground">Don't see your ZIP code? Don't worry, we connect homeowners with roofers across the entire region. Contact us to get started.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

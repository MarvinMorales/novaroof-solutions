import type { LocationData } from '@/lib/locations';
import { Sun, Wind, CloudHail, Zap } from 'lucide-react';

const riskIcons: { [key: string]: React.ReactNode } = {
  hurricanes: <Wind />,
  hailstorms: <CloudHail />,
  "heavy rainfall": <Zap />,
  "high winds": <Wind />,
  "severe hailstorms": <CloudHail />,
  tornadoes: <Wind />,
  "intense sun exposure": <Sun />,
  "large hail": <CloudHail />,
  "flash floods": <Zap />,
  "strong thunderstorms": <Zap />,
  "wind damage": <Wind />,
};

export function CitySpecificSection({ location }: { location: LocationData }) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-semibold tracking-tighter">
              Understanding Roofing in {location.city}, {location.state}
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every location has unique challenges. In {location.city}, homeowners face {location.climate}. This means your roof needs to be prepared to handle specific local risks.
            </p>
            <div className="mt-6 space-y-4">
              <h3 className="font-semibold text-lg">Common Local Roofing Risks:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {location.commonRisks.map((risk) => (
                  <li key={risk} className="flex items-center gap-3">
                    <div className="flex-shrink-0 text-primary">
                      {riskIcons[risk.toLowerCase()] || <Zap />}
                    </div>
                    <span className="text-muted-foreground capitalize">{risk}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground text-sm">
                Our network of local contractors in {location.city} are experts in selecting materials and using techniques best suited for these conditions, whether it's impact-resistant shingles for hail or superior sealing for wind-driven rain.
              </p>
            </div>
          </div>
          <div className="prose dark:prose-invert rounded-lg border bg-card text-card-foreground p-6">
             <h4>Local Service Zip Codes</h4>
             <p>We serve the entire {location.city} metro area, including but not limited to the following ZIP codes:</p>
             <div className="flex flex-wrap gap-2">
                {location.zipCodes.slice(0, 5).map(zip => (
                    <span key={zip} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-mono">{zip}</span>
                ))}
             </div>
             <p className="mt-4">Don't see your ZIP code? Don't worry, we likely serve your area. Contact us to confirm.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ShieldCheck, UserCheck, Clock, MapPin } from 'lucide-react';

const trustPoints = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    text: 'Licensed & Insured',
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    text: 'Vetted Professionals',
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    text: 'Local Service Partners',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    text: 'Same-Day Inspections',
  },
];

export function TrustBadges() {
  return (
    <section className="bg-secondary py-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {trustPoints.map((point) => (
            <div key={point.text} className="flex flex-col items-center gap-2">
              {point.icon}
              <p className="text-sm font-semibold text-muted-foreground">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

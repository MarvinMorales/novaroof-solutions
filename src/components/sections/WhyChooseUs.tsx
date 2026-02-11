import { whyChooseUsPoints } from '@/lib/data';

type WhyChooseUsProps = {
    location: { city: string };
};

export function WhyChooseUs({ location }: WhyChooseUsProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-primary">¿Por Qué Elegir a Novaroof Solutions en {location.city}?</h2>
          <p className="text-lg text-muted-foreground">
            Cuando nos eliges, te asocias con un equipo que valora la integridad, la calidad y tu completa satisfacción. Estamos comprometidos a brindar la mejor experiencia de techado en Texas, con la garantía y la experiencia que solo un contratista local y certificado puede ofrecer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {whyChooseUsPoints.map((point) => (
            <div key={point.title}>
              <point.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

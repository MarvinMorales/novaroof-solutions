import { whyChooseUsPoints } from '@/lib/data';

type WhyChooseUsProps = {
    location: { city: string };
};

export function WhyChooseUs({ location }: WhyChooseUsProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-primary">Why Choose Novaroof Solutions in {location.city}?</h2>
          <p className="text-lg text-muted-foreground">
            When you choose us, you partner with a team that values integrity, quality, and your complete satisfaction. We are committed to providing the best roofing experience in Texas, with the warranty and expertise only a local, certified contractor can offer. We also provide insurance claim assistance.
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

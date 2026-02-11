import { whyChooseUsPoints, i18n } from '@/lib/data';

type WhyChooseUsProps = {
    lang: 'en' | 'es';
    location: { city: string };
};

export function WhyChooseUs({ location, lang }: WhyChooseUsProps) {
  const t = i18n[lang].whyChooseUs;
  const pointsT = i18n[lang].whyChooseUsPoints;
  
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-primary">{t.title(location.city)}</h2>
          <p className="text-lg text-muted-foreground">
            {t.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {whyChooseUsPoints.map((point) => {
            const pointT = pointsT.find(p => p.slug === point.slug)!;
            return (
              <div key={point.slug}>
                <point.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">{pointT.title}</h3>
                <p className="text-muted-foreground">{pointT.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

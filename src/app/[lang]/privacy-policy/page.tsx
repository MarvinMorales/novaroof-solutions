import type { Metadata } from 'next';
import { i18n } from '@/lib/data';

type PrivacyPageProps = {
  params: { lang: 'en' | 'es' };
};

export async function generateMetadata({ params: { lang } }: PrivacyPageProps): Promise<Metadata> {
  const t = i18n[lang].privacyPolicy;
  return {
    title: `${t.title} | Novaroof Solutions`,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function PrivacyPolicyPage({ params: { lang } }: PrivacyPageProps) {
  const t = i18n[lang].privacyPolicy;

  return (
    <main className="py-20 md:py-28">
      <div className="container max-w-4xl mx-auto space-y-8 text-muted-foreground">
        <h1 className="text-4xl font-bold text-primary">{t.title}</h1>
        <p>{t.lastUpdated} {new Date().toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        {t.sections.map(section => (
          <div key={section.title} className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
            <p>{section.content}</p>
            {section.list && (
              <ul className="list-disc list-inside space-y-2 pl-4">
                {section.list.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

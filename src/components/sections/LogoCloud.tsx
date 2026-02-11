import { i18n } from "@/lib/data";

const logos = [
  { name: 'GAF', src: '/logos/gaf.svg' },
  { name: 'Owens Corning', src: '/logos/owens-corning.svg' },
  { name: 'CertainTeed', src: '/logos/certainteed.svg' },
  { name: 'TAMKO', src: '/logos/tamko.svg' },
  { name: 'Atlas', src: '/logos/atlas.svg' },
];

type LogoCloudProps = {
  lang: 'en' | 'es';
};

export function LogoCloud({ lang }: LogoCloudProps) {
  const t = i18n[lang].logoCloud;
  return (
    <div className="bg-secondary py-12">
      <div className="container">
        <h2 className="text-center text-lg font-semibold text-muted-foreground">
          {t.title}
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-5 items-center">
          {logos.map((logo) => (
             <div key={logo.name} className="col-span-1 flex justify-center text-muted-foreground font-bold text-2xl">
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const logos = [
  { name: 'GAF', src: '/logos/gaf.svg' },
  { name: 'Owens Corning', src: '/logos/owens-corning.svg' },
  { name: 'CertainTeed', src: '/logos/certainteed.svg' },
  { name: 'TAMKO', src: '/logos/tamko.svg' },
  { name: 'Atlas', src: '/logos/atlas.svg' },
];

export function LogoCloud() {
  // This is a placeholder. You would need to add actual SVG logos to your /public/logos directory.
  return (
    <div className="bg-secondary py-12">
      <div className="container">
        <h2 className="text-center text-lg font-semibold text-muted-foreground">
          Partnered with the Industry's Most Trusted Brands
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-5 items-center">
          {logos.map((logo) => (
             <div key={logo.name} className="col-span-1 flex justify-center text-muted-foreground font-bold text-2xl">
              {/* Fallback text if SVGs are not available */}
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

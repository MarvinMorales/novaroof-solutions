import type { LocationData } from '@/lib/locations';
import { localProblemsMap, commonRiskToProblemKey } from '@/lib/local-problems';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { AlertCircle, ShieldCheck } from 'lucide-react';

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

export function CitySpecificSection({ location }: { location: LocationData }) {
  // Get unique problem keys from the location's common risks, max 2 for display
  const problemKeys = [...new Set(
    location.commonRisks
      .map(risk => commonRiskToProblemKey[risk])
      .filter(Boolean) // Filter out any undefined keys
  )].slice(0, 2);

  const problemsToDisplay = problemKeys.map(key => localProblemsMap[key]).filter(Boolean);

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            Your Local {location.city} Roofing Challenges, Solved
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {location.localContent.intro}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {problemsToDisplay.map((item, index) => {
            const problemImage = getImage(item.problem.imageId);
            const solutionImage = getImage(item.solution.imageId);

            return (
              <Card key={index} className="overflow-hidden shadow-lg w-full bg-card">
                <div className="grid grid-cols-2">
                    {problemImage && (
                        <div className="relative h-48">
                            <Image
                                src={problemImage.imageUrl}
                                alt={problemImage.description}
                                data-ai-hint={problemImage.imageHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    {solutionImage && (
                         <div className="relative h-48">
                             <Image
                                src={solutionImage.imageUrl}
                                alt={solutionImage.description}
                                data-ai-hint={solutionImage.imageHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <AlertCircle className="h-6 w-6 text-destructive shrink-0" />
                                <h3 className="font-headline text-lg font-semibold text-destructive">The Problem</h3>
                            </div>
                            <h4 className="font-semibold text-foreground mb-1">{item.problem.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.problem.description}</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                                <h3 className="font-headline text-lg font-semibold text-primary">The Solution</h3>
                            </div>
                             <h4 className="font-semibold text-foreground mb-1">{item.solution.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.solution.description}</p>
                        </div>
                    </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-center">We Understand {location.city} Roofs</h2>
            <div className="mt-4 space-y-4 text-lg text-muted-foreground">
                <p>{location.localContent.risks}</p>
                <p>The licensed roofers in our network understand these local challenges inside and out. They have the experience to recommend and install the right materials—from impact-resistant shingles to handle hail to advanced underlayment for moisture protection—ensuring your home is protected year-round.</p>
            </div>
        </div>

      </div>
    </section>
  );
}

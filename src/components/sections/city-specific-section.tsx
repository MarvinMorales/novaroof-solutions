import type { LocationData } from '@/lib/locations';
import { localProblemsMap, commonRiskToProblemKey } from '@/lib/local-problems';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, ShieldCheck } from 'lucide-react';

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

export function CitySpecificSection({ location }: { location: LocationData }) {
  // Get unique problem keys from the location's common risks, max 2 for display
  const problemKeys = [...new Set(
    location.commonRisks
      .map(risk => commonRiskToProblemKey[risk])
      .filter(Boolean) // Filter out any undefined keys
  )].slice(0, 2);

  const problemsToDisplay = problemKeys.map(key => localProblemsMap[key]);

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            Your Local {location.city} Roofing Challenges, Solved.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {location.localContent.intro}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {problemsToDisplay.map((item, index) => {
            const problemImage = getImage(item.problem.imageId);
            const solutionImage = getImage(item.solution.imageId);

            return (
              <div key={index} className="space-y-8">
                {/* Problem Card */}
                <Card className="overflow-hidden shadow-lg">
                  {problemImage && (
                    <Image
                      src={problemImage.imageUrl}
                      alt={problemImage.description}
                      data-ai-hint={problemImage.imageHint}
                      width={800}
                      height={500}
                      className="object-cover w-full h-56"
                    />
                  )}
                  <CardHeader className="flex-row gap-4 items-center bg-destructive/10">
                    <AlertCircle className="h-8 w-8 text-destructive shrink-0" />
                    <div>
                      <CardTitle className="font-headline text-destructive text-xl">The Problem: {item.problem.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.problem.description}</p>
                  </CardContent>
                </Card>

                {/* Solution Card */}
                <Card className="overflow-hidden shadow-lg border-primary/50 bg-green-50/20 dark:bg-green-900/10">
                   {solutionImage && (
                    <Image
                      src={solutionImage.imageUrl}
                      alt={solutionImage.description}
                      data-ai-hint={solutionImage.imageHint}
                      width={800}
                      height={500}
                      className="object-cover w-full h-56"
                    />
                  )}
                  <CardHeader className="flex-row gap-4 items-center bg-primary/10">
                    <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
                     <div>
                      <CardTitle className="font-headline text-primary text-xl">The Solution: {item.solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.solution.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            <h3>We Understand {location.city} Roofs</h3>
             <p className="lead !text-muted-foreground">{location.localContent.risks}</p>
            <p>The licensed roofers in our network understand these local challenges inside and out. They have the experience to recommend and install the right materials—from impact-resistant shingles to handle hail to advanced underlayment for moisture protection—ensuring your home is protected year-round.</p>
        </div>

      </div>
    </section>
  );
}

    
import type { LocationData, ServiceData } from '@/lib/locations';
import { localProblemsMap, commonRiskToProblemKey } from '@/lib/local-problems';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { AlertCircle, ShieldCheck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

const serviceToRelevantProblems: Record<string, string[]> = {
    'roof-repair': ['hail', 'wind', 'sun', 'rain'],
    'roof-leak-repair': ['rain', 'hail', 'wind'],
    'roof-replacement': ['sun', 'hail', 'wind'],
    'emergency-roof-repair': ['wind', 'hail', 'rain'],
    'storm-damage-roof': ['wind', 'hail', 'rain'],
    'roof-inspection': ['hail', 'wind', 'sun', 'rain'],
    'metal-roofing': ['sun', 'wind', 'hail'],
};

const serviceSpecificTexts: Record<string, { intro: string; summary: string }> = {
    'roof-repair': {
        intro: "Even small roof issues can escalate quickly in {city}'s climate. This section highlights the common triggers for roof repairs that homeowners in your area frequently encounter.",
        summary: "The licensed roofers in our network are adept at handling {city}'s specific climate challenges that lead to {problemListString}. They possess the local expertise to pinpoint the exact cause of your roof's problem and apply the most effective repair techniques for a durable fix, protecting your home from these persistent local threats."
    },
    'roof-replacement': {
        intro: "A full roof replacement in {city} is a major decision, often driven by the roof's age and the cumulative impact of local weather. Here are the key factors that lead homeowners to choose a complete replacement.",
        summary: "The contractors we partner with understand that a new roof in {city} must be built to withstand problems like {problemListString}. They are skilled in selecting the right materials and using installation methods proven to last in your specific climate, providing you with long-term peace of mind."
    },
    'emergency-roof-repair': {
        intro: "When a major storm hits {city}, immediate action is critical to protect your home from severe damage. This section outlines the most frequent causes of roofing emergencies in your area.",
        summary: "In a crisis involving {problemListString}, you need a rapid response from a team that knows {city}'s weather patterns. The emergency crews in our network are equipped to quickly mitigate damage and provide durable repairs that secure your home against the specific threats common to your area."
    },
    'storm-damage-roof': {
        intro: "After a severe storm in {city}, it's crucial to assess the damage accurately. Below, we cover the primary types of storm-related roofing issues that local professionals are trained to handle.",
        summary: "Navigating the aftermath of a storm that caused {problemListString} can be stressful. The professionals in our network specialize in storm damage restoration in {city}, offering expert inspections and assistance with insurance claims to ensure your home is restored correctly."
    },
    'roof-leak-repair': {
        intro: "In {city}, a roof leak can go from a minor drip to a major problem in no time. Understanding the common local causes is the first step to a successful and permanent repair.",
        summary: "Fixing a leak caused by {problemListString} requires more than just a patch; it demands local knowledge. The {city} roofers in our network are experts at tracing leaks to their source and implementing lasting repairs that address the specific climate pressures of your area."
    },
    'roof-inspection': {
        intro: "A regular roof inspection in {city} is your best defense against unexpected, costly repairs. Here are the specific climate-related issues an inspector will look for on your property.",
        summary: "A professional inspection is key to identifying issues like {problemListString} before they become catastrophes. The inspectors in our {city} network provide thorough assessments and detailed reports, giving you a clear picture of your roof's health and a plan to address any vulnerabilities."
    },
    'metal-roofing': {
        intro: "Choosing a metal roof in {city} is a premium choice for durability and energy efficiency. Here are the local factors that make metal a popular option for discerning homeowners.",
        summary: "For homeowners in {city} concerned about {problemListString}, a metal roof is a superior solution. The contractors in our network are experts in installing standing seam and other metal systems that provide unparalleled longevity and performance against the toughest local weather conditions."
    },
};

const defaultTexts = {
    intro: "The unique climate in {city} presents specific challenges for your roof. Here are the most common issues that lead to needing professional roofing services.",
    summary: "The licensed roofers in our network understand how {city}'s specific climate contributes to issues like {problemListString}. They have the local experience to accurately diagnose the root cause of your problem and recommend the right materials and repair techniques for a long-lasting solution, ensuring your home is protected from these specific threats year-round."
};

export function CitySpecificSection({ location, service }: { location: LocationData, service: ServiceData }) {
  const locationProblemKeys = [...new Set(
    location.commonRisks
      .map(risk => commonRiskToProblemKey[risk])
      .filter(Boolean)
  )];

  const serviceProblemKeys = serviceToRelevantProblems[service.slug] || [];

  const relevantProblemKeys = locationProblemKeys.filter(key => serviceProblemKeys.includes(key));
  
  const finalProblemKeys = (relevantProblemKeys.length > 0 ? relevantProblemKeys : locationProblemKeys).slice(0, 2);

  const problemsToDisplay = finalProblemKeys.map(key => localProblemsMap[key]).filter(Boolean);

  if (problemsToDisplay.length === 0) {
    return null;
  }

  const problemTitles = problemsToDisplay.map(p => p.problem.title.toLowerCase());
  let problemListString = "";
  if (problemTitles.length > 1) {
    problemListString = `${problemTitles.slice(0, -1).join(', ')} and ${problemTitles.slice(-1)}`;
  } else if (problemTitles.length === 1) {
    problemListString = problemTitles[0];
  }

  const specificContent = serviceSpecificTexts[service.slug] || defaultTexts;
  const introText = specificContent.intro.replace('{city}', location.city);
  const summaryText = specificContent.summary.replace('{city}', location.city).replace('{problemListString}', problemListString);


  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            Common Causes of {service.name} in {location.city}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
             {introText}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {problemsToDisplay.map((item, index) => {
            const problemImage = getImage(item.problem.imageId);

            return (
              <Card key={index} className="overflow-hidden shadow-lg w-full bg-card flex flex-col">
                {problemImage && (
                  <div className="relative aspect-video w-full">
                    <Image
                      src={problemImage.imageUrl}
                      alt={problemImage.description}
                      data-ai-hint={problemImage.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <AlertCircle className="h-6 w-6 text-destructive shrink-0" />
                      <h3 className="font-headline text-xl font-semibold">{item.problem.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.problem.description.replace(/{city}/g, location.city)}</p>
                  </div>
                  <Separator className="my-6" />
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                      <h3 className="font-headline text-xl font-semibold">{item.solution.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.solution.description.replace(/{city}/g, location.city)}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {problemListString && (
            <div className="mt-16 max-w-4xl mx-auto text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Local Expertise Matters</h2>
                <div className="mt-4 space-y-4 text-lg text-muted-foreground text-left">
                    <p>{summaryText}</p>
                </div>
            </div>
        )}

      </div>
    </section>
  );
}

    
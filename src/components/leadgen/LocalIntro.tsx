import { Card, CardContent } from "@/components/ui/card";

interface LocalIntroProps {
    serviceName: string;
    city: string;
    introduction: string;
}

export function LocalIntro({ serviceName, city, introduction }: LocalIntroProps) {
    return (
        <section className="py-16 md:py-20">
            <div className="container max-w-4xl">
                <Card className="p-8 md:p-12">
                    <CardContent className="p-0 space-y-6">
                        <h2 className="text-3xl font-bold">Expert {serviceName} Tailored for {city} Homes</h2>
                        <div className="text-muted-foreground space-y-4 text-lg" dangerouslySetInnerHTML={{ __html: introduction }} />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

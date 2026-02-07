import { AlertTriangle } from "lucide-react";

const defaultTitle = "When to Call a Roofer Immediately";
const defaultDescription = "Delaying a roof repair can lead to thousands in damages. Call now if you see any of these warning signs.";
const defaultReasons = [
    'You see water stains on your ceiling or walls.',
    'Your roof is actively leaking during rain.',
    'Shingles are missing, cracked, or in your yard.',
    'A tree or large limb has fallen on your roof.',
    'Your gutters are overflowing or pulling away.'
];

interface UrgencySectionProps {
    title?: string;
    reasons?: string[];
}


export function UrgencySection({ title = defaultTitle, reasons = defaultReasons }: UrgencySectionProps) {
    return (
        <section className="py-16 md:py-20 bg-secondary">
            <div className="container max-w-4xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="mt-4 text-muted-foreground">
                        {defaultDescription}
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <AlertTriangle className="h-6 w-6 text-destructive mt-1 shrink-0" />
                            <p className="text-lg font-semibold">{reason}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

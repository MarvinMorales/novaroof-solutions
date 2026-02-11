import { AlertTriangle, Droplet, UnfoldVertical, Wind, Droplets } from 'lucide-react';

const signs = [
    {
        icon: Droplet,
        text: "Roof leaks after heavy rain",
    },
    {
        icon: Wind,
        text: "Missing or damaged shingles",
    },
    {
        icon: AlertTriangle,
        text: "Storm or hail damage",
    },
    {
        icon: UnfoldVertical,
        text: "Sagging roof areas",
    },
    {
        icon: Droplets,
        text: "Water stains on ceilings",
    },
];

export function SignsYouNeedRepair() {
    return (
        <section className="py-20 md:py-28">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Signs You Need Roof Repair in Houston</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Don't ignore the warning signs. Addressing roofing issues early can save you from costly water damage and structural problems down the line. Here are common indicators that your Houston roof needs professional attention.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {signs.map((sign) => (
                        <div key={sign.text} className="p-6 bg-card rounded-lg shadow-md flex items-center gap-4">
                            <sign.icon className="h-10 w-10 text-primary" />
                            <h3 className="font-semibold text-lg">{sign.text}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { Phone, User, Wrench, AlertTriangle } from 'lucide-react';

export interface Service {
    name: string;
    slug: string;
    description: string;
}

export interface Location {
    city: string;
    state: string;
    stateCode: string;
    slug: string;
}

export interface Step {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface PageContent {
    introduction?: string;
    urgencyReasons: string[];
    howItWorksSteps: Step[];
    urgencyTitle?: string;
    urgencyDescription?: string;
    howItWorksTitle?: string;
    howItWorksDescription?: string;
}

export const services: Service[] = [
    {
        name: "Roof Repair",
        slug: "roof-repair",
        description: "Don't let a small leak become a huge problem. We fix missing shingles, patch leaks, and repair damage to keep your home safe and dry.",
    },
    {
        name: "Emergency Roof Repair",
        slug: "emergency-roof-repair",
        description: "Storms, high winds, or sudden major leaks require immediate action. Our 24/7 emergency service connects you to pros who can get there fast.",
    },
    {
        name: "Storm Damage Roofing",
        slug: "storm-damage-roofing",
        description: "From hail and wind damage to fallen trees, our network of specialists will assess the damage and provide expert repairs to secure your roof.",
    },
     {
        name: "Roof Replacement",
        slug: "roof-replacement",
        description: "Invest in long-term peace of mind. A full roof replacement protects your property for decades with top-quality materials and expert installation.",
    },
];

export const locations: Location[] = [
    { city: "Houston", state: "Texas", stateCode: "TX", slug: "houston-tx" },
    { city: "Dallas", state: "Texas", stateCode: "TX", slug: "dallas-tx" },
    { city: "San Antonio", state: "Texas", stateCode: "TX", slug: "san-antonio-tx" },
    { city: "Austin", state: "Texas", stateCode: "TX", slug: "austin-tx" },
    { city: "Phoenix", state: "Arizona", stateCode: "AZ", slug: "phoenix-az" },
    { city: "Los Angeles", state: "California", stateCode: "CA", slug: "los-angeles-ca" },
    { city: "Miami", state: "Florida", stateCode: "FL", slug: "miami-fl" },
    { city: "Chicago", state: "Illinois", stateCode: "IL", slug: "chicago-il" },
];

export const defaultContent: PageContent = {
    urgencyTitle: "When to Call a Roofer Immediately",
    urgencyDescription: "Ignoring these warning signs can lead to costly structural damage, mold growth, and ruined insulation. Protect your home's value and safety by calling an expert at the first sign of trouble.",
    urgencyReasons: [
        'Dark water stains on your ceiling are a sure sign of a leak.',
        'An active leak during rain is an emergency – call immediately.',
        'Missing, cracked, or curling shingles mean your roof is vulnerable.',
        'Visible damage from fallen trees or debris requires urgent inspection.',
    ],
    howItWorksTitle: "Get Help in 3 Simple Steps",
    howItWorksDescription: "We've removed the hassle of finding a trustworthy roofer. Our process is fast, free, and connects you with a pro in minutes.",
    howItWorksSteps: [
      {
        icon: <Phone className="h-10 w-10 text-primary" />,
        title: '1. Call Us 24/7',
        description: 'Call our 24/7 hotline and tell us about your roofing issue. A dedicated representative is always available to help.'
      },
      {
        icon: <User className="h-10 w-10 text-primary" />,
        title: '2. Describe Your Issue',
        description: 'Give us the key details. We’ll immediately search our network for a qualified local professional who is ready to respond.'
      },
      {
        icon: <Wrench className="h-10 w-10 text-primary" />,
        title: '3. Connect to a Pro',
        description: 'You’ll be connected directly by phone with a licensed, insured roofer in your area to discuss your needs and get a quote.'
      }
    ]
};


export const localizedContent: Record<string, PageContent> = {
  'houston-tx': {
    introduction: `<p>Living in Houston means your roof is constantly battling intense heat, punishing humidity, and the yearly threat of hurricanes. A small issue can quickly escalate in this climate. We specialize in connecting you with top-rated Houston roofing contractors who are experts in these specific challenges.</p><p>From repairing wind-torn shingles in Katy to stopping persistent leaks in Sugar Land, our network of local, vetted professionals provides fast, reliable solutions designed to withstand the Texas Gulf Coast weather. Don't wait for the next storm to find out your roof isn't ready.</p>`,
    urgencyTitle: "Immediate Roofing Concerns for Houston Homeowners",
    urgencyDescription: "In Houston's climate, delaying a roof repair can lead to rapid mold growth and serious water damage. Call now if you see these specific warning signs.",
    urgencyReasons: [
      'Water stains on your ceiling are a direct sign of a breach in your roof\'s defense.',
      'An active leak during a Houston downpour is an emergency that needs immediate attention.',
      'Finding shingles in your yard post-storm means your roof is compromised and vulnerable.',
      'A sudden spike in A/C costs can mean your attic\'s ventilation is failing due to roof damage.',
    ],
    howItWorksTitle: "Get Connected With a Houston Roofer Fast",
    howItWorksDescription: "Our process is designed to bypass the hassle and connect you with a local, storm-ready Houston roofer in minutes.",
    howItWorksSteps: [
      {
        icon: <Phone className="h-10 w-10 text-primary" />,
        title: '1. Call Our Houston Line',
        description: 'Call our Houston-area 24/7 hotline. You\'ll speak to a real person ready to understand your specific roofing emergency.'
      },
      {
        icon: <User className="h-10 w-10 text-primary" />,
        title: '2. Explain Your Situation',
        description: 'Explain your issue. We\'ll immediately tap into our network to find a qualified local professional ready to respond in the Houston metro.'
      },
      {
        icon: <Wrench className="h-10 w-10 text-primary" />,
        title: '3. Talk to a Houston Pro',
        description: 'Within minutes, you\'ll be on the phone with a licensed, insured Houston roofer to schedule your service and get a precise quote.'
      }
    ]
  }
};


export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(s => s.slug === slug);
}
export function getLocationBySlug(slug: string): Location | undefined {
    return locations.find(l => l.slug === slug);
}

/**
 * INSTRUCTIONS FOR ADDING A NEW CITY:
 * To add a new city, simply add a new object to the `locations` array above.
 * 
 * Example:
 * { city: "Denver", state: "Colorado", stateCode: "CO", slug: "denver-co" }
 * 
 * To add localized content for that city, create a new entry in the `localizedContent` object.
 * Use the city's slug as the key (e.g., 'denver-co'). You can customize the introduction,
 * urgency reasons, and how-it-works steps. If you don't add localized content, the page
 * will automatically use the `defaultContent`.
 */

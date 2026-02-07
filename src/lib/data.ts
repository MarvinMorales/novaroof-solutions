export interface Service {
    name: string;
    slug: string;
    description: string;
    keywords: string[];
}

export interface HowItWorksStep {
    icon: 'Phone' | 'Search' | 'Wrench';
    title: string;
    description: string;
}

export interface Location {
    city: string;
    state: string;
    stateCode: string;
    slug: string;
    pageContext?: {
      introduction: string;
      urgencyTitle: string;
      urgencyReasons: string[];
      howItWorksTitle: string;
      steps: HowItWorksStep[];
    }
}

export const services: Service[] = [
    {
        name: "Emergency Roof Repair",
        slug: "emergency-roof-repair",
        description: "Get 24/7 emergency roof repair for leaks, storm damage, and structural failures. Our local pros provide fast tarping and immediate assistance to protect your home.",
        keywords: ["emergency roofer", "24/7 roof repair", "urgent roof leak"],
    },
    {
        name: "Roof Repair",
        slug: "roof-repair",
        description: "From missing shingles to damaged flashing, we connect you with experts for all types of roof repairs. Extend your roof's life by fixing small issues before they become big problems.",
        keywords: ["roof leak repair", "shingle replacement", "local roof repair"],
    },
    {
        name: "Roof Replacement",
        slug: "roof-replacement",
        description: "Full roof replacements using high-quality materials for long-lasting protection. Get a free, detailed estimate from a top-rated local contractor.",
        keywords: ["new roof cost", "shingle roof replacement", "roofing contractor"],
    },
    {
        name: "Storm Damage Repair",
        slug: "storm-damage-repair",
        description: "Specialized repair for roofs damaged by hail, wind, or fallen trees. Our network pros assist with insurance claims and provide comprehensive restoration.",
        keywords: ["hail damage roof", "wind damage repair", "storm restoration"],
    },
];

export const locations: Location[] = [
    { 
        city: "Houston", 
        state: "Texas", 
        stateCode: "TX", 
        slug: "houston-tx",
        pageContext: {
            introduction: "<p>Houston's unique climate, characterized by intense humidity, heavy rains, and the ever-present threat of hurricanes, demands a roofing solution that is both resilient and reliable. At NovaRoof Solutions, we specialize in connecting Houston homeowners with top-tier, local roofing professionals who understand these specific challenges.</p><p>Our network of contractors is experienced in handling everything from emergency storm damage repairs to full roof replacements using materials designed to withstand the Gulf Coast weather. We ensure every roofer is licensed, insured, and has a proven track record of quality workmanship right here in the Houston area.</p>",
            urgencyTitle: "Don't Underestimate Houston's Weather: When to Call Immediately",
            urgencyReasons: [
                'Post-hurricane or tropical storm inspection, even without visible leaks.',
                'Visible water stains on your ceiling after heavy Texas downpours.',
                'Shingles that are curling or buckling under the intense sun.',
                'Any signs of hail damage, no matter how small they seem.',
                'Gutters clogged with shingle granules—a sign of advanced roof wear.',
                'A sudden spike in your energy bills, indicating poor attic ventilation.'
            ],
            howItWorksTitle: "Your Stress-Free Houston Roofing Solution",
            steps: [
                {
                    icon: 'Phone',
                    title: '1. Call Us With Your Need',
                    description: "Describe your roofing issue. We'll instantly match you with a local Houston-area contractor who is vetted, qualified, and ready to respond."
                },
                {
                    icon: 'Search',
                    title: '2. Get a Professional On-Site Assessment',
                    description: 'A qualified roofer will perform a thorough inspection, assessing damage in the context of local building codes and climate needs, providing a clear, no-obligation estimate.'
                },
                {
                    icon: 'Wrench',
                    title: '3. Schedule Your High-Quality Roof Work',
                    description: 'Once you approve, your project will be scheduled. The work will be completed efficiently using materials suited for the demanding Texas climate, protecting your home for years to come.'
                }
            ]
        }
    },
    { city: "Dallas", state: "Texas", stateCode: "TX", slug: "dallas-tx" },
    { city: "San Antonio", state: "Texas", stateCode: "TX", slug: "san-antonio-tx" },
    { city: "Austin", state: "Texas", stateCode: "TX", slug: "austin-tx" },
    { city: "Phoenix", state: "Arizona", stateCode: "AZ", slug: "phoenix-az" },
    { city: "Los Angeles", state: "California", stateCode: "CA", slug: "los-angeles-ca" },
    { city: "Miami", state: "Florida", stateCode: "FL", slug: "miami-fl" },
    { city: "Chicago", state: "Illinois", stateCode: "IL", slug: "chicago-il" },
    { city: "Denver", state: "Colorado", stateCode: "CO", slug: "denver-co" },
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
export const getLocationBySlug = (slug: string) => locations.find(l => l.slug === slug);

export interface Service {
    name: string;
    slug: string;
    description: string;
    keywords: string[];
}

export interface Location {
    city: string;
    state: string;
    stateCode: string;
    slug: string;
    // Add any city-specific data here in the future
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
    { city: "Houston", state: "Texas", stateCode: "TX", slug: "houston-tx" },
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

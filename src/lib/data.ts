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

export const services: Service[] = [
    {
        name: "Roof Repair",
        slug: "roof-repair",
        description: "Fix leaks, missing shingles, and damage to extend your roof's life.",
    },
    {
        name: "Emergency Roof Repair",
        slug: "emergency-roof-repair",
        description: "24/7 response for storm damage, major leaks, and urgent issues.",
    },
    {
        name: "Storm Damage Roofing",
        slug: "storm-damage-roofing",
        description: "Specialized repair for roofs damaged by hail, wind, or fallen trees.",
    },
     {
        name: "Roof Replacement",
        slug: "roof-replacement",
        description: "Full replacement with high-quality materials for ultimate protection.",
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
 * - `city`: The city name, e.g., "Denver"
 * - `state`: The full state name, e.g., "Colorado"
 * - `stateCode`: The two-letter state abbreviation, e.g., "CO"
 * - `slug`: The URL-friendly identifier, usually "city-st", e.g., "denver-co"
 * 
 * Once you add the new location object and save the file, Next.js will
 * automatically generate all the required service pages for that city
 * when you next build the project. No other code changes are needed.
 */

export interface LocationData {
  city: string;
  state: string;
  stateCode: string;
  slug: string;
  zipCodes: string[];
  climate: string;
  commonRisks: string[];
}

export const locations: LocationData[] = [
  {
    city: "Houston",
    state: "Texas",
    stateCode: "TX",
    slug: "houston-tx",
    zipCodes: ["77002", "77003", "77004", "77005", "77006"],
    climate: "a humid subtropical climate, with hot, humid summers and mild winters, making durable roofing materials essential.",
    commonRisks: ["hurricanes", "hailstorms", "heavy rainfall", "high winds"],
  },
  {
    city: "Dallas",
    state: "Texas",
    stateCode: "TX",
    slug: "dallas-tx",
    zipCodes: ["75201", "75202", "75203", "75204", "75205"],
    climate: "a humid subtropical climate with very hot summers, requiring roofs that can handle extreme heat and intense sun.",
    commonRisks: ["severe hailstorms", "tornadoes", "strong winds", "intense sun exposure"],
  },
  {
    city: "Austin",
    state: "Texas",
    stateCode: "TX",
    slug: "austin-tx",
    zipCodes: ["78701", "78702", "78703", "78704", "78705"],
    climate: "a humid subtropical climate, characterized by hot summers and mild winters, with periods of heavy rain.",
    commonRisks: ["large hail", "flash floods", "strong thunderstorms", "wind damage"],
  },
  {
    city: "Miami",
    state: "Florida",
    stateCode: "FL",
    slug: "miami-fl",
    zipCodes: ["33101", "33109", "33125", "33126", "33127"],
    climate: "a tropical monsoon climate, with hot, humid summers and warm, dry winters. It is prone to hurricanes and tropical storms, demanding robust roofing solutions.",
    commonRisks: ["hurricanes", "high winds", "heavy rainfall", "intense sun exposure"],
  }
];

export const services = [
    {
        slug: "roof-repair",
        name: "Roof Repair",
        title: "Roof Repair",
        h1: "Roof Repair Services in",
        description: "Get professional roof repair services in {city}, {state}. We connect you with top-rated local roofing contractors for leak repairs, shingle replacement, and more. Get a free, no-obligation inspection today."
    },
    {
        slug: "roof-replacement",
        name: "Roof Replacement",
        title: "Roof Replacement",
        h1: "Roof Replacement Services in",
        description: "Need a new roof in {city}, {state}? We find trusted, local pros for complete roof replacements. High-quality materials and workmanship guaranteed. Contact us for a free estimate."
    },
    {
        slug: "emergency-roof-repair",
        name: "Emergency Roof Repair",
        title: "Emergency Roof Repair",
        h1: "Emergency Roof Repair in",
        description: "24/7 emergency roof repair services in {city}, {state}. We quickly connect you with experts for urgent storm damage, leaks, and other roofing emergencies. Fast response to protect your home."
    },
    {
        slug: "storm-damage-roof",
        name: "Storm Damage Roof Repair",
        title: "Storm Damage Roof Repair",
        h1: "Storm Damage Roof Repair in",
        description: "Specialized storm damage roof repair in {city}, {state}. Our network of roofers handles hail, wind, and hurricane damage. We assist with insurance claims. Schedule a free damage assessment now."
    },
    {
        slug: "roof-leak-repair",
        name: "Roof Leak Repair",
        title: "Roof Leak Repair",
        h1: "Roof Leak Repair in",
        description: "Fast and reliable roof leak repair in {city}, {state}. Stop water damage now. We connect you with specialists who can find and fix any leak, big or small. Get your free quote."
    }
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
export const getLocationBySlug = (slug: string) => locations.find(l => l.slug === slug);

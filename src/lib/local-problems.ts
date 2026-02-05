
export type ProblemSolution = {
    problem: {
        title: string;
        description: string;
        imageId: string;
    };
    solution: {
        title: string;
        description: string;
        imageId: string;
    };
};

export const localProblemsMap: Record<string, ProblemSolution> = {
    hail: {
        problem: {
            title: "Hail Damage",
            description: "In places like {city}, hailstones can pulverize standard asphalt shingles. This causes granule loss and creates 'bruises' that crack the underlying mat, leading to hidden leaks and premature roof failure.",
            imageId: "problem-hail-damage"
        },
        solution: {
            title: "Impact-Resistant Shingles",
            description: "The contractors in our network can install Class 4 impact-resistant shingles. These are engineered to withstand severe hail in {city}, can extend your roof's lifespan, and may even qualify you for a homeowner's insurance discount.",
            imageId: "solution-new-shingles"
        }
    },
    wind: {
        problem: {
            title: "Wind & Storm Damage",
            description: "In {city}, high winds from thunderstorms or hurricanes can lift, crease, or completely tear shingles off your roof. This leaves the underlayment exposed to immediate water intrusion and damage.",
            imageId: "problem-wind-damage"
        },
        solution: {
            title: "Fortified Installation",
            description: "A professional installation using the correct number of fasteners per shingle and a reinforced perimeter is key for {city} roofs. Pros use high-wind rated shingles and proven techniques to keep your roof intact.",
            imageId: "solution-roof-repair"
        }
    },
    sun: {
        problem: {
            title: "Intense Sun & UV Damage",
            description: "The relentless {city} sun bakes asphalt shingles, causing them to become brittle, curl at the edges, and crack. This UV degradation drastically shortens a roof's lifespan in our climate.",
            imageId: "problem-sun-damage"
        },
        solution: {
            title: "Cool & Reflective Roofing",
            description: "Modern 'cool roof' shingles reflect more solar radiation, keeping your attic and home cooler. This lowers energy bills and extends the roof's life by reducing thermal stress from the {city} sun.",
            imageId: "solution-cool-roof"
        }
    },
    rain: {
        problem: {
            title: "Leaks & Water Intrusion",
            description: "A small leak from flashing or a damaged pipe boot after a {city} downpour can lead to catastrophic damage over time, including rotted wood, saturated insulation, and toxic mold growth.",
            imageId: "problem-leak-damage"
        },
        solution: {
            title: "Expert Leak Detection & Repair",
            description: "Finding the true source of a leak requires expertise. The {city} pros in our network use specialized techniques to pinpoint the entry point and provide a permanent repair, not just a temporary patch.",
            imageId: "solution-leak-repair"
        }
    },
};

// This maps the strings from locations.ts to our problem keys
export const commonRiskToProblemKey: Record<string, keyof typeof localProblemsMap> = {
    "severe hailstorms": "hail",
    "large hail": "hail",
    "hailstorms": "hail",
    "very large hail": "hail",
    "high winds": "wind",
    "wind damage": "wind",
    "strong winds": "wind",
    "hurricanes": "wind",
    "tornadoes": "wind",
    "wind from coastal storms": "wind",
    "strong thunderstorms": "wind",
    "windstorms": "wind",
    "intense sun exposure": "sun",
    "extreme heat": "sun",
    "uv degradation": "sun",
    "heat absorption": "sun",
    "extreme summer heat": "sun",
    "heavy rainfall": "rain",
    "monsoon storms": "rain",
    "winter rain leaks": "rain",
    "torrential rain and flooding": "rain",
    "flash floods": "rain",
    "sudden downpours": "rain",
};

    

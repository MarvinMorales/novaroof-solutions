
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
            description: "Hailstones can pulverize standard asphalt shingles, causing granule loss and creating 'bruises' that crack the underlying mat, leading to hidden leaks and premature roof failure.",
            imageId: "problem-hail-damage"
        },
        solution: {
            title: "Impact-Resistant Shingles",
            description: "Contractors can install Class 4 impact-resistant shingles. These are engineered to withstand severe hail, can extend your roof's lifespan, and may even qualify you for a homeowner's insurance discount.",
            imageId: "solution-new-shingles"
        }
    },
    wind: {
        problem: {
            title: "Wind & Storm Damage",
            description: "High winds from thunderstorms, hurricanes, or tornadoes can lift, crease, or completely tear shingles off your roof, leaving the underlayment exposed to immediate water intrusion.",
            imageId: "problem-wind-damage"
        },
        solution: {
            title: "Fortified Installation",
            description: "A professional installation with the correct number of fasteners per shingle and a reinforced perimeter is key. Pros use high-wind rated shingles and techniques to keep your roof intact.",
            imageId: "solution-roof-repair"
        }
    },
    sun: {
        problem: {
            title: "Intense Sun & UV Damage",
            description: "Relentless sun exposure bakes asphalt shingles, causing them to become brittle, curl at the edges, and crack. This UV degradation drastically shortens a roof's lifespan.",
            imageId: "problem-sun-damage"
        },
        solution: {
            title: "Cool & Reflective Roofing",
            description: "Modern 'cool roof' shingles reflect more solar radiation, keeping your attic and home cooler, lowering energy bills, and extending the life of the roofing material by reducing thermal stress.",
            imageId: "solution-cool-roof"
        }
    },
    rain: {
        problem: {
            title: "Leaks & Water Intrusion",
            description: "A small leak from flashing, a damaged pipe boot, or a single missing shingle can lead to catastrophic damage over time, including rotted wood, saturated insulation, and toxic mold growth.",
            imageId: "problem-leak-damage"
        },
        solution: {
            title: "Expert Leak Detection & Repair",
            description: "Finding the true source of a leak requires expertise. Pros use specialized techniques to pinpoint the entry point and provide a permanent repair, not just a temporary patch.",
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

    
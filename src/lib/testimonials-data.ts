
export type Testimonial = {
    id: number;
    name: string;
    city?: string;
    stateCode?: string;
    serviceSlug?: string;
    comment: string;
    rating: number;
};

export const testimonialsData: Testimonial[] = [
    // Generic
    {
        id: 1,
        name: "Sarah K.",
        comment: "Finding a trustworthy roofer is tough. This service made it simple. The quote was clear, and the work was exceptional. I'd definitely use them again to find other contractors.",
        rating: 5,
    },
    {
        id: 2,
        name: "Mike P.",
        comment: "The process was so fast. I filled out the form and got a call from a local company in under 10 minutes. The contractor they connected me with was professional and did a high-quality job.",
        rating: 5,
    },
    {
        id: 3,
        name: "Jessica L.",
        comment: "I was worried about the cost, but the quote I received was very competitive. The service is free and there's no obligation, so it's a no-brainer for getting an estimate.",
        rating: 5,
    },

    // Houston, TX
    {
        id: 10,
        name: "David R.",
        city: "Houston",
        stateCode: "TX",
        serviceSlug: "roof-replacement",
        comment: "After the last hurricane, our roof was a mess. The Houston contractor they found for us handled the entire replacement, including the tricky insurance paperwork. The new roof has held up perfectly. Highly recommend.",
        rating: 5,
    },
    {
        id: 11,
        name: "Emily C.",
        city: "Houston",
        stateCode: "TX",
        serviceSlug: "emergency-roof-repair",
        comment: "A tree limb came down on our roof during a bad thunderstorm. They connected us with an emergency crew in Houston that came out the same night to tarp it and prevent more damage. Fast and professional.",
        rating: 5,
    },
    {
        id: 12,
        name: "Carlos G.",
        city: "Houston",
        stateCode: "TX",
        serviceSlug: "roof-leak-repair",
        comment: "We had a persistent leak that two other roofers couldn't fix. The company they found for us in Houston located the source in under an hour and provided a permanent fix. No issues since, even with all the rain.",
        rating: 5,
    },

    // Miami, FL
    {
        id: 20,
        name: "Isabella M.",
        city: "Miami",
        stateCode: "FL",
        serviceSlug: "roof-replacement",
        comment: "In Miami, you need a roof built for hurricanes. The contractor they connected us with was an expert in HVHZ codes. The inspection was thorough and the final product is a fortress. Worth every penny for the peace of mind.",
        rating: 5,
    },
    {
        id: 21,
        name: "James T.",
        city: "Miami",
        stateCode: "FL",
        serviceSlug: "emergency-roof-repair",
        comment: "A tropical storm caused major damage. We used this service and they had a Miami crew at our house within two hours to tarp the roof. They saved us from major water damage. A lifesaver!",
        rating: 5,
    },

    // Dallas, TX
    {
        id: 30,
        name: "Jennifer A.",
        city: "Dallas",
        stateCode: "TX",
        serviceSlug: "storm-damage-roof",
        comment: "That last hailstorm in Dallas was brutal. The roofer they connected us with was an insurance claim pro. They met with the adjuster and got the entire replacement approved. Couldn't have done it without them.",
        rating: 5,
    },
    {
        id: 31,
        name: "Brian W.",
        city: "Dallas",
        stateCode: "TX",
        serviceSlug: "roof-inspection",
        comment: "We're new to Dallas and wanted to know the condition of our roof before hail season. The inspector they found was incredibly thorough and gave us a detailed report. Great for peace of mind.",
        rating: 5,
    },
    {
        id: 32,
        name: "Mark T.",
        city: "Denver",
        stateCode: "CO",
        serviceSlug: "hail-damage-roof-repair",
        comment: "After a major hailstorm, our roof was dented everywhere. The service found us a local Denver crew that was amazing. They documented everything for our insurance and installed impact-resistant shingles. Great experience.",
        rating: 5,
    },
    {
        id: 33,
        name: "Brenda J.",
        city: "Fort Worth",
        stateCode: "TX",
        serviceSlug: "hail-damage-roof-repair",
        comment: "I didn't think the hail was that bad, but the free inspection they arranged found a ton of hidden damage. The Fort Worth contractor they connected us with fixed it fast and helped with the insurance process.",
        rating: 5,
    },

    // Phoenix, AZ
    {
        id: 40,
        name: "Amanda S.",
        city: "Phoenix",
        stateCode: "AZ",
        serviceSlug: "roof-replacement",
        comment: "The sun in Phoenix just destroyed our old roof. The contractor they found installed a 'cool roof' for us. The difference in our summer electricity bill is amazing. The house is so much cooler.",
        rating: 5,
    },
    {
        id: 41,
        name: "Robert N.",
        city: "Phoenix",
        stateCode: "AZ",
        serviceSlug: "roof-repair",
        comment: "We had some cracked tiles from a monsoon storm. The Phoenix company they connected us with did a great job matching the tiles and fixing the underlayment. Quick and affordable repair.",
        rating: 5,
    },
    
    // Denver, CO
    {
        id: 50,
        name: "Laura H.",
        city: "Denver",
        stateCode: "CO",
        serviceSlug: "storm-damage-roof",
        comment: "Hail is no joke in Denver. We got Class 4 impact-resistant shingles through a contractor they found. Our insurance premium even went down! Excellent service.",
        rating: 5,
    },

    // Gutter Services
    {
        id: 60,
        name: "Tom F.",
        city: "Atlanta",
        stateCode: "GA",
        serviceSlug: "gutter-services",
        comment: "Our gutters were always overflowing from pine needles. The Atlanta company they found installed gutter guards and we haven't had a problem since. Should have done this years ago.",
        rating: 5,
    },
];

import { CheckCircle, ShieldCheck, Users, Zap } from 'lucide-react';

// Centralized Phone Number
export const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '(562) 317-7925';
export const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '');
export const domain = 'novaroofsolutions.com';

// Locations
export const locations = [
  {
    slug: 'houston-tx',
    city: 'Houston',
    state: 'TX',
  },
  // We can add more Texas cities here later, e.g.:
  // {
  //   slug: 'dallas-tx',
  //   city: 'Dallas',
  //   state: 'TX',
  // },
];

// Services
export const services = [
  {
    slug: 'roof-repair',
    title: "Roof Repair",
    description: "From minor leaks to major issues, we provide reliable roof repairs to protect your Texas home from harsh weather.",
    image: "https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg",
    imageHint: "roof repair",
    alt: "Professional roof repair service in Houston TX for leaks and damage."
  },
  {
    slug: 'roof-replacement',
    title: "Roof Replacement",
    description: "Full roof replacements using premium materials for long-lasting protection and enhanced curb appeal for your Texas property.",
    image: "https://collinsandsonroofing.com/wp-content/uploads/2023/10/collins-blog-88-1080x675.jpg",
    imageHint: "new roof installation",
    alt: "Complete roof replacement with new shingles in Houston."
  },
  {
    slug: 'storm-damage-repair',
    title: "Storm Damage Repair",
    description: "Rapid response and expert repair for damage caused by Texas hurricanes, hail, and high winds.",
    image: "https://ahouseinthehills.com/wp-content/uploads/2026/02/Close-up-of-asphalt-roof-shingles-lifted-by-wind-showing-torn-edges-and-debris-under-a-cloudy-sky-with-dramatic-storm-damage-detail.png.webp",
    imageHint: "storm damaged roof",
    alt: "Storm damage roof repair in Houston for hail and wind damage."
  },
  {
    slug: 'commercial-roofing',
    title: "Commercial Roofing",
    description: "Scalable and robust roofing systems for businesses, warehouses, and commercial properties across Texas.",
    image: "https://www.stahlroofing.ca/wp-content/uploads/2020/08/Reasons-To-Work-With-A-Professional-Commercial-Roofing-Company-2.jpg.webp",
    imageHint: "commercial building roof",
    alt: "Commercial roofing services for a large building in Houston."
  },
];

// Why Choose Us
export const whyChooseUsPoints = [
  {
    icon: CheckCircle,
    title: "GAF Certified Contractor",
    description: "Our GAF certification places us in the top 3% of roofing contractors, ensuring top-quality materials and installation techniques backed by the industry's strongest warranties.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured for Your Protection",
    description: "Your peace of mind is our priority. We carry full liability insurance, protecting your property and our team throughout the entire project.",
  },
  {
    icon: Users,
    title: "Local Houston Experts",
    description: "We know Texas weather. Our team of local professionals understands the unique challenges of Houston's heat, humidity, and storms, ensuring a durable, long-lasting solution.",
  },
  {
    icon: Zap,
    title: "Rapid Response & Free Estimates",
    description: "Time is critical with a damaged roof. We offer a fast response to inspect your property and provide a free, detailed, no-obligation estimate for an informed decision.",
  },
];

// Testimonials
export const testimonials = [
  {
    quote: "Nova Roof Solutions transformed our home. The team was professional, efficient, and the quality of their work is outstanding. They handled everything after the storm, making a stressful situation easy.",
    name: "Sarah L.",
    location: "The Woodlands, TX",
  },
  {
    quote: "As a business owner, I needed a reliable team for our new facility. Nova delivered on time and on budget. Their communication and attention to detail were second to none. Highly recommend.",
    name: "David Chen",
    location: "Katy, TX",
  },
  {
    quote: "After seeing water stains on our ceiling, we called Nova for an estimate. They were honest, transparent, and didn't try to upsell us. The repair was done quickly and we haven't had an issue since.",
    name: "Maria Rodriguez",
    location: "Sugar Land, TX",
  },
];

// FAQ Content
export const faqContent = [
  {
    question: "How much does roof repair cost in Houston, TX?",
    answer: "Roof repair costs in Houston vary depending on the extent of the damage, the materials needed, and your roof's size and pitch. Minor repairs, like replacing a few missing shingles, can be a few hundred dollars, while more significant leak repairs might cost more. We provide a detailed, transparent, and free estimate after a thorough inspection so you know the exact cost upfront.",
    slug: "cost-roof-repair-houston"
  },
  {
    question: "Do you offer emergency roof repair in Houston?",
    answer: "Yes, we provide fast emergency roof repair services across Houston for urgent issues like severe leaks and storm damage. Our team is ready to respond quickly to protect your home from further damage.",
    slug: "emergency-roof-repair-houston"
  },
  {
    question: "How long does a roof repair take?",
    answer: "The timeline depends on the complexity of the job. Most common repairs, such as fixing leaks or replacing shingles, are completed within a single day. We work efficiently to minimize disruption to your routine and secure your home as quickly as possible.",
    slug: "roof-repair-duration"
  },
  {
    question: "Will my insurance cover the roof repair?",
    answer: "In many cases, especially for storm or hail damage, your homeowner's insurance will cover the cost of roof repair. We have extensive experience working with insurance companies and can assist you with the claims process to ensure it's as smooth and stress-free as possible.",
    slug: "insurance-coverage-roof-repair"
  }
];

export const areasWeServe = [
  "Katy",
  "Cypress",
  "The Woodlands",
  "Sugar Land",
  "Pearland",
  "Spring Branch",
  "Memorial",
  "Kingwood",
  "Clear Lake",
  "Downtown Houston"
];

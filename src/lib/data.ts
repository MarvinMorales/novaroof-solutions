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
    imageHint: "roof repair"
  },
  {
    slug: 'roof-replacement',
    title: "Roof Replacement",
    description: "Full roof replacements using premium materials for long-lasting protection and enhanced curb appeal for your Texas property.",
    image: "https://collinsandsonroofing.com/wp-content/uploads/2023/10/collins-blog-88-1080x675.jpg",
    imageHint: "new roof installation"
  },
  {
    slug: 'storm-damage-repair',
    title: "Storm Damage Repair",
    description: "Rapid response and expert repair for damage caused by Texas hurricanes, hail, and high winds.",
    image: "https://ahouseinthehills.com/wp-content/uploads/2026/02/Close-up-of-asphalt-roof-shingles-lifted-by-wind-showing-torn-edges-and-debris-under-a-cloudy-sky-with-dramatic-storm-damage-detail.png.webp",
    imageHint: "storm damaged roof"
  },
  {
    slug: 'commercial-roofing',
    title: "Commercial Roofing",
    description: "Scalable and robust roofing systems for businesses, warehouses, and commercial properties across Texas.",
    image: "https://www.stahlroofing.ca/wp-content/uploads/2020/08/Reasons-To-Work-With-A-Professional-Commercial-Roofing-Company-2.jpg.webp",
    imageHint: "commercial building roof"
  },
];

// Why Choose Us
export const whyChooseUsPoints = [
  {
    icon: CheckCircle,
    title: "GAF Certified Contractor",
    description: "As a GAF certified contractor, we adhere to the highest standards of quality and professionalism in the industry.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured & Bonded",
    description: "We carry comprehensive insurance coverage, including a $2 million liability policy, for your complete peace of mind.",
  },
  {
    icon: Users,
    title: "Local Texas Experts",
    description: "Our team consists of dedicated, in-house roofing professionals who understand Texas weather—we never use subcontractors.",
  },
  {
    icon: Zap,
    title: "Rapid Response & Free Estimates",
    description: "We provide fast, detailed, and transparent estimates for all projects, helping you make informed decisions quickly.",
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

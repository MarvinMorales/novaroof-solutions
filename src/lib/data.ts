import { CheckCircle, ShieldCheck, Users, Zap } from 'lucide-react';

// Centralized Phone Number
export const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '(832) 555-ROOF';
export const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '');

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
    image: "https://picsum.photos/seed/repair/800/600",
    imageHint: "roof repair"
  },
  {
    slug: 'roof-replacement',
    title: "Roof Replacement",
    description: "Full roof replacements using premium materials for long-lasting protection and enhanced curb appeal for your Texas property.",
    image: "https://picsum.photos/seed/replacement/800/600",
    imageHint: "new roof installation"
  },
  {
    slug: 'storm-damage-repair',
    title: "Storm Damage Repair",
    description: "Rapid response and expert repair for damage caused by Texas hurricanes, hail, and high winds.",
    image: "https://picsum.photos/seed/stormdamage/800/600",
    imageHint: "storm damaged roof"
  },
  {
    slug: 'commercial-roofing',
    title: "Commercial Roofing",
    description: "Scalable and robust roofing systems for businesses, warehouses, and commercial properties across Texas.",
    image: "https://picsum.photos/seed/commercial/800/600",
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

// Gallery Images
export const galleryImages = [
  { id: 1, src: "https://picsum.photos/seed/gallery1/1024/768", alt: "Completed shingle roof on a modern Texas home.", hint: "shingle roof" },
  { id: 2, src: "https://picsum.photos/seed/gallery2/1024/768", alt: "Detailed view of metal roof installation in Houston.", hint: "metal roof" },
  { id: 3, src: "https://picsum.photos/seed/gallery3/1024/768", alt: "Large commercial roofing project in Texas.", hint: "commercial roof" },
  { id: 4, src: "https://picsum.photos/seed/gallery4/1024/768", alt: "Repairing storm damage on a residential roof in Texas.", hint: "roof repair" },
  { id: 5, src: "https://picsum.photos/seed/gallery5/1024/768", alt: "Beautiful new tile roof in a Texas suburban neighborhood.", hint: "tile roof" },
  { id: 6, src: "https://picsum.photos/seed/gallery6/1024/768", alt: "Team of Texas roofers working on a large-scale installation.", hint: "roofing team" },
];

// Testimonials
export const testimonials = [
  {
    quote: "Apex Roofing transformed our home. The team was professional, efficient, and the quality of their work is outstanding. They handled everything after the storm, making a stressful situation easy.",
    name: "Sarah L.",
    location: "The Woodlands, TX",
  },
  {
    quote: "As a business owner, I needed a reliable team for our new facility. Apex delivered on time and on budget. Their communication and attention to detail were second to none. Highly recommend.",
    name: "David Chen",
    location: "Katy, TX",
  },
  {
    quote: "After seeing water stains on our ceiling, we called Apex for an estimate. They were honest, transparent, and didn't try to upsell us. The repair was done quickly and we haven't had an issue since.",
    name: "Maria Rodriguez",
    location: "Sugar Land, TX",
  },
];
